import dotenv from 'dotenv'
dotenv.config()

//console.log(process.env)

const config = {
  server: {
    port: parseInt(process.env.SERVER_PORT || '3000') 
  },
  data:{
    userMysql:{
      host: process.env.USER_DB_HOST,
      username: process.env.USER_DB_USERNAME,
      password: process.env.USER_DB_PASSWORD,
      database: process.env.USER_DB_DATABASE
    }
  }
}

export default config;
