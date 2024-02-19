import fs from "node:fs"

/** @type {import('./$types').PageServerLoad} */
export async function load(e) {
    try {
        let path = "/img/reviews-raw/"
        let files = fs.readdirSync("./static" + path) 

        return {
            files: files.map(e => {
                return path + e
            })
        }
    } catch (error) {
        return {
            error
        }
    }
}