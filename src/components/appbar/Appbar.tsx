import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Grid2 as Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { InitialAvatar, IonIcon } from "@components";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummy } from "@app/api/dummy";

interface AppBarContentProps {
  open: boolean;
  isMobile: boolean;
  drawerWidth: number;
  toggleDrawer: () => void;
}
const AppBarContent = (props: AppBarContentProps) => {
  const { open, isMobile, drawerWidth, toggleDrawer } = props;
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (url: string = "") => {
    setAnchorEl(null);
    if (url) {
      navigate(url);
    }
  };

  const logout = () => {
    setAnchorEl(null);
    navigate("/login");
  };

  const menuId = "account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={() => handleMenuClose()}
    >
      <MenuItem onClick={() => handleMenuClose("/account/profile")}>
        Profile
      </MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.primary.main,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(isMobile && {
          pl: 1,
        }),
        ...(open &&
          !isMobile && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{
            mr: 2,
            color: theme.palette.primary.main,
            borderRadius: "50%",
              boxShadow: theme.shadows[5],
              position: open && !isMobile ? "absolute" : "relative",
              left: open && !isMobile ? -10 : 0,
              backgroundColor: theme.palette.background.paper,
              zIndex: 1,
              "&:hover": {
                backgroundColor: 'rgb(235, 235, 235)',
              },
          }}
        >
          <IonIcon name="menu-outline" size="medium" />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          sx={{ flexGrow: 1, color: "#fff", ml: 2, fontWeight: 'bold'}}
        >
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          <IconButton aria-label="show 17 new notifications" sx={{ color: "#fff" }}>
            <Badge badgeContent={17} color="error">
              <IonIcon name="notifications-outline" size="medium" />
            </Badge>
          </IconButton>
          <InitialAvatar name={dummy.user.name} onClick={(event: MouseEvent<HTMLElement>) => handleProfileMenuOpen(event)} />
          {renderMenu}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarContent;
