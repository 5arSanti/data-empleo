import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";


const handlePostData = async (event, object, endpoint, callback = reloadLocation, headers={}) => {
    event.preventDefault();

    try {
        const url = `${api}${endpoint}`;

        const options = {
            method: 'POST', 
            mode:'cors',
            headers: {
                ...headers
            },
            body: JSON.stringify(object)
        };
      
        const response = await fetch(url, options);
        const data = await response.json();

        if(data.Status === "Success") {
            handleNotifications("success", data.message);
            callback();

            return data.Status;
        } else {
            handleNotifications("error", data.Error)
        }
      
    } catch (err) {
        handleNotifications('error', err);
    }
};


const handlePostFile = async (event, object, endpoint, callback = reloadLocation, headers={}) => {
    event.preventDefault();

    try {
        const url = `${api}${endpoint}`;

        const options = {
            method: 'POST', 
            mode:'cors',
            headers: {
                ...headers
            },
            body: object
        };
      
        const response = await fetch(url, options);
        const data = await response.json();

        if(data.Status === "Success") {
            handleNotifications("success", data.message);
            callback();

            return data.Status;
        } else {
            handleNotifications("error", data.Error)
        }
      
    } catch (err) {
        handleNotifications('error', err);
    }
};

export { handlePostData, handlePostFile };
