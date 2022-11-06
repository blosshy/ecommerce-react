import './itemdetailcontainer.css';
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/itemdetail.js';
import { useParams } from "react-router-dom";
import gif from './assets/loading.gif';
import { getDoc,doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {productId} = useParams();

    useEffect(() => {
        const docRef = doc(db,'products',productId);

        getDoc(docRef)
        .then((response) => {
            const data = response.data();
            const productAdapted = {id: response.id, ...data};

            setProduct(productAdapted);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [productId]);
    

    if (loading) {
        return (
        <div className="load-container">
            <h1 className='loader'>Cargando productos...</h1>
            <img src={gif} alt='Sanrio Pompompurin loader'></img>
        </div>
        );
    };

    return (
        <div>
            <ItemDetail key={product.id} {...product} />
        </div>
    );
};

export default ItemDetailContainer;