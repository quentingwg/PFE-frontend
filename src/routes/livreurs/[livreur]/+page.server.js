import {error} from '@sveltejs/kit';
import {livreurs} from '../data';

// @ts-ignore
export function load({ params }){
    const livreur = livreurs.find((livreur)=> livreur.tournee === params);
    if(!livreur) throw error(404);
    return {
        livreur
    };
}


