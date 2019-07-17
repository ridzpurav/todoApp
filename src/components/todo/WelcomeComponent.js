import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';


class WelcomeComponent extends Component {
  state = {
    wecome: ''
  }
  render() {
    return (
      <Fragment>
      <h1>Welcome!</h1>
      <div className="container">
          Welcome {this.props.match.params.name}. 
          You can manage your todos <Link to="/todos">here</Link>.
      </div>
      <div className="container">
          Click here to get a customized welcome message.
          <button  
              className="btn btn-success">Get Welcome Message</button>
      </div>
      <div className="container">
          {this.state.welcomeMessage}
      </div>
                
      </Fragment>
    )
  }
}
export default WelcomeComponent;