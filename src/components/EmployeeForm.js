import React, { useState } from "react";

const EmployeeForm = (props) => {
  const [values, setValues] = useState({
    name: "",
    age: "",
  });
  const handleNameChange = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const handleAgeChange = (e) => {
    setValues({ ...values, age: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addDetails({
      id: Math.floor(Math.random() * 10).toString(),
      ...values,
    });
    setValues({ name: "", age: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={values.name}
        onChange={handleNameChange}
      />
      <input
        type=""
        placeholder="Age"
        value={values.age}
        onChange={handleAgeChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default EmployeeForm;
