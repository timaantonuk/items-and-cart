import React, { useContext } from 'react';
import Modal from './UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';
import { RiEmotionSadFill } from 'react-icons/ri';

function Cart() {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === 'cart'}
      onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>

      <h2 className="cart-title">Your Cart</h2>

      <ul>
        {cartCtx.items.map(item =>
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            img={item.image}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)} />
        )}
      </ul>

      {cartCtx.items.length > 0 ? '' :
        <div className="modal-empty-wrapper"><RiEmotionSadFill style={{ width: '50px', height: '50px' }} />
          <p className="modal-empty">No items</p>
          <RiEmotionSadFill style={{ width: '50px', height: '50px' }} /></div>}

      <p className="modal-actions">

        <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>

        <div className="modal-wrapper">
          <Button textOnly onClick={handleCloseCart}>
            Close
          </Button>

          {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckout}> Go to Checkout </Button>}
        </div>


      </p>

    </Modal>
  );
}

export default Cart;