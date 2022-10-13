
import { addDoc, collection, doc, getDoc, getFirestore, serverTimestamp, updateDoc } from 'firebase/firestore';
import { React, useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import "../Formulario/Form.css";

const Form = ( { handleId } ) => {

    const db = getFirestore();

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const { totalPrecio, cart } = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            buyer: {nombre, telefono, email},
            date: serverTimestamp(),
            total: totalPrecio(),
            cart
        }
        const refOrden = collection( db, 'ordenes')
        addDoc(refOrden, orden)
        .then((res) => {
            handleId(res.id);
            console.log(res)
        })
        .then(
            cart.forEach(element => {
                const cantidadCompra = element.quantity
                const updateCollection = doc( db, "items", `${element.id}`)
                getDoc(updateCollection)
                .then( res => {
                    const upDatedStock = res.data().stock - cantidadCompra
                    updateDoc(updateCollection, {"stock": upDatedStock})
                })
            }))
    };

    

    const handleNombre = (e) => setNombre(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleTelefono = (e) => setTelefono(e.target.value);

    return (

        <div>
            <div className='text-center text-light'>
                <p>Complete los siguientes datos: </p>
            </div>
        
        <form className="fondo-form" action="" onSubmit={handleSubmit}>

            <div className='contenedor-form d-flex justify-content-center align-items-center bg-light'>

                <div className="mb-3 form-check bg-light">
                <label htmlFor="name">Nombre completo</label>
                    <input
                    name="nombre"
                    type="text"
                    placeholder="Nombre Completo"
                    value={nombre}
                    onChange={handleNombre}
                />
                </div>
                <div className="mb-3 form-check bg-light">
                <label htmlFor="mail">Correo electrónico</label>
                    <input
                    name="mail"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleEmail}
                />
                </div>
                <div className="mb-3 form-check bg-light">
                <label htmlFor="phone">Teléfono</label>
                    <input
                    name="phone"
                    type="tel"
                    placeholder="Telefono"
                    value={telefono}
                    onChange={handleTelefono}
                />
                </div>
            </div>
                <div className="div-boton-form bg-light">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            
        </form>
        </div>
       
     
    );
};

export default Form;
