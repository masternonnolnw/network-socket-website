import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import { useCounter, useMediaQuery } from "@mantine/hooks";
import { BsLightningFill } from "react-icons/bs";
import BodyText from "common/components/BodyText";
import Link from "next/link";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseApiURL } from "common/const";
export default function FirstParagraph() {
  const { classes } = useStyles();
  const [count, setCount] = useState("");

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await axios.get(`${baseApiURL}/user/count`);
        // console.log(res.data);
        setCount(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    if (count == "") fetchCount();
  }, []);

  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: smallScreen ? "1200px" : "740px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F5F4",
        flexDirection: smallScreen ? "column" : "row"
      }}
    >
      <div className={classes.FirstContainer}>
        <div
          style={{
            minWidth: "550px",
            textAlign: smallScreen ? "center" : "justify",
            justifyContent: smallScreen ? "center" : "justify",
            padding: "50px"
          }}
        >
          <div>
            <BodyText size="sm" color="#2B788B">
              E-COURSE PLATFORM
            </BodyText>
          </div>

          <div
            style={{
              marginTop: "24px",
              padding: xsScreen ? "0px 30px" : "0px"
            }}
          >
            <Title order={1}>
              Learning and
              <br />
              teaching online,
              <br />
              made easy.
            </Title>
          </div>
          <div
            style={{
              marginTop: "30px",
              padding: xsScreen ? "0px 30px" : "0px"
            }}
          >
            <BodyText size="sm" color="#757575">
              Practice your english and learn new things
              <br /> with the platform.
            </BodyText>
          </div>
          <MediaQuery
            smallerThan="xl"
            styles={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Button className={classes.ButtonStyle}>
              <Link
                href={`/course`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Text
                  size={"xs"}
                  color="#2B788B"
                  style={{
                    fontWeight: "700"
                  }}
                >
                  Explore course &gt;
                </Text>
              </Link>
            </Button>
          </MediaQuery>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: smallScreen ? "center" : "normal",
              paddingTop: "56px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "2px"
              }}
            >
              <BsLightningFill
                size={35}
                color="#2B788B"
                style={{ marginTop: "10px" }}
              ></BsLightningFill>
              <Title order={2}>{count}</Title>
            </div>
            <BodyText size="sm" color="#585858">
              User Online
            </BodyText>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "822px",
          maxHeight: "620px",
          padding: "20px"
        }}
      >
        <Image
          style={{}}
          src="/LandingPage/man-and-trees.png"
          alt="man-and-trees"
        />
      </div>
    </div>
  );
}
