import React, { Component} from 'react';
class SignIn extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChangeUsername = (e) =>{ 
        this.setState({username: e.target.value});
      }
      handleChangePassword = (e) =>{ 
        this.setState({password: e.target.value});
      }
    render() {
        return (
            <div>
                    <input className="login-input" type="text" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername}/>
                    <input className="login-input" type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword}/>
                    <button className="login-button" onClick={() => this.props.signInFunction(this.state.username, this.state.password)}>Sign in</button>
                </div>
        )
    }
}
export default SignIn;