import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data }) => {

    return (
        <div className="row">
            {data.map(producto => (
                <div key={producto.id} className="col-md-4 py-3">
                    <Item id={producto.id} name={producto.name} img={producto.img} precio={producto.precio}/>
                </div>)
            )};
        </div>
    );
};

export default ItemList;