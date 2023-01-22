import MicroServiceInstance from "./MicroServiceInstance";

class MicroService {
  serviceName: string;
  instances: MicroServiceInstance []

  constructor(serviceName:string){  
    this.serviceName = serviceName;
    this.instances = []
  }
}

export default MicroService