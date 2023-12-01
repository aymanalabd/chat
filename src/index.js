import app from "./app.js";
import "./database.js";
import https from "https";
import {Server} from "socket.io";
import sockets from "./sockets.js";

const server = https.createServer(app);
const io =new Server(server,{

    cors: {
        origin: "*",
        methods: "*",
        allowedHeaders: "*",
        credentials: true
      }

});

sockets(io);

server.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);
