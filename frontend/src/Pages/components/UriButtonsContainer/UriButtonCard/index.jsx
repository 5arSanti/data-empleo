import { useNavigate } from "react-router-dom";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";

import { buscadorDeEmpleo_01, documentosPoblacionales_05, documentosSectorialesTejidoEmpresarial_04, estudiosTransversales_02, homeIcon, proyeccionesEstudiosPrestadoresSPE_03 } from "../../../../assets";

import "./styles.css";

const UriButtonCard = ({item={}}) => {
    const navigate = useNavigate();

    const handleLink = () => {
        if (item === "Home") { return navigate(`/home`); }
        if (item === "Buscador de empleo") { return open(`https://www.buscadordeempleo.gov.co/#/home`); }

        return navigate(`/category/${item.replace(/ /g, '_')}`)
    }

    const images = {
        "Documentos Poblaciones": documentosPoblacionales_05,
        "Documentos sectoriales y tejido empresarial": documentosSectorialesTejidoEmpresarial_04,
        "Estudios transversales": estudiosTransversales_02,
        "Proyecciones y estudios prestadores del SPE": proyeccionesEstudiosPrestadoresSPE_03,
        "Buscador de empleo": buscadorDeEmpleo_01,
        "Home": homeIcon,
    }

    return (
        <div className="uri-button-container" onClick={handleLink}>
            <WrapperContainer2 flexDirection="column" alignItems="center" justifyContent="center" padding={0}>
                <img src={images[item]} alt={item} />
                <TextCard fontSize={15} textAlign="center" className="text-underline">{item}</TextCard>
            </WrapperContainer2>
        </div>
    );
}

export { UriButtonCard }