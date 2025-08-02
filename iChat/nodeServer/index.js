// nodeserver which will handle socket.io connections

const io = require("socket.io")(8000);

const users = {};

io.on("connection", (socket) => {
  socket.on("new-user-joined", userName => {
    console.log("new user", userName)
    users[socket.id] = userName;
    socket.broadcast.emit("user-joined", userName);
  });
  socket.on("send", (messege) => {
    socket.broadcast.emit("receivr", {
      messege: messege,
      userName: users[socket.id],
    });
  });
});
