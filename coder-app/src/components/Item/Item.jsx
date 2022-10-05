import React from "react";
import "../Item/Item.css"
import { Link } from "react-router-dom";

const Item = ({ id, img, name, precio }) => {
     
    
    return (
        <>
        <div className="grid ">
            <div className="card card-ItemL" width="100px" margin="20px" >
            <Link to={`/detalle/${id}`}><img src={'/images/' + img} className="card-img-top" alt={name} /></Link>
                <div className="card-body">
                    <h5 className="card-title text-center"><b>{name}</b></h5>
                    <p className="card-text text-center">${precio}</p>
                </div>
            </div>
        </div>    
        </>
    )      
};

export default Item;
