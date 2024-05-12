//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//App
import './App.css'
import "./App.css"

//Context
import { AppContext, AppProvider } from "../../Context";


//Screens
import { MainContainer } from "../components/MainContainer";
import { Home } from "../Screens/Home";

import { Footer } from "../components/Footer";
import { AccesibilityCard } from "../components/AccesibilityCard";
import { GovNavbar } from "../components/GovNavbars";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegisterScreen } from "../Screens/RegisterScreen";
import { DashboardScreen } from "../Screens/DashboardScreen";
import { ConfirmationModal } from "../components/ConfirmationModal";
import { DocumentScreen } from "../Screens/DocumentScreen";
import { ToastContainer } from "react-toastify";
import { UploadScreen } from "../Screens/UploadScreen";
import { NavImagesCard } from "../components/NavImagesCard";
import { SliderDataScreen } from "../Screens/SliderDataScreen";
import { SliderNavContainer } from "../components/SliderNavContainer";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {

    const context = React.useContext(AppContext);
    const { auth } = context;

    let routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/*", element: <Navigate replace to={"/home"}/>},
        {path: "/dashboard", element: <DashboardScreen/>},
        {path: "/document", element: <DocumentScreen/>},
        {path: "/upload", element: <UploadScreen/>},
        {path: "/slider", element: <SliderDataScreen/>},

        
        {path: "/register", element: auth ? <RegisterScreen/> : <Navigate replace to={"/login"} />},
        {path: "/login", element: !auth ? <LoginScreen/> : <Navigate replace to={"/home"}/>},
        
    ]);
    
    return routes;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <GovNavbar/>
                    <AccesibilityCard/>
                    <ConfirmationModal/>
                    <MainContainer>
                        <NavImagesCard/>
                        <SliderNavContainer/>
                        <AppRoutes/>
                    </MainContainer>
                    <ToastContainer/>
                    <Footer/>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

