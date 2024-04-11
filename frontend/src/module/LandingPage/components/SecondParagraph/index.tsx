import { Image, Text, Button, Title, MediaQuery, NavLink } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import BodyText from "common/components/BodyText";
import Link from "next/link";
import { useStyles } from "./styles";

export default function SecondParagraph() {
  const { classes } = useStyles();
  const smallScreen = useMediaQuery("(max-width:1400px)");
  const xsScreen = useMediaQuery("(max-width:700px)");
  return (
    <MediaQuery
      smallerThan="xl"
      styles={{
        flexDirection: "column",
        width: "100%",
        height: "1000px",
        gap: "30px",
        alignContent: "center"
      }}
    >
      <div className={classes.FirstContainer}>
        <div style={{ maxWidth: "580px", maxHeight: "445px" }}>
          <Image src="/LandingPage/teaching.png" alt="teaching" />
        </div>

        <div style={{ textAlign: smallScreen ? "center" : "justify" }}>
          <div
            style={{
              padding: xsScreen ? "0px 30px" : "0px"
            }}
          >
            <Title>
              Great site
              <br /> for conferences.
            </Title>
          </div>
          <div
            style={{
              marginTop: "30px",
              padding: xsScreen ? "0px 30px" : "0px"
            }}
          >
            <BodyText size="sm" color="#757575">
              Find top-notch conference info here.
            </BodyText>
          </div>
          <MediaQuery
            smallerThan="xl"
            styles={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Button
              className={classes.ButtonStyle}
              onClick={() => {
                location.href = "/conference/Lobby";
              }}
            >
              <Text
                size={"xs"}
                color="#2B788B"
                style={{
                  fontWeight: "700"
                }}
              >
                Conference now
              </Text>
            </Button>
          </MediaQuery>
        </div>
      </div>
    </MediaQuery>
  );
}
