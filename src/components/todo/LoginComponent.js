import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component {
    state = {
        username : 'Riddhi',
        password : '',
        hasLoginFailed: false,
        showSuccessMessage: false
    }

    handleChange = (event) => {
       // console.log(event.target.value);
        
        this.setState( {[event.target.name] : event.target.value } );
        
    }

    loginClicked = () => {
        if(this.state.username==='Riddhi' && this.state.password==='purav'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`);
            //this.context.history.push('/welcome')
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }

    }
  render() {
    return (
        <div className="container">
        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Sucessful</div>}
        User Name: <input type="text" name="username" value={this.state.username} onChange={ this.handleChange}/>
        Password: <input type="password" name="password" value={this.state.password}  onChange={ this.handleChange}/>
        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
    )
  }
}

export default withRouter(LoginComponent);