/* eslint-disable */

console.log('foo');

import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";



const Footer = () => {
    return (

        <div className="text-center text-white conteiner-footer">
            <div className="pt-4">
                <div className="mb-4">
                    <Link className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-instagram-f"><img src={'/images/' + 'instagram.png'} className="card-img-top  img-redes" width="150px" alt="instagram" /></i>
                    </Link>
                    <Link className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://es-la.facebook.com/" target="_blank"  rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-facebook"><img src={'/images/' + 'facebook.png'} className="card-img-top  img-redes" width="150px" alt="facebook" /></i>
                    </Link>
                    <Link className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-twitter"><img src={'/images/' + 'twitter.png'} className="card-img-top  img-redes" width="150px" alt="twitter" /></i>
                    </Link>
                    <Link className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-whatsapp"><img src={'/images/' + 'Whatsapp.png'} className="card-img-top  img-redes" width="150px" alt="whatsapp" /></i>
                    </Link>
                    <Link className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.google.com/intl/es/gmail/about/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-gmail"><img src={'/images/' + 'gmail.png'} className="card-img-top  img-redes" width="150px" alt="gmail" /></i>
                    </Link>
            </div>
            </div>
                <div className="text-center text-dark p-3 footer-p">
                    <p>Estilo es usar lo que te hace sentir bien! </p> 
                </div>
        </div>
    )
};

export default Footer;