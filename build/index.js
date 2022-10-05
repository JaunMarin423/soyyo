"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const app = server_1.default.server();
// starting server
app.set('PORT', 3000);
app.listen(app.get('PORT'), () => {
    console.log(`Application running on the port ${String(app.get('PORT'))}`);
});
