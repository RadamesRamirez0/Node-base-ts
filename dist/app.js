"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//db.sync();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
const server = app.listen(port, () => {
    console.log(`Servidor a la escucha. Puerto: ${port}`);
});
server.on("error", console.error);
//# sourceMappingURL=app.js.map