import React, {Component} from 'react';
import Header from './Header/Header';
import Service from '../../services/Services';
import Products from'./Products/Products';
import CartDisplay from './CartDisplay/CartDisplay';
import HomePage from './HomePage/HomePage';
import FooterItem from './Footer/Footer';
import OneFlowerCard from './Products/OneFlowerCard/OneFlowerCard';
import Login from '../Login';
import HomePageImage from '../ImageHomePage';
import LoginService from '../../services/LoginServices';
import OrderServices from '../../services/CartServices';
class Eshop extends Component {

        state = {
          flowers: [],
          typeClicked: '',
          showFlowers: false,

          showCart: false,
          showOneCard: false,
          oneFlowerToShow: null,
          cartDisplayItems: [],
          showHomePage: false,
          showHeader: false,
          showLogin: true,
          showWelcomePicture: true,
          registerMessage: '',
          
          loggedUserToken: '',
          loggedUserName: '',
          paymentSuccess: ''
        };

    clickedItemHandler = async (event) => {
        const typeOfClick = event.target.value;
        this.setState({typeClicked: typeOfClick});
        const myFlowers = await Service.getData(typeOfClick, this.state.loggedUserToken);
        this.setState({flowers : myFlowers});
        this.setState({showFlowers: true, 
                showCart: false,
                showHomePage: false})
    }

    changeItemHandler = (event) => {
        let sortType = event.target.value;      
        const myFlowers = Service.sortData(this.state.flowers, sortType);
        this.setState({flowers : myFlowers});
    }

    addToCartHandler = (index) => {
        let cartDisplay = [...this.state.cartDisplayItems];
        const flowerToAdd = this.state.flowers[index];
        
        let isInCart = Service.checkIsInCart(cartDisplay, flowerToAdd);
        if(isInCart){
            let foundIndex = cartDisplay.findIndex( (element) => element.item.name === flowerToAdd.name);
            cartDisplay[foundIndex].quantity += 1;
        }else{
            cartDisplay.push({quantity:1, item:flowerToAdd});
        }
        this.setState({cartDisplayItems: cartDisplay});

    }

    showOneFlowerHandler = (index) => {
        this.setState({showOneCard: true});
        const flowerToShow = this.state.flowers[index];
        console.log(flowerToShow);
        this.setState({oneFlowerToShow: flowerToShow});
    }
    showCartHandler = () => {
        this.setState({showCart: true, 
                showFlowers: false,
                showHomePage: false,
                });
    }
    showHomePage = () => {
        this.setState({showCart: false, 
            showFlowers: false,
            showHomePage: true,
            showWelcomePicture: false,
            showLogin: false
            });
    }
    calculateTotalSum = (array) => {
        let totalSum = 0;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            totalSum += element.quantity * element.item.price;           
        }
        return totalSum;
    }
    deleteItem = (flowerIndex) => {
        //   const notes = this.state.items.slice();
        const flowers = [...this.state.cartDisplayItems];
        flowers.splice(flowerIndex, 1);
        this.setState({cartDisplayItems : flowers});
    }
    goBackHandler = () => {
        this.setState({showOneCard: false})
    }
    signIn = async (username, password) => {
        const user = await LoginService.signInUser(username, password);
        console.log(user);
        this.setState({loggedUserToken: user.token, loggedUserName: user.firstName, showHomePage: true, showHeader:true, showLogin: false, showWelcomePicture:false});
    }

    signUp = async (username, password, firstName, lastName) => {
        const user = await LoginService.signUpUser(username, password, firstName, lastName);
        this.setState({showHomePage: false, showHeader:true, registerMessage: 'Registration successfull! You can login now!'});


    }

    pay = async (fullName, address, city, creditCardNumber) => {
        console.log(fullName, address, city, creditCardNumber);
        const response = await OrderServices.completeOrder(fullName, address, city, creditCardNumber, this.state.loggedUserToken);
        this.setState({paymentSuccess:'Order completed successfully!'})
    }

    render(){
        
        return(
            <div>
                {this.state.showLogin ? <Login signIn={this.signIn} signUp={this.signUp} clickLogo={this.showHomePage} registerSuccessfull={this.state.registerMessage}/> : null}
                {this.state.showHeader ? <Header 
                    clickItem={(event) => this.clickedItemHandler(event)}
                    clickCart={(event) => this.showCartHandler(event)}
                    clickLogo={this.showHomePage}
                    itemsNumber={this.state.cartDisplayItems.length}
                    name={this.state.loggedUserName}/> : null}
                {this.state.showHomePage ? <HomePage clickItem={(event) => this.clickedItemHandler(event)} /> : null}
                {this.state.showOneCard ? <OneFlowerCard 
                                        flower={this.state.oneFlowerToShow}
                                        goBack={this.goBackHandler.bind(this)} /> : null}

                {this.state.flowers.length !== 0 && this.state.showFlowers ? (
                    <Products 
                    data={this.state.flowers} 
                    changeItem={(event) => this.changeItemHandler(event)} 
                    addToCart = {this.addToCartHandler.bind(this)}
                    showOneFlower = {this.showOneFlowerHandler.bind(this)}
                    />) : null} 

                {this.state.showCart ? (
                    <CartDisplay 
                        cartItems={this.state.cartDisplayItems}
                        total = {this.calculateTotalSum(this.state.cartDisplayItems)}
                        deleteItem={this.deleteItem}
                        pay={this.pay}
                        payMessage={this.state.paymentSuccess} />
                ) : null}    
                {this.state.showWelcomePicture ?  <HomePageImage /> : null}
                <FooterItem  />        
            </div>          
        )           
    }
}
export default Eshop;