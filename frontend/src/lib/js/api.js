import Rapi from "./fetch.js";

export const api = Rapi(fetch, {
    // default: "https://yogafaynyy.com/api/v1/" 
    default: "http://127.0.0.1:4000/api/v1/" 
})

export const browserApi = Rapi(fetch, {
    default: "https://yogafaynyy.com/api/v1/" 
    // default: "http://127.0.0.1:4000/api/v1/" 
})
