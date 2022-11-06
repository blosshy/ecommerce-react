import './item.css';
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price }) => {
    return (
        <div className='cards'>
            <Link to={`/detail/${id}`}>
                <img src={img} alt={name} style={{ width: 400}}/>
            </Link>
            <h1 className='nombre'>{name}</h1>
            <p className='precio'>${price}</p>
            <Link to={`/detail/${id}`} className="detalle" >Ver detalle</Link>
        </div>
    )
};

export default Item;