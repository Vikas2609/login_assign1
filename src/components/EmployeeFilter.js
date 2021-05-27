import React,{useState} from 'react'
const EmployeeFilter = (props) => {
    const[age,setAge]=useState("0")

    const array = [15,25,21,56,100,45,22,23,24,25,44,19,63,35,38,30];

   const handleChange=(e)=>{
       setAge(e.target.value)
       props.saveAge(e.target.value)
   }
    return ( 
        <div>
            <p>Select the Age of Employee</p>
            <select value={age} onChange={handleChange}>
                {array.map((item, index) => <option key={index} value={item}>{item}</option>)}
            </select>
        </div>
        
    );
}
 
export default EmployeeFilter;