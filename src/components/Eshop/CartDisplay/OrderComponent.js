import React, { Component }from 'react';
import classes from "./CartDisplay.module.css";

class OrderComponent extends Component {
    constructor(props) {
        super(props);
    this.state = {
        fullName: '',
        address: '',
        city: '',
        creditCardNumber: null
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeCardNumber = this.handleChangeCardNumber.bind(this);

    }
    handleChangeName(event) {
        this.setState({fullName: event.target.value});
    }
    handleChangeAddress(event) {
    this.setState({address: event.target.value});
    }
    handleChangeCity(event) {
    this.setState({city: event.target.value});
    }
    handleChangeCardNumber(event) {
    this.setState({creditCardNumber: event.target.value});
    }
    render(){
        return(
            <div >
            <form className="order-form">
                <label for="fullname">Full name</label>
                <input className="login-input" type="text" name="fullname" id="fullname"value={this.state.fullName} onChange={this.handleChangeName} required/>
                <label for="address">Address</label>
                <input className="login-input" type="text" name="address" id="address" onChange={this.handleChangeAddress} required />
                <label for="city">City</label>
                <input className="login-input" type="text" name="city" id="city" onChange={this.handleChangeCity} required />
                <label for="cardnumber">Credit Card Number</label>
                <input className="login-input" type="number" name="cardnumber" id="cardnumber"onChange={this.handleChangeCardNumber} required />
                <button className={classes.orderButton} type="button" class="btn btn-secondary" id="pay" onClick={() => this.props.pay(this.state.fullName, this.state.address, this.state.city, this.state.creditCardNumber)}>Pay</button>   
            </form>
            {this.props.payMessage ? <p>{this.props.payMessage}</p> : null}
            </div>
        )
    }
    
}
export default OrderComponent;