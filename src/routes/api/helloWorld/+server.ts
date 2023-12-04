import { json } from '@sveltejs/kit'

const url = "http://localhost";
const port = 8080;
const api = "helloWorld";

/**
 * 
 * @returns {Promise<{ name: string }>}
 */
export async function GET() {
    try {
        //const reponse = await fetch(`${url}:${port}/${api}`);
        const reponse = await fetch("https://catfact.ninja/fact") // working url
        if (reponse.ok) {
            const json = await reponse.json();
            return await new Response(JSON.stringify({ name : json.fact })) // TODO json.???
        } else {
            throw new Error(reponse.statusText);
        }
    } catch (error) {
        return new Response(JSON.stringify({ name : "KO" }))
    }
}