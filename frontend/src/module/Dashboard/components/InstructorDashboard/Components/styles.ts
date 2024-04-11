import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  ButtonStyle: {
    display: "flex",
    width: "165",
    height: "44",
    background: "#8BC7D8",
    borderRadius: "100px",
    marginRight: "20px",
    marginTop: "19px",
    "&:hover": {
      backgroundColor: "#C3DCE3"
    }
  }
}));
