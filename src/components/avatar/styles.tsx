import { Theme } from "@mui/material";

const styles = (theme: Theme) => ({
  bigAvatar: {
    width: 80,
    height: 80,
    fontSize: "22px",
    boxShadow: theme.customColors.boxShadow.light,
    mb: 0,
  },
  smallAvatar: {
    width: 40,
    height: 40,
    boxShadow: theme.customColors.boxShadow.light,
    fontSize: "14px",
  },
  mediumAvatar: {
    width: 55,
    height: 55,
    fontSize: "16px",
    boxShadow: theme.customColors.boxShadow.light,
  },
});

export default styles;
