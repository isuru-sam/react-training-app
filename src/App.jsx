import React from "react";
import {Route,Switch} from "react-router-dom"
import ItemListPage from "./views/itemList/itemList.jsx";
import CourseDescription from "./components/courseDescription/courseDescription.component.jsx";
import SignInRegister from "./views/signin-register/signin-register.jsx";
import {auth,createUserProfileDocument} from './components/firebase/firebase.utils.js'
import TopNavBar from "./components/common/topMenuBar/topMenuBar";
import Footer from "./components/common/footer/footerBar";
class  App extends React.Component{
constructor(){
  super()
  this.state={
    currentUser:null
  }
}
unsubscribeFromAuth=null;
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });
    }

    this.setState({ currentUser: userAuth });
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){ return <div>
    <TopNavBar currentUser={this.state.currentUser}/>
<Switch>
  <Route exact path="/" component={ItemListPage}/>
  <Route exact path="/courseDescription/:id" component={CourseDescription}/>
  <Route exact path="/signInRegister" component={SignInRegister}/>
</Switch>
<Footer/>
</div>
}
}
export {App};