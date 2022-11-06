import './cartwidget.css';
import logo from './assets/cart.png';
import { useContext } from 'react';
import { cartContext } from '../../context/cartcontext.js';
import { Link } from 'react-router-dom';

const CartWidget = () =>{

    const {totalQuantity} = useContext(cartContext);

    return(
        <Link to={'/cart'} className='number'>
        <div className='cart-container'>
            <img src={logo} alt='Carrito de compras icon' className="cart-icon"/> <span>{totalQuantity}</span>
        </div>
        </Link>
    )
};

export default CartWidget;