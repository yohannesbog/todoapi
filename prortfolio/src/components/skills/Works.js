import React from 'react'
import shoppinCart from '../images/shoppinCart.png'
import './Works.css'


   function Works() {
    return (
      <div className="card-group" id="works">
      <div className="card">
      <div className="card-body">
      <h5 className="card-title">Digital ShoppingCart</h5>
      <p className="card-text">Allows users to view available products so that they have quick access to all products and related information about the prduct. User can add product to cart, add/ substract quantity, contact the company/seller.</p>
    </div>
        <img src={shoppinCart} className="card-img-top" alt="..."/>
        
      </div>
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
      
      </div>
    
    </div>
    )
}

export default Works