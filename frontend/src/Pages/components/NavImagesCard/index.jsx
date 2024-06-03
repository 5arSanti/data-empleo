import React from "react";
import { AppContext } from "../../../Context";
import { banner, iconComplete } from "../../../assets";
import "./styles.css";
import { TextCard } from "../TextComponents";

const NavImagesCard = () => {
    const context = React.useContext(AppContext);

    return(
        <div className="container-logo-header-govco">
            <div className="logo-header-govco" rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                <span>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                        <img src={iconComplete} alt="" />
                    </a>
                    <a rel="noopener noreferrer" href="http://localhost:5173">
                        <img src={banner} alt="" />
                    </a>
                </span>
            </div>
            {context.name && <TextCard textAlign="end" width="auto">Bienvenido {context.name}</TextCard> }
        </div>
    );
}

export { NavImagesCard };