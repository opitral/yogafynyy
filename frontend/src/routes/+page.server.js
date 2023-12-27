import { api } from '$lib/js/api.js'

/** @type {import('./$types').PageLoad} */
export async function load() {


    const { data, error } = await api.get.json("course", { timeout: 2000 })

    
    if (error && error.type) {
        return {
            error: true,
            message: "Ви а автономному режимі"
        }
    }

    return data || {}
}