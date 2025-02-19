import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Chip,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useTheme,
} from "@mui/material";
import dataMenu from "../../api/menu";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import IonIcon from "../icon/IonIcon";

const MainMenu = (props: {
  isMobile: any;
  toggleDrawer: any;
  open: boolean;
  hover: boolean;
}) => {
  const { isMobile, toggleDrawer, open, hover } = props;
  const location = useLocation();
  let [openCollapse, setOpenCollapse] = useState<string[]>([]);
  const [previousExpandedCollapse, setPreviousExpandedCollapse] = useState<
    string[]
  >([]);
  const theme = useTheme();

  const handleTransition = () => {
    if (isMobile) {
      toggleDrawer();
    }
  };

  const openSubMenu = (key: any, keyParent: any) => {
    const menuList = openCollapse;

    if (menuList.indexOf(key) > -1) {
      const newMenuList = openCollapse.filter((obj) => obj !== key);
      setOpenCollapse(newMenuList);
    } else {
      setOpenCollapse([...openCollapse, key]);
    }
  };

  const setNavCollapse = (arr: any[], curRoute: string) => {
    let headMenu = ["notfound"];

    const findParent = (menuArr: any[], route: string, level = 0) => {
      // Jika menuArr adalah array
      if (Array.isArray(menuArr)) {
        for (let index = 0; index < menuArr.length; index++) {
          const item = menuArr[index];
          headMenu[level] = item.key;

          if (item.link === route) {
            return true;
          }

          if (item.child) {
            const found = findParent(item.child, route, level + 1);
            if (found) {
              return true;
            }
          }
        }
      }

      return false;
    };

    const found = findParent(arr, curRoute);
    if (!found) {
      headMenu = ["notfound"];
    }

    return headMenu;
  };

  // handle open collapse menu
  useEffect(() => {
    if (!isMobile) {
      if (!open) {
        if (hover) {
          setOpenCollapse(previousExpandedCollapse);
        } else {
          setPreviousExpandedCollapse(openCollapse);
          setOpenCollapse([]);
        }
      } else if (open && previousExpandedCollapse.length > 0) {
        setOpenCollapse(previousExpandedCollapse);
        setPreviousExpandedCollapse([]);
      }
    }
  }, [open, hover]);

  // set open collapse menu when route change and refresh
  useEffect(() => {
    const openCollapse = setNavCollapse(dataMenu, location.pathname);
    if (!open && !hover) {
      setOpenCollapse([]);
      setPreviousExpandedCollapse(openCollapse);
    } else {
      setOpenCollapse(openCollapse);
    }
  }, [location.pathname]);

  const getMenus = (menuArray: any[], paddingLevel: number) =>
    menuArray.map((item: any, index: number) => {
      if (item.child || item.linkParent) {
        return (
          <div key={index.toString()}>
            <ListItemButton
              key={item.name}
              sx={{
                pl:
                  paddingLevel === 0
                    ? openCollapse.indexOf(item.key) > -1
                      ? 3 - 0.5
                      : 3
                    : paddingLevel,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                ...(openCollapse.indexOf(item.key) > -1 && {
                  borderLeft: "4px solid",
                  borderColor: theme.palette.primary.main,
                }),
                ...(item.linkParent == document.location.pathname && {
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.dark,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                  },
                }),
              }}
              to={item.linkParent ? item.linkParent : null}
              component={item.linkParent ? NavLink : "div"}
              onClick={() =>
                !item.linkParent
                  ? openSubMenu(item.key, item.keyParent)
                  : handleTransition()
              }
              selected={location.pathname === item.link}
            >
              {item.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: theme.spacing(4),
                    fontSize: 20,
                    color:
                      openCollapse.indexOf(item.key) > -1 ||
                      document.location.pathname === item.linkParent
                        ? theme.palette.primary.main
                        : "default",
                  }}
                >
                  <IonIcon name={item.icon}></IonIcon>
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.name}
                sx={{
                  color:
                    openCollapse.indexOf(item.key) > -1
                      ? theme.palette.primary.main
                      : "default",
                }}
              />
              {!item.linkParent && (
                <span>
                  {openCollapse.indexOf(item.key) > -1 ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </span>
              )}
            </ListItemButton>
            {!item.linkParent && (
              <Collapse
                in={openCollapse.indexOf(item.key) > -1}
                timeout="auto"
                unmountOnExit
              >
                <List dense={true} component="nav" sx={{ p: 0 }}>
                  {getMenus(
                    item.child,
                    paddingLevel == 0 ? paddingLevel + 5 : paddingLevel + 2.5
                  )}
                </List>
              </Collapse>
            )}
          </div>
        );
      }
      if (item.title) {
        return (
          <ListSubheader
            disableSticky
            key={index.toString()}
            component="div"
            sx={{
              pl: paddingLevel,
              fontSize: "12px",
              fontWeight: "bold",
              color: theme.palette.secondary.main,
              lineHeight: "30px",
              mt: index > 0 ? 2 : 0,
            }}
          >
            {item.name}
          </ListSubheader>
        );
      }
      return (
        <ListItemButton
          key={index.toString()}
          sx={{
            pl: 0,
            ...(openCollapse.indexOf(item.key) > -1 && {
              color: theme.palette.primary.dark,
              backgroundColor: theme.palette.primary.light,
              "&:hover": {
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.primary.light,
              },
            }),
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
          }}
          component={NavLink}
          to={item.link}
          onClick={handleTransition}
        >
          <Box
            sx={{
              flex: 1,
              pl: paddingLevel,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItemText primary={item.name} />
            {item.badge && <Chip color="primary" label={item.badge} />}
          </Box>
        </ListItemButton>
      );
    });

  return <List dense={true}>{getMenus(dataMenu, 0)}</List>;
};

export default MainMenu;
