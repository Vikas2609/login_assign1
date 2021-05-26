import React, { useState } from 'react'


const EmployeeForm = () => {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const id=(Math.floor(Math.random()*10)).toString()
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("ID:" +id)
        console.log("Entered name is:" + name)
        console.log("Entered Age is:" + age)
        setName('')
        setAge('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
            <input type="" placeholder="Age" value={age} onChange={handleAgeChange}/>
            <button>Submit</button>
        </form>
     );
}
 
export default EmployeeForm ;