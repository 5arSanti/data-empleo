import { api } from "../api";

const handleGetFile = async (endpoint, fileName="") => {
    try {
        const response = await fetch(`${api}/${endpoint || fileName}`);

        if (!(response.status == 200)) {
            throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
        }

        return await response.blob();
    } 
    catch (err) {
        throw new Error(err)
    }
}

export { handleGetFile };