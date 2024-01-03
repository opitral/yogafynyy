import { json } from '@sveltejs/kit';
import Rapi from '$lib/js/fetch.js';

/** @type {import('./$types').RequestHandler} */
export async function GET() {

    // let url = "https://yogafaynyy.com/api/v1/course"
    let url = "http://127.0.0.1:4000/api/v1/course"

    let api = Rapi()

    let { data, error } = await api.get.json(url)


    return json({
        message: data,
        error: error
    });
}













    // try {
    //     aaa = await fetch(url)
    //     aaa = await aaa.json()
    // } catch (error) {
    //     aaa = error + ""
    // }