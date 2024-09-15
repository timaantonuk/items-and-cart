import React, { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="react food logo" />
        <h1>ReactFood</h1>
      </div>

      <nav>
        <Button textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
