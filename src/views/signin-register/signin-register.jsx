import React from "react";
import SignIn from "../../components/login/signin.component";
import Register from "../../components/login/register.component";
import Grid from '@material-ui/core/Grid';

class  SignInRegister extends React.Component
{
constructor(){
    super();
   // this.state={courseData:courseData};
}
 

render() {
return <div className="signin-register">
<Grid container spacing={3}>
        <Grid item xs>
        <SignIn/>
        </Grid>
        <Grid item xs>
          
<Register/>
        </Grid>
       </Grid>

</div>
}
}
export default SignInRegister;