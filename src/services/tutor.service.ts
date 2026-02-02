import { env } from "@/env";

const API_URL = env.API_URL;

export const tutorService = {
    getTutors: async function () {
        try {
            const res = await fetch(`${API_URL}/tutors`)

            const data = await res.json();

            //* this is an example
            // if (data.succuss) {
            //     return
            // }
        } catch (error) {
            
        }
    }
}