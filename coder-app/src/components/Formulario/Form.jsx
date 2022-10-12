
import { addDoc, collection, doc, getDoc, getFirestore, serverTimestamp, updateDoc } from 'firebase/firestore';
import { React, useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

const Form = ( { handleId } ) => {

    const db = getFirestore();

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const { totalPrecio, cart } = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            buyer: {nombre, telefono},
            date: serverTimestamp(),
            total: totalPrecio(),
            cart
        }
        const refOrden = collection( db, 'ordenes')
        addDoc(refOrden, orden)
        .then((res) => {
            handleId(res.id);
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

    const handleTelefono = (e) => setTelefono(e.target.value);

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                value={nombre}
                onChange={handleNombre}
                required
            />
            <input
                type="number"
                name="telefono"
                placeholder="Telefono"
                value={telefono}
                onChange={handleTelefono}
            />
            <button>Enviar</button>
        </form>
    );
};

export default Form;
