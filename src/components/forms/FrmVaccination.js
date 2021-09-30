import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addVac } from '../../actions/adminActions'
import VaccErrorMsgs from '../messages/VaccinationErrorMsg'



const FrmVaccination = ({ addVac }) => {

   /// DEALING WITH FORMS 
   const [frmVacData, setFrmVacData] = useState(
      {
         vacID:"",
         vacOwnerID:"",
         vacPetID:"",
         vacName:"",
         vacType:"",
      },
      []
   );

   const {
      vacID, 
      vacOwnerID,
      vacPetID,
      vacName,
      vacType
   } = frmVacData;

   const [errorHandler, setErrorHandler] = useState ({
      hasError: false, 
      msg: "",
   })

   const onChange = e => {
      setFrmVacData({ ...frmVacData, [e.target.name]: e.target.value})
   }

   const onSubmit = e => {
      e.preventDefault(); 

      addVac(frmVacData, setErrorHandler);

      setFrmVacData({
         vacID:"",
         vacOwnerID:"",
         vacPetID:"",
         vacName:"",
         vacType:""
      })
   }

   return (
      <Fragment>
         <VaccErrorMsgs errorHandler={errorHandler} />
         <div className="container">
            <div className="columns">
               {/* TABLE APPOINTMENT */}
               <div className="column is-5 is-offset-one-half m-auto">
                  <div className="column is-desktop">

                     <div className="box" style={getColorBox}>
                        
                        <form onSubmit={onSubmit}> 
                           <div className="field">
                                 <label className="label">Vaccine OwnerID</label>
                                 <div className="control">
                                    <input 
                                       className="input" 
                                       name="vacOwnerID"
                                       type="number" 
                                       value={vacOwnerID}
                                       onChange ={(e) => onChange(e)}
                                       placeholder="Vaccine PetID" />
                                 </div>
                           </div>
                           <hr />

                           <div className="field">
                              <label className="label">Vaccine PetID</label>
                              <div className="control">
                                 <input 
                                    className="input" 
                                    name="vacPetID"
                                    type="number" 
                                    value={vacPetID}
                                    onChange ={(e) => onChange(e)}
                                    placeholder="Vaccine PetID" />
                              </div>
                           </div>
                           <div className="field">
                              <label className="label">Vaccine ID</label>
                              <div className="control">
                                 <input 
                                    className="input" 
                                    name="vacID"
                                    type="number" 
                                    value={vacID}
                                    onChange={(e) => onChange(e)}
                                    placeholder="Vaccine ID" />
                              </div>
                           </div>

                           <div className="field">
                              <label className="label">Vaccine Name</label>
                              <div className="control">
                                 <input 
                                    className="input" 
                                    name="vacName"
                                    type="text" 
                                    placeholder="Vaccine Name" 
                                    value={vacName}
                                    onChange={(e) => onChange(e)}
                                    />
                              </div>
                           </div>

                           <div className="field">
                              <label className="label">Vaccine Type</label>
                              <div className="select is-normal is-link">
                                 <select name="vacType" value={vacType} onChange={(e) =>  onChange(e)} >
                                    <option value="3 in 1">3 in 1</option>
                                    <option value="5 in 1">5 in 1</option>
                                    <option value="7 in 1">7 in 1</option>
                                 </select>
                              </div>
                           </div>

                           <div className="buttons is-centered mt-4">
                              <button className="button is-primary is-centered">
                                 <strong>Submit</strong>
                              </button>
                           </div>
                        </form>
                     </div>

                  </div>
               </div>
            </div>

         </div>
      </Fragment>
   )
}

const getColorBox = {
   backgroundColor: '#3e8ed0'
}

FrmVaccination.propTypes = {
   addVac: PropTypes.func.isRequired
}


export default connect(null, {addVac})(FrmVaccination);
