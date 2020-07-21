import React from "react";
import './register.component.scss'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import courseData from './courseList.data.js'
class  Register extends React.Component
{
constructor(){
    super();
  //  this.state={courseData:courseData};
  this.state={
    first_name:'',
    last_name:'',
    email:'',
    password:''
  }
}

handleClick(event){
}
render() {
    const style = {
        margin: 15,
      };
return <div className="signin-register">

<h1>Register</h1>
FirstName<TextField
             hintText="Enter your First Name"
            // floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           LastName<TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
          Email <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
          Password <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <Button variant="contained" color="primary" style={style} onClick={(event) => this.handleClick(event)}>Register</Button>
</div>
}
}
export default Register;