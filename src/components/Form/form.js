import Swal from "sweetalert2";
import { useState} from "react";
import './form.css';


const Form = ({clientData}) => {
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [phone, setPhone] = useState("");

const submit = (e) => {
    e.preventDefault ();
    if (!name || !email || !phone || !address)
        {
            Swal.fire({
                title: "Alguno de los campos esta incompleto.",
                icon: "warning",
            })
        }
        else if (email !== checkEmail && email && checkEmail) {
            Swal.fire({
            title: "Los emails no coinciden.",
            html: "Por favor, intente nuevamente.",
        })
    }

    else {
    clientData(
        name,
        surname,
        address,
        phone,
        email
    )
}
    
}
    return (
        <form className="form-container">
                <div className='form' >
                <label className="form-label">Nombre:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" pattern="[A-Za-z]"   className="form-input"   placeholder="Nombre" required />

                <label className="form-label">Apellido:</label>
                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" pattern="[A-Za-z]"  className="form-input"   placeholder="Apellido" required/>

                <label className="form-label">Dirección:</label>
                <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"   className="form-input"   placeholder="Dirección"required />

                <label className="form-label">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="form-input"   placeholder="Email" required/>

                <label className="form-label">Confirmacion de email:</label>
                <input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="Confirme Email"  className="form-input"   placeholder="Email" required/>
                
                <label className="form-label">Telefono:</label>
                <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number" className="form-input"   placeholder="Teléfono"required />

                <button className="submit" onClick = {submit} >Enviar</button>
            </div>
        </form>
    )
};

export default Form;