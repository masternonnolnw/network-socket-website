import { Title } from "@mantine/core";
import { motion } from "framer-motion";

export default function PlsLogin() {
  return (
    <motion.div
      style={{
        display: "flex",
        width: "300px",
        height: "300px",
        background:
          "url(https://cdn4.vectorstock.com/i/1000x1000/45/53/flat-robot-says-hello-mascot-vector-27994553.jpg)",
        backgroundSize: "cover",
        position: "fixed",
        top: "calc(50% - 150px)",
        left: "calc(50% - 150px)",
        borderRadius: "100px",
        cursor: "pointer"
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        location.href = "/auth";
      }}
      //   animate={
      //     {
      // scale: [1, 1.2, 1.2, 1, 1],
      // rotate: [0, 0, 360, 360, 0]
      // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      //     }
      //   }
      //   transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 1.5 }}
    >
      <Title
        order={4}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "30px"
        }}
      >
        Login or Signup
      </Title>
    </motion.div>
  );
}
