import React from "react";
import axios from "axios"

import { scrollToValue } from "../../../utils/scrollToValue";
import { AppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { handleNotifications } from "../../../utils/handleNotifications";

const AuthWrapper = ({children}) => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    React.useEffect(() => {
        scrollToValue();
        
        axios.get(`${context.apiUri}/user/`)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    context.setAuth(true);
                    context.setName(data.name);
                } else {
                    context.setAuth(false);
                    navigate("/home");
                }
            })
            .catch(err => {
                handleNotifications("error", err)
                navigate("/home");
            })
    }, []);

    return (children);
}

const IsAuthWrapper = ({children}) => {
    const context = React.useContext(AppContext);

    const { auth } = context || false;
    if (auth) {
        return (children);
    }

    return;
}

export { AuthWrapper, IsAuthWrapper }