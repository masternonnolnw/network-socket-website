const express = require("express");
var cors = require("cors");
const app = express();
const { v4: uuidV4 } = require("uuid");

app.use(
  cors({
    origin: "*"
  })
);

const server = require("http").Server(app);
server.cors = "*";
const io = require("socket.io")(server, {
  cors: {
    origin: "*"
  }
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.redirect(`/${uuidV4()}`);
  res.send("Hello");
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

let userCount = {};
io.on("connection", (socket) => {
  console.log("try connect");
  socket.on("join-room", (roomId, username) => {
    userCount[roomId] = userCount[roomId] ? userCount[roomId] + 1 : 1;
    console.log(username, " connect");
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userCount[roomId]);

    socket.on("disconnect", () => {
      userCount[roomId]--;
      socket.to(roomId).emit("user-disconnected", username);
      socket.to(roomId).emit("new-user-count", userCount[roomId]);
    });
    socket.on("send-chat-message", (username, message) => {
      console.log("send-chat-message", username, message);
      socket.to(roomId).emit("send-chat-message", username, message);
    });
    socket.on("new-user-count", (newUsercount) => {
      if (newUsercount) {
        console.log("new-user-count", newUsercount);
        socket.to(roomId).emit("new-user-count", newUsercount);
      }
    });
  });
});

console.log("server start on port 9000");
server.listen(9000);
