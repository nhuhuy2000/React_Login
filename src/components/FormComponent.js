
import React from 'react';
import ButtonComponent from './ButtonComponent';
class FormComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            colorbutton: '#00FFFF'
        }
    }
    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
      
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleReset = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
            colorbutton: '#00FFFF'
        })
    }
    render() {
    return (
    <>
     <div className="container">
      <form className="form-1">
        <h1>Login</h1>
        <label htmlFor="email" >Email</label>
        <input type="text" placeholder="Email" value={this.state.email} onChange={(event) => this.handleOnChangeEmail(event)}/>
        <label htmlFor="password" >Password</label>
        <input type="text" placeholder="Password" value={this.state.password} onChange={(event) => this.handleOnChangePassword(event)}/>
        <ButtonComponent email={this.state.email}
        password={this.state.password}
        colorbutton = {this.state.colorbutton}
        />
        <button style={{background : this.state.colorbutton}} id="btnReset" onClick={(event) => this.handleReset(event)}>Reset</button>
         
        

      </form>
    </div>

    </>
    )
    }
}
export default FormComponent;