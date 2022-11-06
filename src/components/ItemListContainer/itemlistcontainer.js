import './itemlistcontainer.css';
import gif from './assets/loading.gif';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/itemlist.js';
import { useParams } from "react-router-dom";
import { getDocs, collection,query,where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();
    
    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
        ? query(collection(db,'products'), where('category','==',categoryId))
        : collection(db,'products');

        getDocs(collectionRef)
        .then((response) => {
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            });

            setProducts(productsAdapted);
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
    };

    return(
        <div>
            <h1 className='productos'>Productos</h1>
            <ItemList products={products}/>
        </div>
    )
};

export default ItemListContainer;