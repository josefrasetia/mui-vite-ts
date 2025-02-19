import ErrorWrap from "@app/components/error/ErrorWrap";
import { Box, useTheme } from "@mui/material";

const Error404 = (props: { type?: string }) => {
  const { type = "" } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: type == "page" ? "100vh" : "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...(type == "page" && {
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.primary.dark} 100%)`,
        }),
      }}
    >
      <ErrorWrap title="404" desc="Page not found" />
    </Box>
  );
};

export default Error404;
