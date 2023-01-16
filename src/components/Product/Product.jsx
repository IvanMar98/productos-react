import React from 'react';
import './Product.css';
import AddCarBtn from '../AddCar/AddCarBtn';
import Discount from '../Discount/Discount';
import Heart from '../Heart/Heart';

const Product = (props) => {
  return (
    <div className="Product">
        <Discount discount = {props.discount} />
        <Heart />
        <img className="Product__img" src= {props.img} alt="product" />
        <h2 className="Product__nombre">
           {props.nombre}
        </h2>
        <div className="Product__detail">
            <p className="Product__oldPrice">
                ${props.oldPrice}
            </p>
            <p className="Product__price">
                ${props.newPrice}
            </p>
            <AddCarBtn />
        </div>
    </div>
  )
}

export default Product;