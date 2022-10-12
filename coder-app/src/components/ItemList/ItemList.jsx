import React from "react";
import Item from "../Item/Item";
import "../ItemList/ItemList.css";

const ItemList = ({ data }) => {

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-around align-content-start flex-wrap align-self-center">
            {data.map(producto => (
                <div key={producto.id} className="col-md-4 py-3" width="288px">
                    <Item id={producto.id} name={producto.name} img={producto.img} precio={producto.precio}/>
                </div>)
            )};
            </div>
        </div>
    );
};

export default ItemList;