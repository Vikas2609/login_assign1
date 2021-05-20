import React from 'react'

const EmployeeTile = (props) => {
    console.log(props)
    return ( 
        <div>
            <div>
                <div>Id-{props.id}</div>
                <span>Name-{props.name}</span>
                <br />
                <span>Age-{props.age}</span>
            </div>
        </div>

     );
}
 
export default EmployeeTile;