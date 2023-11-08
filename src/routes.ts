import {
	FastifyInstance,
	FastifyPluginOptions,
	FastifyRequest,
	FastifyReply,
} from "fastify";
import { CreateClienteController } from "./controllers/CreateClienteController";

export async function route(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (req: FastifyRequest, res: FastifyReply) => {
        return {ok:true}
    })

    fastify.post("/clientes", async (req: FastifyRequest, res: FastifyReply) => {
        return new CreateClienteController().handle(req, res)
    })
}
