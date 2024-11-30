import dotenv from 'dotenv'
import path from 'path'

//NOTE:[1.path ata node ar bitor inbuild module][2.cwd means current working diroctory (process.cwd()) ai method ta k call kora amra amdar file tar ja path theka solta sa sa path ta bar korta pari ,,,example akna path ta bar kora join kora hossaq .env file tar sata.]
//6 number ai line tar mulkaj hoisa cwd method k call kora current derectory path bar kora .env file tar sata join kora hoisa..
dotenv.config({path: path.join(process.cwd(),".env")})

export default {
    database_url: process.env.DATABASE_URL,
    port:process.env.PORT,
}