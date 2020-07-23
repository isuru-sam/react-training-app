import React from "react";
import {Route,Switch,Redirect} from "react-router-dom"
import ItemListPage from "./views/itemList/itemList.jsx";
import CourseDescription from "./components/courseDescription/courseDescription.component.jsx";
import SignInRegister from "./views/signin-register/signin-register.jsx";
import {auth,createUserProfileDocument} from './components/firebase/firebase.utils.js'
import TopNavBar from "./components/common/topMenuBar/topMenuBar";
import Footer from "./components/common/footer/footerBar";
import {connect} from 'react-redux'
import setCurrentUser from './redux/user/user.actions.js'
class  App extends React.Component{

unsubscribeFromAuth=null;
componentDidMount(){
  const {setCurrentUser}=this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
         
            id: snapShot.id,
            ...snapShot.data()
          
        });

        console.log(this.state);
      });
    }

    setCurrentUser( userAuth );
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
// currentUser={this.state.currentUser}

render(){ return <div>
    <TopNavBar/>
<Switch>
  <Route exact path="/" component={ItemListPage}/>
  <Route exact path="/courseDescription/:id" component={CourseDescription}/>
  <Route exact path="/signInRegister" render={()=>this.props.currentUser?(<Redirect to="/"/>):<SignInRegister/>}/>
</Switch>
<Footer/>
</div>

}
}
const mapStateToProps=(state)=>({
  currentUser:state.user.currentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);