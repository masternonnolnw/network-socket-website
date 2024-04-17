import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      style={{
        display: "flex",
        width: "300px",
        height: "300px",
        background:
          "url(https://cdn-images-1.medium.com/max/1200/1*jzDNP1HfkAyPjofT3BWNxA.png)",
        backgroundSize: "cover",
        position: "fixed",
        top: "calc(50% - 150px)",
        left: "calc(50% - 150px)"
      }}
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 360, 360, 0]
        // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
      transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 1.5 }}
    />
  );
}
