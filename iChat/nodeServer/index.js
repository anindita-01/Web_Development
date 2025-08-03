// nodeserver which will handle socket.io connections

const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" }, // Optional, helpful if testing with frontend
});
http.listen(8000, () => console.log("Server running on port 8000"));

const users = {};

io.on("connection", (socket) => {
  socket.on("new-user-joined", (userName) => {
    // console.log("new user", userName);
    users[socket.id] = userName;
    socket.broadcast.emit("user-joined", userName);
  });
  socket.on("send", (messege) => {
    socket.broadcast.emit("receive", {
      messege: messege,
      userName: users[socket.id],
    });
  });
  socket.on("disconnect", (messege) => {
    socket.broadcast.emit("left", users[socket.id]);
    delete users[socket.id];
  });
});
