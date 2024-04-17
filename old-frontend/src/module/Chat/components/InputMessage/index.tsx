import { ActionIcon, Switch, TextInput } from "@mantine/core";
import axios from "axios";
import { baseApiURL } from "common/const";
import { useState } from "react";
import { TbSend } from "react-icons/tb";

interface InputMessageProps {
  show: boolean;
  sendMessage: Function;
  roomId: string;
  authorId: string;
  anonymous?: boolean;
  setAnonymous?: Function;
  allowBlank?: boolean;
}
export default function InputMessage(props: InputMessageProps) {
  const {
    show,
    sendMessage,
    roomId,
    authorId,
    setAnonymous,
    anonymous,
    allowBlank = false
  } = props;
  const [message, setMessage] = useState("");

  async function handleNewStatus() {
    if (!allowBlank && message == "") return;
    await sendMessage(message);
    setMessage("");
    if (roomId == "" || authorId == "") return;
    try {
      const res = await axios.post(`${baseApiURL}/message`, {
        roomId: roomId,
        authorId: anonymous ? 666 : Number(authorId),
        content: message
      });
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleNewStatus();
      }}
      style={{ display: "flex", width: "100%", flexDirection: "column" }}
    >
      {setAnonymous && (
        <Switch
          label="Anonymous"
          checked={anonymous}
          onChange={(event) => setAnonymous(event.currentTarget.checked)}
          color="dark"
        />
      )}
      <TextInput
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
        placeholder="add text"
        radius="lg"
        style={{
          display: show ? "block" : "none",
          height: "33px",
          width: "100%"
        }}
        sx={{
          ".mantine-TextInput-label": {
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "155%",
            color: "black"
          },
          ".mantine-TextInput-input": {
            // fontWeight: 600,
            // fontSize: "12px",
            // lineHeight: "155%",
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 0)",

            width: "100%",
            height: "30px"
          },
          ".mantine-TextInput-root": {
            color: "black"
          },
          "	.mantine-TextInput-wrapper": {
            width: "100%"
          }
        }}
        rightSection={
          <ActionIcon
            onClick={handleNewStatus}
            size="lg"
            radius="md"
            style={{
              // display: status == "JOINED" ? "flex" : "none",
              marginBottom: "4px",
              marginTop: "5px",
              marginRight: "5px",
              color: "black"
            }}
          >
            <TbSend size={20} />
          </ActionIcon>
        }
      />
    </form>
  );
}
