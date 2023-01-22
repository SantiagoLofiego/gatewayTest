import MicroService from "../models/MicroService"
import MicroServiceInstance from "../models/MicroServiceInstance"

interface MicroServiceRepository {
  getMicroservice(serviceName:String):MicroService
  addInstance(instace: MicroServiceInstance): Promise<void>
  list():{[key: string]: MicroService}
}

export default MicroServiceRepository