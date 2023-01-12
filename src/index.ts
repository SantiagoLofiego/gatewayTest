import express, {Request, Response} from "express";
import config from './config'
import { fileData, addRegistry } from "./data/microservices/file";



const server = express();

server.use(express.json());

//addRegistry();

server.all("/api/:value", (req:Request, resp:Response)=>{
  console.log(req.socket.address())
  
  resp.send("Api response service")
})
server.listen(config.server.port, ()=>{
  console.log(`Server running on port ${config.server.port}`)
})

