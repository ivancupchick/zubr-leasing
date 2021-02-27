// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "zubrleas_root",
  database: "zubrleas_wp",
  password: "6587erdf@",
});

connection.connect(function(err){
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else{
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});

// const app = http.createServer(function (req, res) {
//   res.setHeader("Content-Type", "application/json");

//   res.end(
//     JSON.stringify({
//       firstName: "John",
//       lastName: "Doe",
//     })
//   );
// });

// app.listen(port, hostname);
