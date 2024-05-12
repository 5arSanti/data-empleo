import React from "react";
import PropTypes from "prop-types";

import { actualMonth, actualYear } from "../utils/dateFunctions";
import { graphLabels } from "../utils/chartTypes";
import { handleColorsByFilters } from "../utils/handleColors";

import { api } from "../utils/api";
import { fetchAllData } from "../utils/handleData/handleFetchData";
import { handleNotifications } from "../utils/handleNotifications";
import { handleInputChange } from "../utils/handleInputChange";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

	//-------------------------------------
    const [apiUri, setApiUri] = React.useState(api);

    //LOADING, ERROR
    const [loading, setLoading] = React.useState(null);

    //Login Auth
    const [auth, setAuth] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [name, setName] = React.useState("");

    // Valores de la Grafica
    const [editingGraph, setEditingGraph] = React.useState(false);
    const [graphValues, setGraphValues] = React.useState({
        title: null,
        year: actualYear,
        month: actualMonth,
        grapLabelsType: "ofertasRegistradas",
        graphType: "bar",
        description: null,
        values: [20000, 10000, 4, 7, 8, 1],
    })
    
    const [filters, setFilters] = React.useState({
        "AÑO": actualYear,
        "MES": actualMonth,
    })

    // RESPONSE:
    const [responseData, setResponseData] = React.useState({});

    React.useEffect(() => {
        const filterParams = new URLSearchParams(filters);
        const endpoints = [
            `/graph`,
            `/graph/export?${filterParams.toString()}`,
            `/slider`,
        ]

        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchAllData(endpoints);
                setResponseData(data);
            } 
            catch (err) {
                handleNotifications("error", err.message)
            } 
            finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [filters]);

    React.useEffect(() => {
        handleInputChange("graphType", graphLabels[graphValues.grapLabelsType].type, setGraphValues);
    }, [graphValues.grapLabelsType]);
    

    //CAMBIO DE COLORES
    const [activeHighContrast, setActiveHighContrast] = React.useState(false);
    React.useEffect(() => {
        handleColorsByFilters(activeHighContrast);
    }, [activeHighContrast]);


    // Screen Width
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    // Modal de Confirmacion
    const [openConfirmationModal, setOpenConfirmationModal] = React.useState({
        status: false,
        title: "",
        onConfirm: null,
        onCancel: null,
    });


    // Slider Cards Values
    const [editingSliderCard, setEditingSliderCard] = React.useState(false);
    const [sliderValues, setSliderValues] = React.useState({
        NOMBRE: null,
        VALOR: null,
        PORCENTAJE: null,
        ICONO: null,
    })
    

    return (
        <AppContext.Provider
            value={{
                apiUri,
                loading,
                setLoading,

                filters,
                setFilters,
                
                auth,
                setAuth,
                
                name,
                setName,

                message,
                setMessage,


                //Tamaño de la pantalla
                windowWidth,
                setWindowWidth,


                //Informacion desde el serveidor
                responseData,
                setResponseData,

                //COLORES POR FILTRO
                handleColorsByFilters,
                activeHighContrast,
                setActiveHighContrast,

                // Valores de la Grafica
                graphValues,
                setGraphValues,
                editingGraph,
                setEditingGraph,

                //Modal de confirmación
                openConfirmationModal,
                setOpenConfirmationModal,

                // Slider Cards
                editingSliderCard,
                setEditingSliderCard,
                sliderValues,
                setSliderValues,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }