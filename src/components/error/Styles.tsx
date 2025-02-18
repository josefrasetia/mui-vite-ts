// styles.ts
import { Theme } from "@mui/material";

const getStyles = (theme: Theme) => ({
  errorWrap: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: "50%",
    width: 500,
    height: 500,
    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 300,
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    margin: `${theme.spacing(3)} auto`,
    "& h5": {
      [theme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
      },
    },
  },
  title: {
    color: theme.palette.primary.main,
    textShadow: `10px 6px 50px ${theme.palette.primary.main}`,
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
      marginBottom: theme.spacing(2),
    },
  },
  button: {
    marginTop: "24px",
  },
});

export default getStyles;
