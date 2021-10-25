import axios from "axios";
import { urlRegister, urlLogin }from "../functions/globals";

function register(account) {
    return axios
    .post(urlRegister, account)
    .then(response => {
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('userToken', response.data.jwt);
        axios.defaults.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    });
}

function login(account) {
    return axios
    .post(urlLogin, account)
    .then(response => {
        console.log('User profile :', response.data.user);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('userToken', response.data.jwt);
    });
}

export default {
    register,
    login
};