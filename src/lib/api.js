import STORE from "../store";
import axios from "axios";

const CLIENT = axios.create({
    baseURL: STORE.Config.CLIENT,
    timeout: STORE.Config.APITimeout,
    headers: STORE.Config.HEADERS,
})

const PORTAL = axios.create({
    baseURL: STORE.Config.PORTAL,
    timeout: STORE.Config.APITimeout,
    headers: STORE.Config.HEADERS,
})


const SET_URL = (zone) => {
    PORTAL.defaults.baseURL = "https://" + zone + ".xlinkvpn.io:30102"
}

export {
    CLIENT,
    PORTAL,
    SET_URL,
}
