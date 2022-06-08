const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding("utf8");
  conn.on("data", () => {
    console.log("you dead cuz you idled");
  });
  conn.on("connect", () => {
    console.log("Connection successfully established to game server");
    conn.write("Name: NAM");

  });

  return conn;
};
module.exports = {
  connect
};