import React from "react";
import "../Item/Item.css"
import { Link } from "react-router-dom";

const Item = ({ id, img, name, precio }) => {
     
    
    return (
        <>
            
                <div className="card" width="288px" margin="20px" >
                    <Link to={`/detalle/${id}`}><img src={'/images/' + img} className="card-img-top" alt={name} /></Link>
                <div className="card-body">
                    <h5 className="card-title"><b>{name}</b></h5>
                    <p className="card-text">${precio}</p>
                </div>
                </div>
            
        </>
    )      
};

export default Item;


