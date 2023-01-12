import fs from 'fs'
import registry from '../../../registry.json'

type MicroService = {
  apiName: string,
  instances?: MicroServiceInstace[],
}

type MicroServiceInstace = {
  host: string,
  port: number
}



export const addRegistry = (apiName: string, instance : MicroServiceInstace) => {

  let data = registry;
  data.services[apiName]

  

  return fs.promises.writeFile('./src/registry.json', JSON.stringify(newData))
}


const readFileF= async ()=>{
  console.log('FILE READING')
  let data = await (fs.promises.readFile('./text.txt'));
  let result = JSON.parse(data.toString());
  console.log(result)
  return result
}

addRegistry('testApi', {host:'localhost',port:1234});


export const fileData = readFileF




