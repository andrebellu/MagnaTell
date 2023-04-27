/** @type {import('./$types').PageServerLoad} */

export async function load({ cookies }) {
    const idToken = cookies.get('idToken');

    return {
        idToken
    }
}