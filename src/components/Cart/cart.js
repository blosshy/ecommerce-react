import { useContext } from "react";
import { cartContext } from "../../context/cartcontext.js";
import CartItem from "../CartItem/cartitem.js";
import '../CartItem/cartitem.css';
import { Link } from "react-router-dom";
import png from './assets/empty-cart.png';


const Cart = () =>{
    const handleDelete = (id) =>{
        removeProduct(id);
    }

    const {cart,removeProduct,removeCart,getTotal,cartLength} = useContext(cartContext);

    return(
        <div>
            <h1 className="cart-title">Mi carrito</h1>
            {
                cartLength === 0? <div className="empty-cart">
                <p className="empty-cart-title">Uy, ¡parece que tu carrito aún está vacío!</p>
                <p className="empty-cart-text">Para ir a comprar puedes hacer click en "volver a inicio"</p>
                <img src={png} alt='My melody' style={{width : 500, margin:50}}/>
                <Link to='/' className='link'>Volver al inicio</Link>
                </div> 
                : <div>
                    {cart.map(prod => <CartItem key={prod.id} id={prod.id} name={prod.name} category={prod.category} price={prod.price} img={prod.img} onDelete={handleDelete} quantity= {prod.quantity}/>)}
                    <button className="spacing" onClick={() =>{removeCart()}}>Vaciar carrito</button>
                    <h2>Total: ${getTotal()}</h2>
                    <div className="buttons-detail">
                        <Link to='/checkout' className='links-detail'>Finalizar compra</Link>
                    </div>
                </div>
            }
        </div>
    )
};

export default Cart;