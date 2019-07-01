// https://www.websocket.org/echo.html
var connection = new WebSocket("wss://echo.websocket.org");

connection.onopen = () => {
  connection.send("Ping");
};

connection.onerror = (error) => {
  console.log("WebSocket error " + error);
};

connection.onmessage = (e) => {
  console.log("Server: " + e.data);
  connection.close();
};
