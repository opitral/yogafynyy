import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {

    // let url = "https://yogafaynyy.com/api/v1/course"
    let url = "http://127.0.0.1:4000/api/v1/course"

    let aaa

    try {
        aaa = await fetch(url)
        aaa = await aaa.json()
    } catch (error) {
        aaa = error + ""
    }
    
    return json({
        message: aaa
    });
}