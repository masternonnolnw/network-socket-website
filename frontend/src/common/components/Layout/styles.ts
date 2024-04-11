import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  LayoutContainer: {
    display: "flex",
    flexDirection: "column"
  },
  ContentContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflowX: "hidden",
    paddingTop: "88px"
  }
}));
