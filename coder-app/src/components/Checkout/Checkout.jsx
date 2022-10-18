import React from 'react';
import { useState } from 'react';
import Form from '../Formulario/Form';
import "../Checkout/Checkout.css"; 

const Checkout = () => {

    const [ordenId, setOrdenId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrdenId(numeroDeOrden);
    };

    if (ordenId) {
        return (

            <div className='contenedor-check d-flex justify-content-center align-items-center bg-dark text-light'>
                <h1>
                    Gracias por tu compra! 
                    <h2>
                        Te dejamos el número de seguimiento:{' '}
                        {ordenId}
                    </h2>
                </h1>
            </div>
        );
    }
    

    return (
        <div className="d-flex justify-content-center contenedor-form" >
            <Form handleId={handleId}/>
        </div>
    );
};

export default Checkout;