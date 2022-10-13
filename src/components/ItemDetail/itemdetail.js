import './itemdetail.css';
import Counter from '../ItemCount/itemcount.js';

const ItemDetail = ({ name, description, img, category, price }) => {
    const handleOnAdd = () => {
        console.log("Agregado al carrito!");
    };

    return (
    <div className="detalle-container">
        <img src={img} alt={name} width={500} height={500}/>
    <div>
        <h2 className='nombre'>{name}</h2>
        <p className='item-desc'>{description}</p>
        <h3 className='precio-detalle'>Precio: ${price}</h3>
        <Counter onAdd={handleOnAdd} stock={5} />
    </div>
    </div>
    );
};

export default ItemDetail;