import React, { useState } from "react";
import EmployeeData from "./components/EmployeeData";
import Employees from "./components/Employees";
import NewEmployee from "./components/NewEmployee";

const employees = [
  {
    id: "e1",
    name: "Akhil",
    age: 20,
  },
  {
    id: "e2",
    name: "Aman",
    age: 21,
  },
  {
    id: "e3",
    name: "Vikas",
    age: 22,
  },
  {
    id: "e4",
    name: "Harminder",
    age: 23,
  },
  {
    id: "e5",
    name: "Deeksha",
    age: 24,
  },
  {
    id: "e6",
    name: "Puneet",
    age: 25,
  },
];

const App = () => {
  const [newEmployees, setNewEmployees] = useState(employees);

  const addDetails = (newEmployees) => {
    setNewEmployees((prevNewEmployees) => {
      return [...prevNewEmployees, newEmployees];
    });
  };
  return (
    <div>
      <h2>Employee data</h2>
      <EmployeeData employees={newEmployees} />
      <NewEmployee addDetails={addDetails} />
      <Employees />
    </div>
  );
};

export default App;
