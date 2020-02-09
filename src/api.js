/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Sat Feb 08 2020
 *  File : api.js
 *******************************************/

import axios from "axios";
const api = axios.create({
    baseURL: "http://api.github.com"
});

export default api;
