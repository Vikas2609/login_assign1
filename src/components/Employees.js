import React from "react";
import EmployeeFilter from "./EmployeeFilter";

const Employees = (props) => {
  const saveAge = (a) => {
    console.log("Selected Age:", a);
  };
  return (
    <div>
      <EmployeeFilter saveAge={saveAge} />
    </div>
  );
};

export default Employees;
