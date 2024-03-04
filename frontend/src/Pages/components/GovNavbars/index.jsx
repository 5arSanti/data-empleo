import { banner } from "../../../assets";

import "./styles.css";

const GovNavbar = () => {
    window.addEventListener("load", function() {
        initTopBar();
    });
    
    
    function initTopBar() {
        const translateElement = document.querySelector(".idioma-icon-barra-superior-govco");
        translateElement.addEventListener("click", translate, false);
    
        function translate() {
            // ... // Implementar traducción
        }
    }

    return(
        <>
            <nav className="barra-superior-govco" aria-label="Barra superior">
                <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer"  aria-label="Portal del Estado Colombiano - GOV.CO"></a>
            </nav>
            <div className="container-logo-header-govco">
                <a rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                    <span className="logo-header-govco"></span>
                </a>
            </div>
        </>

    );
}

export { GovNavbar }