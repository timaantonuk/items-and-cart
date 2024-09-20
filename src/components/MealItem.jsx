import React, { useContext, useState } from 'react';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const [selectedSize, setSelectedSize] = useState(null);


  function handleSelectedSize(event, size) {

    setSelectedSize(prevSize => (prevSize === size ? null : size));
  }

  function handleAddMealToCart() {
    cartCtx.addItem(meal);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <div className="meal-item-sizes">
            {meal.sizes.map((size) => {
              return (
                <span
                  className={selectedSize === size ? 'meal-item-size selected-size' : 'meal-item-size'}
                  key={size}
                  onClick={(e) => handleSelectedSize(e, size)}>{size}</span>
              );
            })}
          </div>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
        <div className={`popup ${showPopup ? 'show' : ''}`}>
          Item added to cart!
        </div>
      </article>
    </li>
  );
}

export default MealItem;

