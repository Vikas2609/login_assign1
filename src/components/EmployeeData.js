import React from 'react'
import EmployeeTile from "./EmployeeTile"

const EmployeeData = (props) => {
    return (
        <div>
            {props.employees.map((item,index)=><EmployeeTile key={index} {...item}/>)}
            
        </div>
    );
}

export default EmployeeData;