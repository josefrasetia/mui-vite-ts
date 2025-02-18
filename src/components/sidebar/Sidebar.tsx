import React, { useState } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MainMenu from "./MainMenu";
import { NavLink } from "react-router-dom";
import { dummy } from "@app/api/dummy";
import styles from "./styles";
import {InitialAvatar} from "@components";

interface SidebarProps {
  open: boolean;
  isMobile: boolean;
  drawerWidth: number;
  toggleDrawer?: () => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { open, isMobile, toggleDrawer, drawerWidth } = props;
  const [hover, setHover] = useState(false);
  const theme = useTheme();
  const style = styles(theme);

  return (
    <>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            position: "fixed",
            boxSizing: "border-box",
            width: drawerWidth,
            whiteSpace: "nowrap",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            ...(!open && {
              overflowX: "hidden",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              width: theme.spacing(7),
              "&:hover": {
                width: drawerWidth,
                transition: theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              },
            }),
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
            position: "fixed",
            backgroundColor: "transparent",
            width: drawerWidth,
            zIndex: 1,
          }}
        >
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
              Admin Panel
            </Typography>
          </NavLink>
        </Toolbar>
        <Box
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
            position: "absolute",
            width: drawerWidth - 1,
            mt: 9,
            height: "calc(100% - 75px)",
          }}
        >
          {open && (
            <Box sx={style.profile}>
              <InitialAvatar name={dummy.user.name} variant="large" />
              <Box sx={style.detailProfile}>
                <h4>{dummy.user.name}</h4>
                <small>
                  {dummy.user.kodeKantor} | {dummy.user.kantor}
                </small>
              </Box>
            </Box>
          )}

          <MainMenu
            isMobile={isMobile}
            toggleDrawer={toggleDrawer}
            open={open}
            hover={hover}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
