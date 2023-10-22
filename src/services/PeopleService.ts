import { People } from "../types/People";

const BASE_URL = 'https://swapi.dev/api';



    //aca declaramos nuestros metodos
    export const PeopleService = {

        getPeople: async (): Promise<People[]> => {
            const response = await fetch(`${BASE_URL}/people`);

            const data = await response.json();

            // return data;
            if (data && data.results && Array.isArray(data.results)) {
                return data.results; // Devuelve la matriz de personas
            } else {
                return []; // Si no se encuentra "results" o no es una matriz, devuelve una matriz vacía o maneja el error adecuadamente.
            }
        },

        getPerson:async (id:number): Promise<People> => {
            const response = await fetch(`${BASE_URL}/people/${id}`);
            
            const data = await response.json();

            return data;
        },

        createPeople:async (people:People): Promise<People> => {

            const response = await fetch(`${BASE_URL}/people`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(people)
            });

            const data = await response.json();
            return data;
            
        },

        updatePeople:async (id:number, people: People): Promise<People> => {
            const response = await fetch(`${BASE_URL}/people/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(people)
            });

            const data = await response.json();
            return data;
            
        },

        deletePeople:async (id:number): Promise<void> => {
            await fetch(`${BASE_URL}/people/${id}`, {
                method: 'DELETE',
            });
    
        }
    }