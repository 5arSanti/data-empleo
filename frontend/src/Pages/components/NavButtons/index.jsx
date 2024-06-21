import React from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../../Context";

import "./styles.css";
import { handleLogout } from "../../../utils/handleData/handleLogout";
import { IsAuthWrapper } from "../AuthWrapper";

const NavButtons = ({className="idioma-icon-barra-superior-govco"}) => {
    const context = React.useContext(AppContext)

    return(
        <div className="nav-buttons-container">
            {!context.auth && 
                <Link to={"/login"} className={`${className}`}>
                    Iniciar Sesión
                </Link>
            }

            <IsAuthWrapper>
                <Link to={"/upload"} className={`${className}`}>
                    Publicar
                </Link>
                <Link to={"/dashboard"} className={`${className}`}>
                    Dashboard
                </Link>
                <Link to={"/document"} className={`${className}`}>
                    Boletin
                </Link>
                <Link to={"/slider"} className={`${className}`}>
                    Slider
                </Link>
                <Link to={"/users"} className={`${className}`}>
                    Usuarios
                </Link>
                    <button  
                    className={`${className}`} 
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                </button>
            </IsAuthWrapper>
        </div>
    );

}

export { NavButtons };