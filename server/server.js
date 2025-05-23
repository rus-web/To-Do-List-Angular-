const WebSocket = require("ws");
const server = new WebSocket.Server({port: 9000});

server.on("connection", onConnect);

function onConnect(client) {
    console.log("Connection opened"); // обрабатываем входящие сообщения от клиента
    client.on("message", function(message) {
        let obj = JSON.parse(message)
        console.log(`Server sent: ${obj.text} is ${obj.status}`);    // для диагностики сообщения клиента на консоль
        client.send(`${obj.text} is ${obj.status}`) // отправка сообщения клиенту
      });
      // закрытие подключения
      client.on("close", function() {
          console.log("Connection closed");
      });
  }
  