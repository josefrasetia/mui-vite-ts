import ErrorWrap from "@app/components/error/ErrorWrap";
import { Box } from "@mui/material";

const Error404 = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ErrorWrap title="404" desc="Page not found" />
    </Box>
  );
};

export default Error404;
