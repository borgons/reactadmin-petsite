import React, {Fragment, useEffect, useState}   from 'react'

import Pagination from 'react-js-pagination'
import axios from 'axios'

import FrmProfileTable from '../frmTables/FrmProfileTable'

import loadingSpinner from '../loading/LoadingHooks'

const FrmProfile = () => {

   // LOADING STATE
   const [loader, showLoader, hideLoader] = loadingSpinner();


   // FORM STATE
   const [profiles, updateProfiles] = useState([]);

   async function getProfile(pageNumber = 1){
      showLoader();
      const url = `http://localhost:3000/api/vacProfile?page=${pageNumber}`
      const res = await axios.get(`${url}`);
         try {
            hideLoader();
            updateProfiles(res.data)
         } catch (err) {
            console.log(err)
         }
   }

   useEffect(function effectFunction(){
      getProfile(); //eslint-disable-next-line
   }, [])

   const  {data, current_page, per_page, total} = profiles;

   const onSearch = (search) => {
      showLoader();
      axios.get(`http://localhost:3000/api/vacProfile?vacOwnerID=${search}`)
      .then(res => {
         if(res){
            hideLoader();
            updateProfiles(res.data)
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
                              <h5 style={link}>Search OwnerID</h5>
                           </div>
                        </div>

                        <div className="field">
                           <div className="control">
                              <input 
                                 className="input" 
                                 type="number"
                                 onChange={e => onSearch(e.target.value)}
                                 placeholder="Pet ID" />
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
                           <tr>
                              <th className="is-danger">vacOwnerID</th>
                              <th className="is-warning">vacID</th>
                              <th className="is-warning">vacPetID</th>
                              <th className="is-warning">vacName</th>
                              <th className="is-warning">vacType</th>
                              <th className="is-warning">vacDate</th>
                              <th className="is-warning">vacStatus</th>
                           </tr>
                        </thead>
                        { data && data.map((profile, key) => {
                           return (
                              <FrmProfileTable 
                                 profile={profile}
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
                     onChange={(pageNumber) => getProfile(pageNumber)}
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

export default FrmProfile
