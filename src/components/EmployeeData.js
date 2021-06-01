import React from "react";
import EmployeeTile from "./EmployeeTile";

const EmployeeData = (props) => {
  return (
    <div>
      <EmployeeTile employees={props.employees} age={props.age}/>
    </div>
  );
};

export default EmployeeData;
