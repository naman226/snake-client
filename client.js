const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", () => {
    console.log("you dead cuz you idled");
  });
  conn.on("connect", () => {
    console.log("Connection successfully established to game server");
    conn.write("Name: NAM");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 100);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 150);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 200);
  
    return conn;
  });
};

console.log("Connecting ...");
connect();

module.exports = {
  connect
};