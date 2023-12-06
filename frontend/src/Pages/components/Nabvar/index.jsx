import React from "react";

import { NavIcons } from "../NavIcons";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";

import "./styles.css"
import { AppContext } from "../../../Context";



const Navbar = () => {
    const context = React.useContext(AppContext);

    return (
        <>
            <div className="navbar-container">
                <a className="banner-image" href="https://www.serviciodeempleo.gov.co/portada" title="Ir a Servicio Publico de Empleo" rel="noopener noreferrer">
                    <img src="/banner.png" alt="Ir a Servicio Publico de Empleo" />
                    <img src="/banner2.png" alt="Ir a Servicio Publico de Empleo" />
                </a>    

                {context.windowWidth <=1100 ?
                    <button className="close-open-button" onClick={() => { 
                            context.setToggleNavBarResponsive(!context.toggleNavBarResponsive);
                        }}>
                        {context.toggleNavBarResponsive ? <AiOutlineClose /> : <AiOutlineBars/> }
                    </button>   
                    :
                    <NavIcons
                        direction={"row"}
                        showButtons={true}
                        color="#DCDCDC"
                    />
                }

            </div>
            <div className="datos-image-container">
                <img src="/datos-lista.png" alt="datos-lista-image" />
            </div>
        </>

    );
}

export {Navbar};