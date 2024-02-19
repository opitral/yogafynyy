import { json } from '@sveltejs/kit';
import Rapi from '$lib/js/fetch.js';

/** @type {import('./$types').RequestHandler} */
export async function GET() {

    let url1 = "https://yogafaynyy.com/api/v1/course"
    let url2 = "http://127.0.0.1:4000/api/v1/course"

    let api = Rapi()
    
    async function test1() {
        let { data, error } = await api.get.json(url1)
        return { data, error }
    }

    async function test2() {
        let { data, error } = await api.get.json(url2)
        return { data, error }
    }

    async function test3() {
        try {
            let response = await fetch(url1)
            return {
                data: await response.json(),
                error: null
            }
        } catch (error) {
            return {
                data: null,
                error: error
            }
        }
    }

    async function test4() {
        try {
            let response = await fetch(url2)
            return {
                data: await response.json(),
                error: null
            }
        } catch (error) {
            return {
                data: null,
                error: error
            }
        }
    }


    return json({
        tests: {
            rapi: {
                domen: await test1(),
                local: await test2(),
            },
            fetch: {
                domen: await test3(),
                local: await test4(),
            }
        }
    });
}













    // try {
    //     aaa = await fetch(url)
    //     aaa = await aaa.json()
    // } catch (error) {
    //     aaa = error + ""
    // }