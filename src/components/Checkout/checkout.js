import './checkout.css';
import Form from "../Form/form.js";
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartcontext.js";
import { collection, getDocs, query, where, documentId, writeBatch, addDoc} from 'firebase/firestore';
import { db } from "../../services/firebase/index.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import gif from './assets/loading.gif';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [personalData, setPersonalData] = useState(false);
    const [datosCompra, setDatosCompra] = useState({});

    const clientData = (name, surname, address, phone, email) =>{
            setDatosCompra({name, surname, address, phone, email})
            setPersonalData(true)
        };

    const { cart, getTotal, removeCart } = useContext(cartContext);

    const navigate = useNavigate();
    
    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer:datosCompra,
                items: cart,
                total: getTotal(),
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                removeCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                const alert = () => {
                    Swal.fire({
                        title: "¡Su compra ha sido registrada con éxito!",
                        text: `El id de su orden es: ${orderAdded.id}. En breve recibirá un correo con la información de pago.`,
                        footer: '<b>Gracias por comprar en Sanrio Store Argentina :)</b>',
                        icon: "success"
                    })
                }
                alert() 
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Parece que alguno de tus productos no estan en stock!',
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    if (loading) {
        return (
        <div className="load-container">
            <h1 className='loader'>Finalizando la compra...</h1>
            <img src={gif} alt='Sanrio Pompompurin loader'></img>
        </div>
        );
    };

    return (    
        <div>
            <h1 className="title-form">Por favor, ingrese sus datos para generar la orden de compra:</h1>
            <Form clientData={clientData}/>
            { personalData 
            ?<button className="submit" onClick={createOrder}>Generar Pedido</button> 
            : ""}
        </div>
    )
};

export default Checkout;