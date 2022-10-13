import './itemlist.css';
import Item from "../Item/item.js";

const ItemList = ({ products }) => {
    return (
        <div className='card-container'>
            { products.map(prod => <Item key={prod.id} id={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price}/>)}
        </div>
    )
};

export default ItemList