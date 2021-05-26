import React from 'react'
import EmployeeFilter from './EmployeeFilter';

const Employees = (props) => {
    return (
        <div>
            <EmployeeFilter data={props.employees}/>
        </div>
      );
}

 
export default Employees;