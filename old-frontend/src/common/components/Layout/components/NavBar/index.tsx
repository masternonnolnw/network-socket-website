import { ActionIcon, Box, Image, Loader, NavLink, Title } from "@mantine/core";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";
import { useState } from "react";
import Link from "next/link";
import BodyText from "common/components/BodyText";
import { useAuth } from "common/contexts/AuthContext";
import { Role } from "common/contexts/AuthContext/types";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

export default function NavBar() {
  const [expand, setExpand] = useState(false);
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1200px)");
  const xsScreen = useMediaQuery("(max-width:755px)");

  const { user, isReady, isAuthenticated } = useAuth();
  // console.log("user", user);
  return (
    <div
      className={classes.NavBarLayout}
      style={{
        padding: smallScreen
          ? xsScreen
            ? "0px 10px"
            : "0px 50px"
          : "0px 150px"
      }}
    >
      <div
        style={{
          display: !expand ? "none" : "flex",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "88px",
          backgroundColor: "rgba(244, 244, 242,0.85)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          zIndex: 5
        }}
      >
        <Link
          href={`/`}
          onClick={() => setExpand(false)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Home
          </BodyText>
        </Link>
        <Link
          href={`/course`}
          onClick={() => setExpand(false)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Course
          </BodyText>
        </Link>
        <Link
          href={`/conference/Lobby`}
          onClick={() => setExpand(false)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Conference
          </BodyText>
        </Link>
        <Link
          href={`/dashboard`}
          onClick={() => setExpand(false)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Dashboard
          </BodyText>
        </Link>
      </div>
      <ActionIcon
        style={{ display: smallScreen ? "flex" : "none", marginLeft: "10px" }}
      >
        <AiOutlineMenu
          color="black"
          size={25}
          style={{ display: !expand ? "flex" : "none" }}
          onClick={() => setExpand(!expand)}
        ></AiOutlineMenu>
        <AiOutlineClose
          color="black"
          size={25}
          style={{ display: expand ? "flex" : "none" }}
          onClick={() => setExpand(!expand)}
        />
      </ActionIcon>
      {!smallScreen && (
        <div>
          <Title order={3}>GlobalTalk</Title>
        </div>
      )}
      {smallScreen && !xsScreen && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%,0%)"
          }}
        >
          <Title order={4}>GlobalTalk</Title>
        </div>
      )}
      {xsScreen && (
        <div
          style={{ padding: "20px", marginRight: "-30px", marginLeft: "-30px" }}
        >
          <Title order={4} sx={{ fontSize: "15px", marginTop: "0px" }}>
            GlobalTalk
          </Title>
        </div>
      )}
      <Box
        sx={{
          display: smallScreen ? "none" : "flex",
          width: 80,
          marginLeft: "20px"
        }}
      >
        <Link href={`/`} style={{ textDecoration: "none", color: "black" }}>
          <BodyText size="14px" color="#7B7B7B">
            Home
          </BodyText>
        </Link>
      </Box>
      <Box sx={{ display: smallScreen ? "none" : "flex", width: 80 }}>
        <Link
          href={`/course`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Course
          </BodyText>
        </Link>
      </Box>
      <Box sx={{ display: smallScreen ? "none" : "flex", width: 80 }}>
        <Link
          href={`/conference/Lobby`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Conference
          </BodyText>
        </Link>
      </Box>
      <Box
        sx={{
          display: smallScreen ? "none" : "flex",
          width: 80,
          marginLeft: "10px"
        }}
      >
        <Link
          href={`/dashboard`}
          onClick={() => setExpand(false)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BodyText size="14px" color="#7B7B7B">
            Dashboard
          </BodyText>
        </Link>
      </Box>
      {!isReady && (
        <Loader sx={{ marginLeft: "auto" }} color="cyan" size="sm" />
      )}
      {isAuthenticated && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              marginLeft: "auto"
            }}
          >
            <HiAcademicCap
              size={20}
              style={{
                display: user.role == Role.student ? "flex" : "none",
                marginLeft: "auto"
              }}
            ></HiAcademicCap>
            <FaChalkboardTeacher
              size={xsScreen ? 20 : 25}
              style={{
                display: user.role == Role.instructor ? "flex" : "none",
                marginLeft: "auto"
              }}
            ></FaChalkboardTeacher>
            <Title order={6} sx={{ marginRight: "-30px" }}>
              {user.name}
            </Title>
          </div>
          <Box
            sx={{
              display: "flex",
              width: 90
            }}
          >
            <NavLink
              label="Sign Out"
              style={{ textAlign: "center" }}
              onClick={() => {
                localStorage.removeItem("token");
                location.href = "/";
              }}
            ></NavLink>
          </Box>
        </>
      )}
      {isReady && !isAuthenticated && (
        <Link
          href={`/auth`}
          style={{
            // textDecoration: "none",
            color: "black",
            marginLeft: "auto",
            marginRight: "10px"
          }}
        >
          <BodyText size="14px" color="#7B7B7B">
            {xsScreen ? "Login" : "Login or Signup"}
          </BodyText>
        </Link>
      )}
    </div>
  );
}
