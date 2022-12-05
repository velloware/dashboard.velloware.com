"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./infra/http/server"));
const Status_1 = require("./modules/Status/Status");
dotenv_1.default.config();
process.title = 'Velloware Dash - server';
const serverHttp = new server_1.default(process.env.PORT || '5000');
serverHttp.init();
(0, Status_1.checkStatus)();
process.on('SIGTERM', () => {
    console.log('> Server ending after close all connections - ', new Date().toISOString());
    serverHttp.close(() => process.exit());
});
process.on('SIGINT', () => {
    console.log('> Server ending now! - ', new Date().toISOString());
    process.exit();
});
