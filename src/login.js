import React from 'react';
import styles from './login.modules.css'


class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state={username: "",
                password: ""
               }
  }

  handleUserChange= (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassChange= (e) => {
    this.setState({
      password: e.target.value,
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    return (
  <div>
     <div><h1 className='heading'>LOGIN PAGE</h1></div>
      
     <div className='form'>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUserChange}/>
        <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePassChange}/>
        <button>login</button>
      </form>
    </div>
  </div> 
      
    );
  }
}

export default MyForm