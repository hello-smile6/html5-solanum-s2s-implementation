import { connect } from "./connect.js";
import config from "./config.js";
const socket=new WebSocket(config.wsUrl);
socket.addEventListener("open", function() {
    connect(socket, function() {
        console.log("Connected!");
    })
})