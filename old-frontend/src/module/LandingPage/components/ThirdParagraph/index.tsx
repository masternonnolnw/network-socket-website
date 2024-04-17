import { Image, Text, Button, Title, MediaQuery } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import BodyText from "common/components/BodyText";
import { useStyles } from "./styles";
export default function ThirdParagraph() {
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
        <div style={{ textAlign: smallScreen ? "center" : "justify" }}>
          <div
            style={{
              padding: xsScreen ? "0px 30px" : "0px"
            }}
          >
            <Title>
              Great site
              <br /> user-friendly dashboard.
            </Title>
          </div>
          <div
            style={{
              marginTop: "30px",
              padding: xsScreen ? "0px 30px" : "0px"
            }}
          >
            <BodyText size="sm" color="#757575">
              Efficiently navigate site via user-friendly dashboard.
            </BodyText>
          </div>
          <MediaQuery smallerThan="xl" styles={{ marginLeft: "auto" }}>
            <Button
              className={classes.ButtonStyle}
              onClick={() => {
                location.href = "/dashboard";
              }}
            >
              <Text size={"xs"} color="#2B788B" style={{ fontWeight: "700" }}>
                Dashboard
              </Text>
            </Button>
          </MediaQuery>
        </div>
        <div style={{ maxWidth: "580px", maxHeight: "474px" }}>
          <Image src="/LandingPage/holding-books.png" alt="holding-books" />
        </div>
      </div>
    </MediaQuery>
  );
}
