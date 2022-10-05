import React from "react";
import { useState,  useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { detalleid } = useParams();

    useEffect(() => {
    
        const db = getFirestore();
        const responsive = doc(db, 'items', detalleid);
        getDoc(responsive)
            .then(res => setItem({id: res.id, ...res.data()}));

    }, [detalleid]);
   

    return (
        <div>
           <ItemDetail item={item}/> 
        </div>
    )
};

export default ItemDetailContainer;