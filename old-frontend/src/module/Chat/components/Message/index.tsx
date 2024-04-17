import { Title } from "@mantine/core";
import BodyText from "common/components/BodyText";
import { memo } from "react";

import { motion } from "framer-motion";

export interface MessageProps {
  username: string;
  message: string;
}
function Message(props: MessageProps) {
  const { username, message } = props;
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        border: "0.5px solid #bbb",
        borderRadius: "10px",
        padding: "20px",
        gap: "10px"
      }}
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <Title order={4}>{username}</Title>
      <div style={{ paddingLeft: "20px" }}>
        <BodyText>{message}</BodyText>
      </div>
    </motion.div>
  );
}
export default memo(Message);
