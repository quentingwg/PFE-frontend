import {livreurs } from './data';
export function load(){
    return {
        summaries : livreurs.map((livreur)=> ({
            nom: livreur.nom,
            tournee:livreur.tournee
        }))
    };
}