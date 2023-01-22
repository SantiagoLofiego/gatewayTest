class MicroServiceInstance {
  protocol: string;
  ip: string;
  port: number;
  serviceName: string;

  constructor(protocol: string, ip: string, port: number, serviceName:string){
    this.ip = ip;
    this.protocol = protocol;
    this.port = port
    this.serviceName = serviceName
  }
}

export default MicroServiceInstance