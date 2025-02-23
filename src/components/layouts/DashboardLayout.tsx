import React, { useEffect, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Sidebar, AppBarContent } from "@components";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(!isMobile);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBarContent
        open={open}
        isMobile={isMobile}
        drawerWidth={drawerWidth}
        toggleDrawer={handleDrawerToggle}
      />

      {/* Sidebar */}
      <Sidebar
        open={open}
        isMobile={isMobile}
        drawerWidth={drawerWidth}
        toggleDrawer={handleDrawerToggle}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          backgroundColor: theme.customColors.background.body,
          flexGrow: 1,
          minHeight: "100vh",
          pt: { xs: 8.5, sm: 9.5 },
          pl: !isMobile && open ? `${drawerWidth}px` : !isMobile ? "55px" : 0,
          transition: theme.transitions.create("padding", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Box maxWidth="xl" sx={{ px: 1.5, minHeight: "90vh" }}>
          {children}
        </Box>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 20px -5px rgba(0, 0, 0, 0.1)",
            width: "100%",
            py: 2,
            mt: 2,
          }}
        >
          <Box maxWidth="xl" sx={{ px: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <small>&copy; 2025 Jose Tech | All Rights Reserved</small>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
