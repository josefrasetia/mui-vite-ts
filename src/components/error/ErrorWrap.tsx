import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import getStyles from "./Styles";

interface ErrorWrapProps {
  title: string;
  desc: string;
}

const ErrorWrap = ({ title, desc }: ErrorWrapProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Box sx={styles.errorWrap}>
      <Typography sx={styles.title} variant="h1">
        {title}
      </Typography>
      <Typography variant="h5">{desc}</Typography>
      <Button
        variant="contained"
        color="primary"
        sx={styles.button}
        component={Link}
        to="/app"
      >
        Go To Dashboard
      </Button>
    </Box>
  );
};

export default ErrorWrap;
