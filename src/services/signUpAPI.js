import axios from "axios";
import { urlCustomer } from "../functions/globals";

function create(account) {
    return axios.post(urlCustomer, account);
}
 
export default {
    create
};