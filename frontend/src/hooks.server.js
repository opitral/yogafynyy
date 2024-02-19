// /** @type {import('@sveltejs/kit').Handle} */

// export async function handle({ event, resolve }) {
  
//     if (event.url.pathname.startsWith("/confirm")) {
//         let body = {}

//         if (event.request.method == "POST") {
//             body = await event.request.json()
//         }
    
//         event.request = new Request(event.request.url, { method: "GET" })
    
//         event.locals.order_id = body.order_id
//     }

// 	return await resolve(event);
// }