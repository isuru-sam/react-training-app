import React from "react";
import './signin.component.scss'
import {signInWithGoogle,auth} from '../firebase/firebase.utils.js'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import { auth } from "firebase";
//import courseData from './courseList.data.js'
class  SignIn extends React.Component
{
constructor(){
    super();
    this.state={
        email:'',
        password:''
        }
}

handleChange = event => {
  const { value, name } = event.target;

  this.setState({ [name]: value });
};
handleClick= async event=>{
  event.preventDefault();
const {email,password}=this.state;
try{
await auth.signInWithEmailAndPassword(email,password);
console.log('loggedin')
}catch(e){
console.log(e)
}


    this.setState({ email: '', password: '' });
}

//https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
render() {
    const style = {
        margin: 15,
       };
return <div className="signin-register">
<h1>Login</h1>
UserName<TextField name="email"
             placeholder="Enter your Username"
             //floatingLabelText="Username"
             onChange = {this.handleChange}
             />
           <br/>
             Password<TextField name="password"
               type="password"
               placeholder="Enter your Password"
               //floatingLabelText="Password"
               onChange =  {this.handleChange}
               />
             <br/>
             <Button variant="contained" color="primary" style={style} onClick={(event) => this.handleClick(event)}>Login</Button>
             <Button variant="contained" color="primary" style={style} onClick={signInWithGoogle}>LoginWithGoogle</Button>
</div>
}
}
export default SignIn;