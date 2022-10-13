import './itemcount.css'
import {useState} from 'react'

const Counter = ({onAdd, stock}) =>{

    const [count,setCount] = useState(0);
    const [cant, setCant] = useState(stock);


    const restar = () =>{
        if (count > 0) {
            setCount(count-1)
            setCant(cant+1);
        }
    }

    const sumar = () =>{
        if (count < stock) {
            setCount(count+1)
            setCant(cant-1);
        }
    }

    return(
        <div>
            <div className='contador'>
                <button className='botonContador' onClick={restar}> - </button>
                <h2 className='cantidad'>{count}</h2>
                <button className='botonContador' onClick={sumar}> + </button>
            </div>
            <button className='botonCarrito' onClick={onAdd}> Agregar al carrito </button>
            <h2 className='cantidad'>Stock: {cant}</h2>
        </div>
    )

}

export default Counter;
