import { Request, Express, Response } from "express";
import { createServer } from "http";

import { Server } from "socket.io";
import { User } from "./common/interface/user";
import { Room } from "./common/interface/room-chat";
import { MOCK_USERS } from "./common/const/user.const";

const express = require("express");
var cors = require("cors");
const app: Express = express();

app.use(
  cors({
    origin: "*"
  })
);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the ChatChat socket server");
});

// app.get("/:room", (req: Request, res: Response) => {
//   res.render("room", { roomId: req.params.room });
// });

// let userCount: { [key: string]: number } = {};

const rooms: Room[] = [];
const onlineUsers: User[] = MOCK_USERS;

io.on("connection", (socket) => {
  // lobby
  socket.on("join-lobby", (user: User) => {
    console.log("join-lobby", user, socket.id);

    // emit to new user that join the lobby with all online/offline users and rooms
    io.to(socket.id).emit("join-lobby", {
      onlineUsers,
      rooms
    });

    // emit to all other users that new user join the lobby
    socket.broadcast.emit("new-user", user);
    // add new user to online users
    onlineUsers.push(user);

    socket.on("disconnect", () => {
      console.log("disconnect", user);
      // remove user from online users
      onlineUsers.splice(
        onlineUsers.findIndex((u) => u.id === user.id),
        1
      );
      // emit to all other users that user leave the lobby
      socket.broadcast.emit("leave-user", user);
    });
  });

  // socket.on("join-room", (roomId, username) => {
  //   userCount[roomId] = userCount[roomId] ? userCount[roomId] + 1 : 1;
  //   console.log(username, " connect");
  //   socket.join(roomId);
  //   socket.to(roomId).emit("user-connected", userCount[roomId]);

  //   socket.on("disconnect", () => {
  //     userCount[roomId]--;
  //     socket.to(roomId).emit("user-disconnected", username);
  //     socket.to(roomId).emit("new-user-count", userCount[roomId]);
  //   });
  //   socket.on("send-chat-message", (username, message) => {
  //     console.log("send-chat-message", username, message);
  //     socket.to(roomId).emit("send-chat-message", username, message);
  //   });
  //   socket.on("new-user-count", (newUsercount) => {
  //     if (newUsercount) {
  //       console.log("new-user-count", newUsercount);
  //       socket.to(roomId).emit("new-user-count", newUsercount);
  //     }
  //   });
  // });
});

console.log("server start on port 9000");
server.listen(9000);
