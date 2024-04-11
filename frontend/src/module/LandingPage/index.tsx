import FirstParagraph from "./components/FirstParagraph";
import ForthParagraph from "./components/ForthParagraph";
import SecondParagraph from "./components/SecondParagraph";
import ThirdParagraph from "./components/ThirdParagraph";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
    >
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <FirstParagraph />
      </motion.div>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        style={{ marginTop: "50px" }}
        transition={{ duration: 0.3 }}
      >
        <SecondParagraph />
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <ThirdParagraph />
      </motion.div>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <ForthParagraph />
      </motion.div>
    </div>
  );
}
