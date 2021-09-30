import React, {Fragment,useEffect, useState } from 'react'

import Pagination from 'react-js-pagination'
import axios from 'axios'

import FrmAppointTable from '../frmTables/FrmAppointTable'

import loadingSpinner from '../loading/LoadingHooks'

const FrmAppointments = () => {

   // LOADING STATE 
   const [loader, showLoader, hideLoader] = loadingSpinner();

   // FORM STATE
   const [apps, updateApps] = useState([]);


   async function getApp(pageNumber = 1){
      showLoader();
      const url = `http://localhost:3000/api/appointments?page=${pageNumber}`
      const res = await axios.get(`${url}`);
         try {
            hideLoader();
            updateApps(res.data)
         } catch (err) {
            console.log(err)
         }
   }

   useEffect(function effectFunction() {
      getApp();  // eslint-disable-next-line
   }, [])

   const  {data, current_page, per_page, total} = apps;

   //SEARCH
   const onSearch = (search) => {
      showLoader();
      axios.get(`http://localhost:3000/api/appointments?appPetID=${search}`)
      .then(res => {
         if(res){
            hideLoader();
            updateApps(res.data)
         }
      })
   }

   return (
      <Fragment>
         <div className="container">
            <div className="columns">
               <div className="column is-4 is-offset-one-half m-auto ">
                  {/* SEARCH FORM */}
                  <div className="box" style={getColorBox}>
                     <div className="content">
                        <div className="has-text-centered">
                           <h5 style={link}>Search Pet ID</h5>
                        </div>
                     </div>

                     <div className="field">
                        <div className="control">
                           <input 
                              className="input" 
                              type="text" 
                              onChange={e => onSearch(e.target.value)}
                              placeholder="Appointment ID" />
                        </div>
                     </div>
                  </div>  
               </div>
            </div>

            <div className="columns">
               <div className="column is-1  m-auto">
                  {loader}
               </div>
            </div>
      

            <div className="columns">
               {/* TABLE APPOINTMENT */}
               <div className="column is-8 is-offset-one-half m-auto">
                  <table className="table is-bordered m-auto">
                        <thead>
                           <tr className="table"> 
                              <th className="is-danger" >Appointment No.</th>
                              <th className="is-warning">Pet ID</th>
                              <th className="is-warning">Pet Name</th>
                              <th className="is-warning">Purpose</th>
                              <th className="is-warning">Appointment Date</th>
                              
                           </tr>
                        </thead>
                        { data && data.map((app, key) => {
                           return (
                              <FrmAppointTable 
                                 app={app}
                                 key={key}
                              />
                           );
                        })}
                     </table>
               </div>
            </div>

            <div className="columns">
               <div className="column is-4 is-offset-one-half m-auto">
                  <Pagination 
                     activePage={current_page}
                     totalItemsCount={total}
                     itemsCountPerPage={per_page}
                     onChange={(pageNumber) => getApp(pageNumber)}
                     linkClass="pagination-link"
                     activeLinkClass="is-current"
                     linkClassPrev="pagination-previous"
                     linkClassNext="pagination-next"
                     prevPageText="Prev"
                     nextPageText="Next" />
               </div>
            </div>
         </div>
      </Fragment>
   )
}

const getColorBox = {
   backgroundColor: '#3e8ed0'
}

const link = {
   color:'#fff',
}



export default FrmAppointments
