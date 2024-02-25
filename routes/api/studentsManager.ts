import { Handlers, FreshContext } from "$fresh/server.ts";
import { LoadStudents, SaveStudents } from "../../data/StudentsManager.ts";

export const handler: Handlers = {
    POST: async (req: Request, _ctx: FreshContext)=> {

        const bodyJson = await req.json() as Record<string, number>

        SaveStudents(bodyJson)

        return new Response(JSON.stringify(bodyJson), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
    },

    GET:  (_req: Request, _ctx: FreshContext)=> {

      const studentsList = LoadStudents()
    
      return new Response(JSON.stringify(studentsList), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  },
}