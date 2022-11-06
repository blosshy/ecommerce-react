import './cartitem.css';
import { useContext } from 'react';
import { cartContext } from '../../context/cartcontext.js';

const CartItem = ({name,category,price,img,id,onDelete,quantity}) =>{
    const {getSubtotal} = useContext(cartContext);

    return(
        <div>
            <div className='product-container'>
                <h2>{name}</h2>
                <p className='cart-text'>Categoria: {category}</p>
                <p className='cart-text'>Precio: ${price}</p>
                <p className='cart-text'>Cantidad: {quantity}</p>
                <img src={img} alt={name} style={{ width: 200}} className='product-img'/>
                <p className='cart-text'>Subtotal: ${getSubtotal(id)}</p>
                <button onClick={() =>{onDelete(id)}}>Eliminar producto</button>
            </div>
        </div>
    )
};

export default CartItem;