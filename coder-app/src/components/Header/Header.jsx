import React from "react";
import "../Header/Header.css"
import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Header = () => {

    return (
        <div className="carusel slide">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div className="carousel-inner carousel-div">
                    <div className="carousel-item active">
                        <img src="./images/cam.jpg" className="d-block w-100 img-carr img-top" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/lentes.jpg" className="d-block w-100 img-carr img-top" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/sombrero.jpg" className="d-block w-100 img-carr img-top" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div>
                <ItemListContainer />
            </div>

        </div>
        
        







 
    );
};

export default Header;

