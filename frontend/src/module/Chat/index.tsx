import InputMessage from "./components/InputMessage";
import { ActionIcon, TextInput, Title } from "@mantine/core";
import { baseApiURL, chatSocketURL } from "common/const";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useMediaQuery } from "@mantine/hooks";
import Message, { MessageProps } from "./components/Message";
import { useAuth } from "common/contexts/AuthContext";
import axios from "axios";
import BodyText from "common/components/BodyText";
import Loading from "module/Loading";
import PlsLogin from "module/PlsLogin.tsx";

function useSocket(url: string) {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketIo = io(url);

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, []);

  return socket;
}

interface ChatProps {
  roomId: string;
}
export default function Chat(props: ChatProps) {
  const { roomId } = props;
  // console.log(roomId);
  const socket = useSocket(`${chatSocketURL}`);

  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");

  const { user, isReady, isAuthenticated } = useAuth();

  const [messages, setMessages] = useState<MessageProps[]>([]);

  const username = user.name;

  const [userCount, setUserCount] = useState(1);

  const [anonymous, setAnonymous] = useState(false);

  useEffect(() => {
    async function fetchMessages() {
      const response = await axios.get(`${baseApiURL}/message/room/${roomId}`);
      setMessages((prev) => {
        return [];
      });
      for (let message of response.data) {
        addMessage(message.author.name, message.content);
      }
    }
    fetchMessages();
  }, []);

  // console.log("user", user);

  const addMessage = (username: string, message: string) => {
    setMessages((prev) => {
      return [...prev, { username, message }];
    });
  };
  useEffect(() => {
    if (socket) {
      socket.emit("join-room", roomId, username);
      socket.on("send-chat-message", (username: string, message: string) => {
        addMessage(username, message);
      });

      socket.on("new-user-count", (newUsercount: Number) => {
        console.log("new user count", newUsercount);
        setUserCount(Number(newUsercount));
      });
      socket.on("user-connected", (newUsercount: Number) => {
        setUserCount(Number(newUsercount));
        socket.emit("new-user-count", newUsercount);
      });
    }
  }, [socket]);

  const sendMessage = (message: string) => {
    if (socket) {
      addMessage(anonymous ? "anonymous" : username, message);
      socket.emit(
        "send-chat-message",
        anonymous ? "anonymous" : username,
        message
      );
    }
  };

  if (!isReady) return <Loading />;
  if (!isAuthenticated) return <PlsLogin />;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#F6F5F4",
        paddingTop: smallScreen ? "20px" : "40px",
        overflow: "hidden",
        paddingBottom: "10px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          width: "700px",
          maxWidth: "90vw",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "14px"
        }}
      >
        <Title order={4} sx={{ marginBottom: "10px" }}>
          Chat
        </Title>
        <BodyText>Online Users: {userCount}</BodyText>
        {messages.map((message, index) => {
          return (
            <Message
              username={
                username == message.username
                  ? message.username + " (me)"
                  : message.username
              }
              message={message.message}
              key={message.username + index}
            />
          );
        })}

        <InputMessage
          show={true}
          sendMessage={sendMessage}
          roomId={roomId}
          authorId={user.userId}
          anonymous={anonymous}
          setAnonymous={setAnonymous}
        />
      </div>
    </div>
  );
}
