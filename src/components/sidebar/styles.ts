import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  profile: {
    height: 120,
    width: "100%",
    display: "flex",
    fontSize: 14,
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    margin: `${theme.spacing(2)} 0`,
    justifyContent: "center",
    "& h4": {
      fontSize: 16,
      mt: 1.5,
      mb: 0,
      textAlign: "center",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      width: 110,
    },
    "& small": {
      mb: 1,
    },
  },
  detailProfile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default styles;
