import React, { Component, Fragment } from 'react';
import LoginComponent from './LoginComponent';
import Header from './HeaderComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent';
import Footer from './FooterComponent';
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponents';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute.js'



export default class TododApp extends Component {
  render() {
    return (
            <div className="TodoApp">
                <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <Footer/>
                    </Fragment>
                </Router>
                
                
            </div>
    )
  }
}
