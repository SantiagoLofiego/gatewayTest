import MicroserviceFileRepository from "../data/microservices/file/MicroserviceFileRepository";
import MicroServiceRepository from "../domain/repositories/MicroServiceRepository";

type Container={
  microServiceRepository: MicroServiceRepository
}

const container: Container = {
  microServiceRepository:new MicroserviceFileRepository()
}


export default container