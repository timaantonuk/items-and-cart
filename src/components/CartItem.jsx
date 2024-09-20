import React from 'react';
import { currencyFormatter } from '../util/formatting.js';

function CartItem({name, quantity, price, img, onIncrease, onDecrease}) {
  return (
    <li className='cart-item'>


      <p>
        <img src={`http://localhost:3000/${meal.image}`} alt="cart sneaker image" className="cart-image" />
        {name} - {quantity} x {currencyFormatter.format(price)}</p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

export default CartItem;