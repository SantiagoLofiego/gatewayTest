import express, { Router } from "express";
import container from "../../config/container";
import MicroserviceFileRepository from "../../data/microservices/file/MicroserviceFileRepository";
import MicroServiceInstance from "../../domain/models/MicroServiceInstance";
import MicroServiceRepository from "../../domain/repositories/MicroServiceRepository";

const router: Router = Router();
const serviceRouter: Router = Router();
const repository: MicroServiceRepository = container.microServiceRepository;


router.post("/", (req, res, next) => {
  const ip = req.body.ip;
  const port = req.body.port;
  const serviceName = req.body.serviceName;
  let microServiceInstance: MicroServiceInstance;


  if (ip && port && serviceName) {
    microServiceInstance = new MicroServiceInstance('http', ip, port, serviceName)
    repository.addInstance(microServiceInstance).then(() => {
      res.send('registration success')
    }).catch((error) => {
      res.send(error.message)
    })
  } else {
    res.send('missing fields')
  }

})

router.get("/", (req, res, next) => {
  res.send(repository.list())
})

router.get('/:apiName', (req, res, next) => {
  res.send(repository.getMicroservice(req.params.apiName) || 'service not found')
})

serviceRouter.use('/services', router)

export default serviceRouter
