import { api } from '$lib/js/api.js';


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const body = await request.formData()

        const { error, data } = await api.post.json("course/buy/confirm", {
            body: {
                order_id: body.get("order_id")
            }
        })

        console.log(data, error);

        return {
            message: data?.message,
            error: error?.cnt
        }
    }
};









// /** @type {import('./$types').PageServerLoad} */
// export async function load(e) {

//     const order_id = e.locals.order_id || 123

//     const confirm_url = "https://m03hqkmn-4000.euw.devtunnels.ms/api/v1/course/buy/confirm"

//     let { data, error } = await fetch.post.json(confirm_url, { body: { order_id } })

//     console.log(data, error.error);

//     if (data) {
//         return data
//     }

//     return {
//         error: true
//     }
  

//     // let data = {
//     //     message: "https://t.me/YogaTestikBot?start=xcNHbd",
//     //     // error: "Order not found",
//     //     support: "https://t.me/support"
//     // }

//     // return { ...data, id: e.params?.id }
// }