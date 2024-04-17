import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  FirstContainer: {
    display: "flex",
    width: "100%",
    height: "740px",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  ButtonStyle: {
    display: "flex",
    width: "165",
    height: "44",
    background: "#C3DCE3",
    borderRadius: "100px",
    marginTop: "32px",
    marginLeft: "0px",
    marginRight: "auto",

    "&:hover": {
      backgroundColor: "#8BC7D8"
    }
  }
}));
