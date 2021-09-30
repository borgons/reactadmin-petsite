import React, { Fragment } from 'react'

const FrmProfileTable = ({ profile }) => {
   
   const {
      vacID, 
      vacOwnerID, 
      vacPetID, 
      vacName, 
      vacType, 
      vacDate, 
      vacStatus} = profile;

   return (
      <Fragment>
         <tbody>
            <tr>
               <td>{vacOwnerID}</td>
               <td>{vacID}</td>
               <td>{vacPetID}</td>
               <td>{vacName}</td>
               <td>{vacType}</td>
               <td>{vacDate}</td>
               <td>
                  {vacStatus}
               </td>
            </tr>
         </tbody>
      </Fragment>
   )
}


export default FrmProfileTable
