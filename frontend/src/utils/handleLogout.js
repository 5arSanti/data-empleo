import axios from "axios";
import { api } from "./api";
import { handleNotifications } from "./handleNotifications";
import { reloadLocation } from "./realoadLocation";

const apiParam = api;


const handleLogout = () => {

    axios.get(`${apiParam}/user/logout`)
        .then(res => {
            const { data } = res;

            if(data.Status == "Success") {
                handleNotifications("info", "Sesión Cerrada Correctamente")
                reloadLocation()
            }
        })
        .catch(err => { handleNotifications("error", err) })
}

export { handleLogout };