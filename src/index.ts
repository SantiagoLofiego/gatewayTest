import express,{Router} from "express";
import Server from "./rest-server/server/server";
import router from "./rest-server/routes/gateway.routes";
import serviceRouter from "./rest-server/routes/microservice.routes";
import container from "./config/container";


let repo = container.microServiceRepository;


const server = Server.instace;
const eRouter = Router()
router.use(express.json())
server.use(eRouter)

server.use(router);
server.use(serviceRouter);

server.start(3005);