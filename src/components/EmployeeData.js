import React from "react";
import EmployeeTile from "./EmployeeTile";

const EmployeeData = (props) => {
  return (
    <div>
      {props.employees.map((item, id) => (
        <EmployeeTile key={id} {...item} />
      ))}
    </div>
  );
};

export default EmployeeData;
