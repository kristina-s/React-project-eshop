import React, {Component} from 'react';
import Header from './Header/Header';
import Service from '../../services/Services';
import Products from'./Products/Products';
import CartDisplay from './CartDisplay/CartDisplay';
import HomePage from './HomePage/HomePage';

class Eshop extends Component {

        state = {
          flowers: [],
          typeClicked: 'pot-flower',
          showFlowers: false,
          currFlowers: [],
          cartItems: [],
          showCart: false,
          cartDisplayItems: [],
          showHomePage: true
        };

    clickedItemHandler = async (event) => {
        this.setState({typeClicked : event.target.value});
        const myFlowers = await Service.getData(this.state.typeClicked);
        this.setState({flowers : myFlowers});
        this.setState({showFlowers: true, 
                showCart: false,
                showHomePage: false})
        console.log(this.state.typeClicked);
        console.log(this.state.flowers);
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
        console.log(isInCart);
        if(isInCart){
            let foundIndex = cartDisplay.findIndex( (element) => element.item.name === flowerToAdd.name);
            console.log("add to this item +1")
            console.log(foundIndex);
            cartDisplay[foundIndex].quantity += 1;
            console.log(cartDisplay[foundIndex].quantity) 
        }else{
            cartDisplay.push({quantity:1, item:flowerToAdd});
        }
        this.setState({cartDisplayItems: cartDisplay});
        
        console.log(this.state.cartItems);
        console.log(this.state.cartDisplayItems)
    }

    showCartHandler = () => {
        console.log("i am cliiicked")
        console.log(this.state.cartDisplayItems);
        this.setState({showCart: true, 
                showFlowers: false,
                showHomePage: false,
                });
    }
    showHomePage = () => {
        this.setState({showCart: false, 
            showFlowers: false,
            showHomePage: true,
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
    render(){
        
        return(
            <div>
                <Header 
                    clickItem={(event) => this.clickedItemHandler(event)}
                    clickCart={(event) => this.showCartHandler(event)}
                    clickLogo={this.showHomePage}
                    itemsNumber={this.state.cartDisplayItems.length}/>
                {this.state.showHomePage ? <HomePage /> : null}
                {this.state.flowers.length !== 0 && this.state.showFlowers ? (
                    <Products 
                    data={this.state.flowers} 
                    changeItem={(event) => this.changeItemHandler(event)} 
                    addToCart = {this.addToCartHandler.bind(this)}/>) : null} 
                {this.state.showCart ? (
                    <CartDisplay 
                        cartItems={this.state.cartDisplayItems}
                        total = {this.calculateTotalSum(this.state.cartDisplayItems)} />
                ) : null}            
            </div>          
        )           
    }
}
export default Eshop;