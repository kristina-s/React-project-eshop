import React, { Component} from 'react';
class SignUp extends Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChangeUsername = (e) =>{ 
        this.setState({username: e.target.value});
      }
      handleChangePassword = (e) =>{ 
        this.setState({password: e.target.value});
      }
      handleChangeFirstname = (e) =>{ 
        this.setState({firstName: e.target.value});
      }
      handleChangeLastname = (e) =>{ 
        this.setState({lastName: e.target.value});
      }
    render() {
        return (
            <div>
                    <input className="login-input" type="text" id="firstName" placeholder="First name" value={this.state.firstName} onChange={this.handleChangeFirstname}/>
                    <input className="login-input" type="text" id="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.handleChangeLastname}/>

                    <input className="login-input" type="text" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername}/>
                    <input className="login-input" type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword}/>

                    <button className="login-button" onClick={() => this.props.signUpFunction(this.state.username, this.state.password, this.state.firstName, this.state.lastName)}>Sign up</button>

                    {this.props.message ? <h4>Payment successful</h4> : null}
                </div>
        )
    }
}
export default SignUp;