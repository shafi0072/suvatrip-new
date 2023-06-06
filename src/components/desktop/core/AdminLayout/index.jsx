import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import StarsIcon from "@mui/icons-material/Stars";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import { useRouter } from "next/router";
import PolicyIcon from "@mui/icons-material/Policy";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import NearbyErrorIcon from "@mui/icons-material/NearbyError";

const drawerWidth = 240;

const MainMenu = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    routes: "dashboard",
  },
  {
    name: "Personal Infos",
    icon: <AccountCircleIcon />,
    routes: "Personal Infos",
  },
  {
    name: "Rooms",
    icon: <BedOutlinedIcon />,
    routes: "Rooms",
  },
  {
    name: "Galary",
    icon: <ImageSearchIcon />,
    routes: "Galary",
  },
  {
    name: "Facelities",
    icon: <SupportAgentIcon />,
    routes: "Facelities",
  },
  {
    name: "Review",
    icon: <StarsIcon />,
    routes: "Review",
  },
  {
    name: "Calendar",
    icon: <CalendarMonthIcon />,
    routes: "Calendar",
  },
  {
    name: "Arival Info",
    icon: <FlightLandIcon />,
    routes: "Arival Info",
  },
  {
    name: "Nearby",
    icon: <NearbyErrorIcon />,
    routes: "Nearby",
  },
  {
    name: "Policy",
    icon: <PolicyIcon />,
    routes: "Policy",
  },
  {
    name: "Fetures",
    icon: <PriceCheckOutlinedIcon />,
    routes: "Fetures",
  },

  {
    name: "Settings",
    icon: <SettingsSuggestOutlinedIcon />,
    routes: "Settings",
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const index = ({ setMenu, children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const router = useRouter();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {MainMenu.map((text, index) => (
            <ListItem
              onClick={() => setMenu(text.routes)}
              key={index}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <div style={{ marginLeft: "1%", marginTop: "4%" }}>{children}</div>
    </Box>
  );
};

export default index;
