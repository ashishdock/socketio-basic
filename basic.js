const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('I am connected');
});

// const io = socketio(server);
// const io = socketio(server, {
//   cors: {
//     origin: '*',
//   },
// });

const io = socketio(server, {
  cors: {
    origin: '*',
    // methods: ['GET', 'POST'],
    // allowedHeaders: ['my-custom-header'],
    // credentials: false,
  },
});

io.on('connection', (socket, req) => {
  socket.emit('welcome', 'Welcome to the websocket server!!!');
  socket.on('message', (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
