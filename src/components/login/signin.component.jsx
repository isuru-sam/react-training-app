import React from "react";
import './signin.component.scss'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import courseData from './courseList.data.js'
class  SignIn extends React.Component
{
constructor(){
    super();
    this.state={
        username:'',
        password:''
        }
}
handleClick(event){
}
//https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
render() {
    const style = {
        margin: 15,
       };
return <div className="signin-register">
<h1>Login</h1>
UserName<TextField
             hintText="Enter your Username"
             //floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             Password<TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button variant="contained" color="primary" style={style} onClick={(event) => this.handleClick(event)}>Login</Button>
</div>
}
}
export default SignIn;