import React,{useState} from 'react'
const EmployeeFilter = (props) => {
    const[age,setAge]=useState("0")

   const handleChange=(e)=>{
       setAge(e.target.value)
       console.log("Selected Age:" +e.target.value)
   }
    return ( 
        <div>
            <p>Select the Age of Employee</p>
            <select value={age} onChange={handleChange}>
                {props.data.map((item, index) => <option key={index} value={item.age}>{item.age}</option>)}
            </select>
        </div>
        
    );
}
 
export default EmployeeFilter;