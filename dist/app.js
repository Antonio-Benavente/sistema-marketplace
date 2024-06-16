"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import Routes from './routes/alumnoRoutes';
const app = (0, express_1.default)();
//Database
//Midlewares
app.use(express_1.default.json());
//Routes
//app.use('/api/v1/alumnos',alumnoRoutes);
exports.default = app;
//# sourceMappingURL=app.js.map