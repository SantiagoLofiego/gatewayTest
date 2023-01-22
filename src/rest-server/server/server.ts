import express, { Express, Router } from "express"

class Server {
  private static _instace: Server
  private express: Express
  private constructor() {
    this.express = express()
  }

  static get instace(): Server {
    if (!Server._instace) {
      Server._instace = new Server()
    }

    return Server._instace
  }

  use(router:Router){
    this.express.use(router);
  }

  start(port: number) {

    this.express.listen(port, ()=>{
      console.log('Server running on port ' + port)
    }).on('close', () => {
      console.log('ERROR')
    })
  }

  getExpress(): Express {
    return this.express;
  }
}


export default Server;