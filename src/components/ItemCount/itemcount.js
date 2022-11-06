import './itemcount.css';
import {useState} from 'react';

const Counter = ({onAdd, stock, initial = 1}) =>{

    const [cant, setCant] = useState(initial);

    const restar = () =>{
        if (cant > initial) {
            setCant(cant-1);
        }
    };

    const sumar = () =>{
        if (cant < stock) {
            setCant(cant+1);
        }
    };

    return(
        <div>
            <div className='contador'>
                <button className='botonContador' onClick={restar}> - </button>
                <h2 className='cantidad'>{cant}</h2>
                <button className='botonContador' onClick={sumar}> + </button>
            </div>
            <button className='botonCarrito' onClick={() =>{onAdd(cant)}}> Agregar al carrito </button>
        </div>
    )

};

export default Counter;
