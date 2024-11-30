"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
//NOTE:[1.path ata node ar bitor inbuild module][2.cwd means current working diroctory (process.cwd()) ai method ta k call kora amra amdar file tar ja path theka solta sa sa path ta bar korta pari ,,,example akna path ta bar kora join kora hossaq .env file tar sata.]
//6 number ai line tar mulkaj hoisa cwd method k call kora current derectory path bar kora .env file tar sata join kora hoisa..
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
};
