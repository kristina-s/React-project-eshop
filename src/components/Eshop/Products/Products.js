import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductCard/ProductCard.css'

const products = (props) => (
    <div className="CardContainer">
        <p>Sort items by:</p>
        <select name="dropdown" id="sorter" onChange={props.changeItem}>
                <option>--Select sorting--</option>  
                <option 
                    value="price-asc"
                    >Price - ASC</option>
                <option 
                    value="price-desc"
                    >Price - DESC</option>
                <option 
                    value="name-asc"
                    >Name - ASC</option>
                <option 
                    value="name-desc"
                    >Name - DESC</option>
        </select>
        <div className="CardContainer">
            {props.data.map((flower, index) => (
            <ProductCard             
            key = {flower.id}
            theindex={index}
            name = {flower.name}
            latin = {flower.latinName}
            img = {flower.titleImage}
            description = {flower.description}
            price = {flower.price}
            add = {props.addToCart}
            />
        ))}
        </div>
        
    </div>
)
export default products;