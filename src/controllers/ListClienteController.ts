import { FastifyRequest, FastifyReply } from "fastify";
import { ListClienteService } from "../services/ListClienteService";

class ListClienteController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const clienteService = new ListClienteService()
        const cliente = await clienteService.execute();

        res.send(cliente)
    }
}

export {ListClienteController}