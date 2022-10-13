import './itemlistcontainer.css';
import gif from './assets/loading.gif';
import { getProducts, getProductsByCategory } from '../../asyncMock.js';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/itemlist.js';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();
    
    useEffect(() => {
        setLoading(true);

        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId)
        .then((response) => {
            setProducts(response);
        })
        .finally(() => {
            setLoading(false);
        });
    },[categoryId]);
    
    if(loading) {
        return(
        <div className='load-container'>
            <h1 className='loader'>Cargando productos...</h1>
            <img src={gif} alt='Sanrio Pompompurin loader'></img>
        </div>
        )
    }

    return(
        <div>
            <h1 className='productos'>Productos</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;