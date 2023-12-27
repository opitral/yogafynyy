import Rapi from "./fetch.js";

export const api = Rapi(fetch, {
    default: "http://localhost:4000/api/v1/" 
})
