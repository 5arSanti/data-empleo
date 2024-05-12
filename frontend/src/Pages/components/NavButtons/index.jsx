import React from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../../Context";

import "./styles.css";
import { handleLogout } from "../../../utils/handleData/handleLogout";

const NavButtons = ({className="idioma-icon-barra-superior-govco"}) => {
    const context = React.useContext(AppContext)

    const handleNavButtons = () => {
        if(!context.auth) {
            return(
                <Link to={"/login"} className={`${className}`}>
                    Iniciar Sesión
                </Link>        
            );
        } else {
            return(
                <>

                    <Link to={"/home"} className={`${className}`}>
                        Home
                    </Link>
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
                    <Link to={"/register"} className={`${className}`}>
                        Registro
                    </Link>
                      <button  
                        className={`${className}`} 
                        onClick={handleLogout}
                    >
                        Cerrar Sesión
                    </button>          
                </>

            );
        }
    }

    return(
        <div className="nav-buttons-container">
            {handleNavButtons()}
        </div>
    );

}

export { NavButtons };