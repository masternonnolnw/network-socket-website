import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  NavBarLayout: {
    display: "flex",
    height: "88px",
    width: "100%",
    position: "fixed",
    backgroundColor: "#F6F5F4",
    flexDirection: "row",
    alignItems: "center",
    gap: "30px",
    zIndex: 5,
    boxShadow: "inset 0px -1px 0px #E0E0E0"
  }
}));
