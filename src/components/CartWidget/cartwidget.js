import './cartwidget.css'
import logo from './assets/cart.png'

const CartWidget = () =>{
    return(
        <div className='cart-container'>
            <img src={logo} alt='Carrito de compras icon' className="cart-icon"/> <span>0</span>
        </div>
    )
}

export default CartWidget;