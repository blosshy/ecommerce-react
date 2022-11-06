import { useState,useEffect,createContext} from "react";

export const cartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cartLength,setCartLength] = useState(0);

    useEffect(()=>{
        setTotalQuantity(getQuantity()) 
        setCartLength(cart.length)
    },[cart]) //eslint-disable-line 

    const addItem = (product) =>{
        if (!isInCart(product.id)) {
            setCart([...cart, product]);
        }else{
            console.log('ya estaba en el carrito');
        }
    };

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id);
    }

    const getProductQuantity = (id) =>{
        const product = cart.find(prod => prod.id === id)
        
        return product?.quantity
    }

    const removeCart = () =>{
        setCart([]);
    }

    const removeProduct = (id) =>{
        const newCart = cart.filter(prod => prod.id !== id);
        setCart(newCart);
    }

    const getQuantity = () =>{
        let accu = 0;

        cart.forEach(prod =>{
            accu += prod.quantity
        })
        
        return accu;
    }

    const getSubtotal = (id) =>{
        let accu = 0;

        const product = cart.find(prod => prod.id === id)

        accu = product.price * product.quantity

        return(
            accu
        )
    }

    const getTotal = () =>{
        let accu = 0;

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

return(
    <cartContext.Provider value={{cart, addItem, isInCart, getProductQuantity, totalQuantity, removeProduct, getSubtotal, removeCart, getTotal,cartLength}}>
        {children}
    </cartContext.Provider>
)

}

