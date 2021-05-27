import React from 'react'
import EmployeeForm from './EmployeeForm'

const NewEmployee = (props) => {
    return (
        <EmployeeForm saveDetails={props.saveDetails}/>
      );
}
 
export default NewEmployee;