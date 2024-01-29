import Rapi from "./fetch.js";

export const api = Rapi(fetch, {
    default: "https://yogafaynyy.com/api/v1/"  
})