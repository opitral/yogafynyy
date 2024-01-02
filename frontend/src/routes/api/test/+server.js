import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {

    let url = "https://yogafaynyy.com/api/v1/course"

    let aaa = await fetch(url)
    aaa = aaa.json()
    
    return json({
        message: aaa
    });
}