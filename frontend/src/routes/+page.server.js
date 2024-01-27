import { api } from '$lib/js/api.js'

let counter = 0

/** @type {import('./$types').PageLoad} */
export async function load() {
    console.log(`Cайт відвідали: ${counter++} разів`);


    const { data, error } = await api.get.json("course", { timeout: 2000 })
    
    if (error && error.type) {
        return {
            error: true,
            message: "Ви а автономному режимі"
        }
    }

    return data || {}
}