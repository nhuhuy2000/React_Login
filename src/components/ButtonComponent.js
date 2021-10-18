import React from "react";

class ButtonComponent extends React.Component {
   
  
    handleLogin = (event) => (
        event.preventDefault(),
        console.log(this.props.email),
        console.log(this.props.password)
    )
   
    render() {
        
        return (
            <>

                <button id="btnLogin" style={{background : this.props.colorbutton}} onClick={ (event) => this.handleLogin(event)}>Login</button>
                
               
            </>
        )
    }
}
export default ButtonComponent;