import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { actualMonth, actualYear } from "../utils/dateFunctions";
import { graphLabels } from "../utils/chartTypes";



export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //API -- Cambiar el valor de la variable api segun la infraestructura de produccion
    const domain = import.meta.env.VITE_API_DOMAIN;
    const apiStructure = import.meta.env.VITE_API_STRUCTURE;

    const api = `${domain}/${apiStructure}/v1`;

	//-------------------------------------
    const [apiUri, setApiUri] = React.useState(api);

    //LOADING, ERROR
    const [loading, setLoading] = React.useState(null);

    //Login Auth
    const [auth, setAuth] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [name, setName] = React.useState("");

    //Logout
    const handleLogout = () => {
        axios.get(`${apiUri}/user/logout`)
            .then(res => {
                location.reload(true);
            })
            .catch(err => {console.log(err)})
    }


    // RESPONSE:
    const [responseData, setResponseData] = React.useState({});

    const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`${apiUri}/${endpoint}`);

            if (!response.status === 200) {
                throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
            }
    
            return await response.json();

        }
        catch (err) {
            throw new Error(`Error fetching ${endpoint}: ${err.message}`);
        }
    };

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const filterParams = new URLSearchParams(filters);

            const endpoints = [
                // "/vacantes/resultados"
                /* otros endpoints */
            ];

            // Realizar todas las solicitudes en paralelo
            const resultsArray = await Promise.all(endpoints.map(fetchData));

            const combinedResults = resultsArray.reduce((acc, result) => {
                return { ...acc, ...result };
            }, {});
            setResponseData(combinedResults);
            console.log(responseData);
        } 
        catch (err) {
            alert(err.message);
        }
        finally {
            setLoading(false);
        }
    };

    // React.useEffect(() => {
    //     fetchAllData();
    // }, [filters]);

    // Valores de la Grafica
    const [graphValues, setGraphValues] = React.useState({
        title: "Título",
        year: actualYear,
        month: actualMonth,
        grapLabelsType: "ofertasRegistradas",
        graphType: "bar",
        description: "",
    })
    
    const handleGraphValuesChange = (key, value) => {
        setGraphValues((prevValues) => ({ 
            ...prevValues, 
            [key]: value
         }));
    };

    React.useEffect(() => {
        handleGraphValuesChange("graphType", graphLabels[graphValues.grapLabelsType].type)
    }, [graphValues.grapLabelsType]);

    

    //CAMBIO DE COLORES
    const [activeHighContrast, setActiveHighContrast] = React.useState(false);

    React.useEffect(() => {
        handleColorsByFilters();
    }, [activeHighContrast]);

    const handleColorsByFilters = () => {
        const root = document.documentElement;
        const normalStyles = {
            "--navbar-color": "#3366cc",
            "--main-body-color": "#EEFAFF",
            "--main-title-color": "#681d35",
            "--light-gray-color": "rgba(236,236,236,0.65)",
            "--confirm-color": "#069169",
            "--cancel-color": "#D31F3F",
            "--time-color": "#3366cc",
            "--gov-accesibility-card": "#681d35",
            "--black-to-white-color": "#000000",
            "--white-to-black-color": "#FFFFFF",
            "--lines-color": "#681d35",
            "--lines-color2": "#681d35",
            "--text-color": "#717171"
        };
        const highContrastStyles = {
            "--navbar-color": "#000000",
            "--main-body-color": "#737373",
            "--main-title-color": "rgba(255, 255, 255,1)",
            "--light-gray-color": "#000000",
            "--confirm-color": "#737373",
            "--cancel-color": "#737373",
            "--time-color": "#737373",
            "--gov-accesibility-card": "#000000",
            "--black-to-white-color": "#FFFFFF",
            "--white-to-black-color": "#000000",
            "--lines-color": "#FFFFFF",
            "--lines-color2": "#FFFFFF",
            "--text-color": "#FFFFFF"
        };

        const styles = activeHighContrast ? highContrastStyles : normalStyles;
        Object.entries(styles).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    };


    // Screen Width
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    const [toggleNavBarResponsive, setToggleNavBarResponsive] = React.useState(false);



    return (
        <AppContext.Provider
            value={{
                apiUri,
                loading,
                setLoading,
                
                auth,
                setAuth,
                handleLogout,
                
                name,
                setName,

                message,
                setMessage,

                //NavBar Responsive
                toggleNavBarResponsive,
                setToggleNavBarResponsive,

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
                handleGraphValuesChange,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}