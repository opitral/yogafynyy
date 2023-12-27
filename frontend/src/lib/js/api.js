import Rapi from "./fetch.js";

export const api = Rapi(fetch, {
    default: "https://m03hqkmn-4000.euw.devtunnels.ms/api/v1/" 
})
