import React from "react";
import EmployeeForm from "./EmployeeForm";

const NewEmployee = (props) => {
  return <EmployeeForm addDetails={props.addDetails} />;
};

export default NewEmployee;
