import React,{ Fragment } from 'react'

const FrmAppointTable= ({app}) => {

   const { 
      appNumber, 
      appPetID, 
      appPetName, 
      appPurpose, 
      appDate} = app;

   return (
      <Fragment>
         <tbody>
            <tr>
               <td>{appNumber}</td>
               <td>{appPetID}</td>
               <td>{appPetName}</td>
               <td>{appPurpose}</td>
               <td>{appDate}</td>
            </tr>
         </tbody>
      </Fragment>
   )
}

export default FrmAppointTable
