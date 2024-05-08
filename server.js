const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const users = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("register", (userId) => {
    users[userId] = socket.id;
    socket.userId = userId;
    console.log(`User ${userId} registered with socket ID ${socket.id}`);
  });

  socket.on("offer", (data) => {
    const targetSocketId = users[data.targetUserId];
    if (targetSocketId) {
      io.to(targetSocketId).emit("offer", {
        offer: data.offer,
        senderUserId: socket.userId,
      });
    }
  });

  socket.on("answer", (data) => {
    const targetSocketId = users[data.targetUserId];
    if (targetSocketId) {
      io.to(targetSocketId).emit("answer", data.answer);
    }
  });

  socket.on("ice-candidate", (data) => {
    const targetSocketId = users[data.targetUserId];
    if (targetSocketId) {
      io.to(targetSocketId).emit("ice-candidate", data.candidate);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.userId} disconnected`);
    delete users[socket.userId];
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
