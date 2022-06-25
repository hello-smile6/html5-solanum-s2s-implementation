/**
 * @requires module:config
 */
 import config from "./config.js";
 import { userLog } from "./util.js";
/**
 * Connect to a server.
 * @param {WebSocket} socket
 * @param {Function} callback
 */
export var connect = function (socket, callback) {
  /**
   *
   * @param {MessageEvent} event
   * @returns void
   */
  var _handleMessage = (event) => {
      let messageText = new String(event?.data);
      if (messageText.startsWith("PING")) {
          // Solanum generally uses uppercase.
          socket.send(messageText.replace("PING", "PONG"));
          // Pings are not propagated.
          userLog(`PING message recieved. Raw message: ${messageText}`);
          return;
      }
  };
  socket.addEventListener("message", _handleMessage);
  socket.send("CAPAB QS EX CHW IE KNOCK SAVE EUID ENCAP");
  socket.send(`PASS ${config.send_password} TS 6 ${config.sid}`);
  socket.send(`SERVER ${config.serverName} 1 ${config.description}`)
};
