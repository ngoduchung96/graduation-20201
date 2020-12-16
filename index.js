const express = require("express");
const http = require('http')
const cors = require("cors");
const router = require("./routes");
const bodyParser = require("body-parser");
require("./config.js");
const app = express();
const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, POST, PUT"
}

const server = http.createServer(app)

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

io.on('connection', function(socket) {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', function(data) {
    io.emit('MESSAGE', data)
});
});
 
// const taskRequest = require('./routes/userRoutes')(io);

app.use(cors(corsOptions));

// app.use(express.json({ limit: "2MB" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/socketSend", async (req, res) => {
  io.emit('MESSAGE', req.query);

  res.status(200).json({...req.query});
} )
app.use("/api", router);
// server.use('/api/taskRequest', taskRequest);
// app.use("/api", router); phải được viết sau 2 dòng trên vì nếu không req.body sẽ = undefined
// vì nó không thể đọc được json 
// sau khi "throw new Error" ở bất kì một middleware nào thì nó sẽ chạy câu lệnh
// next({status:httpError}) và rồi sẽ bị errorMiddleware nhận ra và thực hiện res().send()
server.listen(3000, () => {
  console.log(`server is running on port 3000`);
});

