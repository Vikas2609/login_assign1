import React from 'react';
import styles from './login.modules.css'


class MyForm extends React.Component {
  
  render() {
    return (
  <div>
     <div><h1 className='heading'>LOGIN PAGE</h1></div>
      
     <div className='form'>
      <form>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>login</button>
      </form>
    </div>
  </div> 
      
    );
  }
}

export default MyForm