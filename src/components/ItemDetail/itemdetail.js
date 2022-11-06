import './itemdetail.css';
import Counter from '../ItemCount/itemcount.js';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartcontext.js';

const ItemDetail = ({ id,name, description, img, price, stock,category }) => {

    const {addItem,getProductQuantity} = useContext(cartContext);
    const [itemAdded, setItemAdded] = useState(false);

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name,category, price, quantity,img
        };
    
        addItem(productToAdd);
        setItemAdded(true);
    };
    
    const quantityAdded = getProductQuantity(id);

    return (
    <div className="detalle-container">
        <img src={img} alt={name} width={500} height={500}/>
        <div>
            <h2 className='nombre'>{name}</h2>
            <p className='item-desc'>{description}</p>
            <h3 className='precio-detalle'>Precio: ${price}</h3>

            { stock !== 0 ? <Counter onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock de este producto.</p>}
            
            { 
            !itemAdded ? true :
                <div className="buttons-detail">
                    <Link to='/cart' className="links-detail">Ir al carrito</Link>
                    <Link to='/' className="links-detail">Seguir comprando</Link> 
                </div> 
            }

            { 
            itemAdded ? true : 
            <div className="buttons-detail">
                <Link to='/' className="links-detail">Volver al listado</Link> 
            </div>
            }
        </div>
    </div>
    );
};

export default ItemDetail;