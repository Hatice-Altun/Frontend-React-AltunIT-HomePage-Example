import React from "react";
import background from "./../assets/header-bg.jpg";
import "./Header.css"

function Header() {
    return(

        <div className="header" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${background}) center/cover no-repeat`
        }}>

            <div className="container">
                <div className="header__content text__center text__light flex flex__center">
                    <div className="header__content--left"></div>
                    <div className="header__content--right">
                        <h1 className="header__title fw__6">Welcome</h1>
                        <p className="para__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                            similique vel! Dicta facilis harum, quas quasi quo sit? Adipisci assumenda at atque
                            consectetur consequuntur corporis debitis eaque earum est exercitationem facilis harum in
                            ipsam ipsum, labore modi natus necessitatibus nesciunt placeat quasi repudiandae rerum sunt
                            suscipit veniam veritatis vitae voluptates!</p>
                        <a href="#" className="btn btn__blue">contact us</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
