import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {Route,Switch, withRouter, Redirect} from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import {connect} from 'react-redux';  
import * as actionTypes from './Store/actions/index';
import Auth from './containers/Auth/Auth';
import SearchPlanet from './containers/SearchPlanet/SearchPlanet'

class App extends Component {
  componentDidMount(){
    this.props.onAuthCheckStatus();
  }
  render() {
    
    let routes= (
    <Switch> 
      <Route path="/" component={Auth}/>
      <Redirect to="/"/>
    </Switch>
      );
      if(this.props.isAuthenticated){
        routes=(
          <Switch>
            <Route path="/searchPlanet" component={SearchPlanet}/>
            <Route path="/logout" component={Logout}/>
            <Redirect to="/searchPlanet"/>
          </Switch>
        )
      }
    return (
      <div>
       <Layout>
        {routes} 
       </Layout>
      </div>
    );
  }
}

const mapStateToProps= state=>{
  return{
    isAuthenticated:state.auth.token !== null
  }
}
const mapDispatchToProps =dispatch=>{
  return {
    onAuthCheckStatus: ()=> dispatch(actionTypes.authCheckStatus())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
