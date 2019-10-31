import React, { Component} from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Logo from '../assets/logo.png'

class Login extends Component {
    state = {
        showSignUpComponent: false,
        showSignInComponent: false
    }
    showSignIn = () => {
        this.setState({showSignInComponent: !this.state.showSignInComponent, showSignUpComponent:false})
    }

    showSignUp = () => {
        this.setState ({showSignUpComponent: !this.state.showSignUpComponent, showSignInComponent:false})
    }

    render() {
        return (
            <div className="login-form">
                    <div className="logo-welcome">
                        <img src={Logo} alt="logo"/>
                        <p>Welcome to Bonsai flower shop</p>
                    </div>

                    <div className="forms">
                        <div className="sign-form">
                            <button className="login-button" onClick={this.showSignIn}>Sign in</button>
                            {this.state.showSignInComponent ? <SignIn signInFunction={this.props.signIn}/> : null}
                        </div>
                        <div className="sign-form">
                            <button className="login-button" onClick={this.showSignUp}>Register</button>
                            {this.state.showSignUpComponent ? <SignUp signUpFunction={this.props.signUp} message={this.props.registerSuccessfull}/> : null}
                        </div>

                        
                    </div>
                    

                </div>
        )
    }
}
export default Login;