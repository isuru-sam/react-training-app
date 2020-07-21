import React from "react";
import {Route,Switch} from "react-router-dom"
import ItemListPage from "./views/itemList/itemList.jsx";
import CourseDescription from "./components/courseDescription/courseDescription.component.jsx";
import SignInRegister from "./views/signin-register/signin-register.jsx";

function App(props){
return <div>
<Switch>
  <Route exact path="/" component={ItemListPage}/>
  <Route exact path="/courseDescription/:id" component={CourseDescription}/>
  <Route exact path="/signInRegister" component={SignInRegister}/>
</Switch>

</div>
}

export {App};