import React, {Component} from 'react';
import Header from './Header/Header';
import Service from '../../services/Services';
import Products from'./Products/Products';

class Eshop extends Component {

        state = {
          flowers: [],
          typeClicked: 'branch-flower',
          currFlowers: [],
          cartItems: [],
        };

    clickedItemHandler = async (event) => {
        this.setState({typeClicked : event.target.value});
        const myFlowers = await Service.getData(this.state.typeClicked);
        this.setState({flowers : myFlowers});

        console.log(this.state.typeClicked);
    }
    changeItemHandler = (event) => {
        let sortType = event.target.value;      
        const myFlowers = Service.SortData(this.state.flowers, sortType);
        this.setState({flowers : myFlowers});
    }
    addToCartHandler = (index) => {
        const cartFlowers = [...this.state.cartItems];
        const flowerToAdd = this.state.flowers[index];
        cartFlowers.push(flowerToAdd);
        this.setState({cartItems : cartFlowers});
        console.log(cartFlowers);

        console.log(index);

    }

    render(){
     
        return(
            <div>
                <Header clickItem={(event) => this.clickedItemHandler(event)}/>
                {this.state.flowers.length !== 0 ? (
                    <Products 
                    data={this.state.flowers} 
                    changeItem={(event) => this.changeItemHandler(event)} 
                    addToCart = {this.addToCartHandler.bind(this)}/>) : (<p>Home page goes here!</p>)} 
                                 
            </div>          
        )           
    }
}
export default Eshop;