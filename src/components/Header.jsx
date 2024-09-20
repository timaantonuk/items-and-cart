import React, { useContext } from 'react';
import logoImg from '../../public/logo.png';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import { BsFillHandbagFill } from 'react-icons/bs';

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <a href='#'><img src={logoImg} alt="sneaker geek logo" /></a>
        <a href='#'><h1>SneakerGeek</h1></a>
      </div>

      <nav className='nav'>

        <BsFillHandbagFill style={{width: '40px', height: '40px', color: '#0c0c0c', cursor: 'pointer'}} onClick={handleShowCart}/>

        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
