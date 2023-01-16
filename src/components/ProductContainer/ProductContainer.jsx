import React from 'react'
import './ProductContainer.css'

const ProductContainer = (props) => {
  return (
    <section className="Products__section">
        <h1 className="Products__title">Nuestros Productos</h1>
        <div className="Products__container">
            {props.children}
        </div>
    </section>
  );
}

export default ProductContainer;