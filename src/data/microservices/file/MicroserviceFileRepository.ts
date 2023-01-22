import fs from 'fs'
import MicroService from '../../../domain/models/MicroService'
import MicroServiceInstance from '../../../domain/models/MicroServiceInstance'
import MicroServiceRepository from '../../../domain/repositories/MicroServiceRepository'

type services = {
  services: {
    [key: string]: MicroService
  }
}

class MicroserviceFileRepository implements MicroServiceRepository {

  constructor() {
    console.log('New MicroserviceFileRepository')
  }

  private getServicesFromFile(): services {
    console.log('FILE')
    try {
      const rawFile: string = fs.readFileSync('registry.json').toString();
      const data = JSON.parse(rawFile);
      if ((data as services).services != undefined) {
        console.log('OK')
        return data as services;
      } else {
        throw new Error('File is not a services file \nNew file was created')
      }
    } catch (error) {
      console.log((error as Error).message)
      return { services: {} }
    }

  }

  getMicroservice(serviceName: string): MicroService {
    return this.getServicesFromFile().services[serviceName];
  }

  async addInstance(instace: MicroServiceInstance): Promise<void> {
    const services: services = this.getServicesFromFile();
    const microservice: MicroService = services.services[instace.serviceName]

    if (!microservice) {
      services.services[instace.serviceName] = new MicroService(instace.serviceName);
    }

    services.services[instace.serviceName].instances.push(instace);

    return fs.promises.writeFile('registry.json', JSON.stringify(services))
  }

  list() {
    return this.getServicesFromFile().services;
  }

}

export default MicroserviceFileRepository