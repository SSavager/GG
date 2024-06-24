import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import SetupIcon from "@mui/icons-material/Settings";
import logo from "../assets/logo.png";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const drawerWidth = 240;
const secondaryDrawerWidth = 240;

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
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  position: "relative",
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

const SecondaryDrawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: secondaryDrawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      width: secondaryDrawerWidth,
      position: "absolute",
      left: drawerWidth,
      backgroundColor: theme.palette.grey[200],
      overflow: "hidden",
    },
  }),

  ...(!open && {
    display: "none",
  }),
}));

export default function Sidebar({ onPinChange }) { // Add onPinChange prop
  const [open, setOpen] = React.useState(false);
  const [companyOpen, setCompanyOpen] = React.useState(false);
  const [accountOpen, setAccountOpen] = React.useState(false);
  const [stonemasterOpen, setStonemasterOpen] = React.useState(false);
  const [purchaseorderOpen, setPurchaseorderOpen] = React.useState(false);
  const [memoOpen, setMemoOpen] = React.useState(false);
  const [inventoryOpen, setInventoryOpen] = React.useState(false);
  const [financeOpen, setFinanceOpen] = React.useState(false);
  const [otherOpen, setOtherOpen] = React.useState(false);

  const [keepMainDrawerOpen, setKeepMainDrawerOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");
  const [iconPinned, setIconPinned] = React.useState(false);

  const companyDrawerRef = React.useRef(null);
  const accountDrawerRef = React.useRef(null);
  const stonemasterDrawerRef = React.useRef(null);
  const purchaseorderDrawerRef = React.useRef(null);
  const memoDrawerRef = React.useRef(null);
  const inventoryDrawerRef = React.useRef(null);
  const financeDrawerRef = React.useRef(null);
  const otherDrawerRef = React.useRef(null);

  const handleDrawerOpen = () => {
    if (!keepMainDrawerOpen) {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    if (!keepMainDrawerOpen) {
      setOpen(false);
    }
  };

  const handleCompanyClick = () => {
    setCompanyOpen(!companyOpen);
    setMemoOpen(false);
    setInventoryOpen(false);
    setFinanceOpen(false);
    setOtherOpen(false);
    setPurchaseorderOpen(false);
    setAccountOpen(false);
    setStonemasterOpen(false);
    setKeepMainDrawerOpen(!companyOpen);
    setSelectedItem("Company");
  };

  const handleAccountClick = () => {
    setAccountOpen(!accountOpen);
    setMemoOpen(false);
    setInventoryOpen(false);
    setFinanceOpen(false);
    setOtherOpen(false);
    setPurchaseorderOpen(false);
    setCompanyOpen(false);
    setStonemasterOpen(false);
    setKeepMainDrawerOpen(!accountOpen);
    setSelectedItem("Account");
  };

  const handleStonemasterClick = () => {
    setStonemasterOpen(!stonemasterOpen);
    setMemoOpen(false);
    setInventoryOpen(false);
    setFinanceOpen(false);
    setOtherOpen(false);
    setPurchaseorderOpen(false);
    setCompanyOpen(false);
    setAccountOpen(false);
    setKeepMainDrawerOpen(!stonemasterOpen);
    setSelectedItem("Stone Master");
  };

  const handlePurchaseorderClick = () => {
    setPurchaseorderOpen(!purchaseorderOpen);
    setMemoOpen(false);
    setInventoryOpen(false);
    setFinanceOpen(false);
    setOtherOpen(false);
    setStonemasterOpen(false);
    setCompanyOpen(false);
    setAccountOpen(false);
    setKeepMainDrawerOpen(!purchaseorderOpen);
    setSelectedItem("Purchase Order");
  };

  const handleMemoClick = () => {
    setMemoOpen(!memoOpen);
    setStonemasterOpen(false);
    setInventoryOpen(false);
    setFinanceOpen(false);
    setOtherOpen(false);
    setPurchaseorderOpen(false);
    setCompanyOpen(false);
    setAccountOpen(false);
    setKeepMainDrawerOpen(!memoOpen);
    setSelectedItem("Memo");
  };

  const handleInventoryClick = () => {
    setInventoryOpen(!inventoryOpen);
    setStonemasterOpen(false);
    setMemoOpen(false);
    setFinanceOpen(false);
    setOtherOpen(false);
    setPurchaseorderOpen(false);
    setCompanyOpen(false);
    setAccountOpen(false);
    setKeepMainDrawerOpen(!inventoryOpen);
    setSelectedItem("Inventory");
  };

  const handleFinanceClick = () => {
    setFinanceOpen(!financeOpen);
    setStonemasterOpen(false);
    setMemoOpen(false);
    setInventoryOpen(false);
    setOtherOpen(false);
    setPurchaseorderOpen(false);
    setCompanyOpen(false);
    setAccountOpen(false);
    setKeepMainDrawerOpen(!financeOpen);
    setSelectedItem("Finance");
  };

  const handleOtherClick = () => {
    setOtherOpen(!otherOpen);
    setStonemasterOpen(false);
    setMemoOpen(false);
    setInventoryOpen(false);
    setFinanceOpen(false);
    setPurchaseorderOpen(false);
    setCompanyOpen(false);
    setAccountOpen(false);
    setKeepMainDrawerOpen(!otherOpen);
    setSelectedItem("Other");
  };

  const handleSecondaryDrawerMouseLeave = () => {
    if (!keepMainDrawerOpen) {
      setCompanyOpen(false);
      setAccountOpen(false);
      setStonemasterOpen(false);
      setMemoOpen(false);
      setInventoryOpen(false);
      setFinanceOpen(false);
      setOtherOpen(false);
      setPurchaseorderOpen(false);
      setOpen(false);
    }
  };

  const handleToggleKeepMainDrawerOpen = () => {
    const newKeepMainDrawerOpen = !keepMainDrawerOpen;
    setKeepMainDrawerOpen(newKeepMainDrawerOpen);
    setIconPinned(newKeepMainDrawerOpen);
    onPinChange(newKeepMainDrawerOpen); // Notify parent about pin status change
  };

  const iconMapping = {
    Home: <HomeOutlinedIcon />,
    Dashboard: <InsertChartOutlinedTwoToneIcon />,
    Company: <HomeWorkOutlinedIcon />,
    User: <HowToRegOutlinedIcon />,
    Account: <AccountBoxOutlinedIcon />,
    "Stone Master": <StarOutlineOutlinedIcon />,
    Quotation: <DescriptionOutlinedIcon />,
    Reserve: <RequestQuoteOutlinedIcon />,
    "Purchase Order": <ArticleOutlinedIcon />,
    Memo: <DriveFileRenameOutlineOutlinedIcon />,
    Inventory: <Inventory2OutlinedIcon />,
    Sale: <AddShoppingCartOutlinedIcon />,
    Finance: <PaidOutlinedIcon />,
    Report: <ContentPasteOutlinedIcon />,
    Other: <MoreHorizOutlinedIcon />,
    Setup: <SetupIcon />,
  };

  return (
    <Box
      sx={{ width: "56px", height: "100%", display: "flex", }}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <Drawer variant="permanent" open={open || keepMainDrawerOpen}>
        <DrawerHeader>
          {open || keepMainDrawerOpen ? (
            <IconButton
              onClick={handleToggleKeepMainDrawerOpen}
              sx={{ position: "absolute", right: 8, top: 8, transform: "rotate(70deg)" }}
            >
              {iconPinned ? (
                <PushPinIcon sx={{color: "black",transform: "rotate(290deg)"  }} />
              ) : (
                <PushPinOutlinedIcon />
              )}
            </IconButton>
          ) : null}
        </DrawerHeader>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: open || keepMainDrawerOpen ? "82px" : "42px",
            transition: "height 0.3s",
          }}
        >
          <img
            src={logo}
            alt="Drawer Image"
            style={{
              width: open || keepMainDrawerOpen ? "80px" : "40px",
              height: open || keepMainDrawerOpen ? "82px" : "42px",
              marginLeft: open || keepMainDrawerOpen ? "71px" : "auto",
              marginRight: "auto",
              paddingBottom: "10px",
              marginTop: open || keepMainDrawerOpen ? "-50px" : "-40px",
              transition:
                "width 0.3s, height 0.3s, margin-left 0.3s, margin-top 0.3s",
            }}
          />
        </Box>
        <Divider
          sx={{
            width: "50%",
            alignSelf: "center",
            bgcolor: "white",
            height: "3px",
          }}
        />
        <List>
          {Object.keys(iconMapping).map((text) => (
            <React.Fragment key={text}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onMouseEnter={handleDrawerOpen}
                  onMouseLeave={handleDrawerClose}
                  onClick={
                    text === "Company"
                      ? handleCompanyClick
                      : text === "Account"
                      ? handleAccountClick
                      : text === "Stone Master"
                      ? handleStonemasterClick
                      : text === "Purchase Order"
                      ? handlePurchaseorderClick
                      : text === "Memo"
                      ? handleMemoClick
                      : text === "Inventory"
                      ? handleInventoryClick
                      : text === "Finance"
                      ? handleFinanceClick
                      : text === "Other"
                      ? handleOtherClick
                      : () => setSelectedItem(text)
                  }
                  sx={{
                    minHeight: 36,
                    justifyContent:
                      open || keepMainDrawerOpen ? "initial" : "center",
                    px: 1.5,
                    borderRight: "2px solid transparent",
                    "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root":
                      {
                        color: "rgb(64,149,241)",
                      },
                    "&:hover": {
                      borderRight: "2px solid rgb(64,149,241)",
                    },
                    ...(open
                      ? {}
                      : {
                          mr: "16px",
                          transition: "margin-right 0.3s ease-in-out",
                        }),
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open || keepMainDrawerOpen ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {iconMapping[text]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open || keepMainDrawerOpen ? 1 : 0,
                      fontSize: "0.875rem",
                    }}
                  />
                  {(text === "Company" ||
                    text === "Account" ||
                    text === "Stone Master" ||
                    text === "Purchase Order" ||
                    text === "Memo" ||
                    text === "Inventory" ||
                    text === "Finance" ||
                    text === "Other") &&
                  (open || keepMainDrawerOpen) ? (
                    text === "Company" ? (
                      companyOpen ? (
                        <ChevronLeftSharpIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )
                    ) : text === "Account" ? (
                      accountOpen ? (
                        <ChevronLeftSharpIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )
                    ) : text === "Stone Master" ? (
                      stonemasterOpen ? (
                        <ChevronLeftSharpIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )
                    ) : text === "Purchase Order" ? (
                      purchaseorderOpen ? (
                        <ChevronLeftSharpIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )
                    ) : text === "Memo" ? (
                      memoOpen ? (
                        <ChevronLeftSharpIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )
                    ) : text === "Inventory" ? (
                      inventoryOpen ? (
                        <ChevronLeftSharpIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )
                    ) : text === "Finance" ? (
                      financeOpen ? (
                        <ChevronLeftSharpIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )
                    ) : text === "Other" ? (
                      otherOpen ? (
                        <ChevronLeftSharpIcon />
                      ) : (
                        <ChevronRightSharpIcon />
                      )
                    ) : null
                  ) : null}
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Divider
          sx={{
            width: "50%",
            alignSelf: "center",
            bgcolor: "white",
            height: "3px",
          }}
        />
      </Drawer>

      <SecondaryDrawer
        variant="permanent"
        open={companyOpen}
        ref={companyDrawerRef}
        onMouseLeave={handleSecondaryDrawerMouseLeave}
      >
        <DrawerHeader />
        <Typography
          variant="h5"
          component="div"
          fontSize="18px"
          fontWeight="bold"
          sx={{ position: "relative", top: "-20px", marginLeft: "10px" }}
        >
          Company
        </Typography>
        <Divider sx={{ bgcolor: "white", height: "3px" }} />
        <Box>
          <Typography
            variant="h4"
            component="div"
            fontSize="16px"
            sx={{ position: "relative", marginLeft: "10px", marginTop: "10px" }}
          >
            Company
          </Typography>
        </Box>
        <List sx={{ mt: -1, pl: 5, listStyleType: "disc" }}>
          {selectedItem === "Company" &&
            ["Company Profile", "Bank"].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "list-item",
                  "&:hover": { color: "rgb(64,149,241)" },
                  padding: "0 16px",
                  width: "calc(100% - 32px)",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "initial",
                    px: 0.5,
                    ml: -1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root": {
                      color: "rgb(64,149,241)",
                    },
                    "& .MuiListItemIcon-root": {
                      mr: "-70px", // ลดระยะห่างระหว่างไอคอนและข้อความ
                    },
                  }}
                >
                  <ListItemIcon>
                    {iconMapping[text]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ fontSize: "0.875rem", mt: "-6px" }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </SecondaryDrawer>

      <SecondaryDrawer
        variant="permanent"
        open={accountOpen}
        ref={accountDrawerRef}
        onMouseLeave={handleSecondaryDrawerMouseLeave}
      >
        <DrawerHeader />
        <Typography
          variant="h5"
          component="div"
          fontSize="18px"
          fontWeight="bold"
          sx={{ position: "relative", top: "-20px", marginLeft: "10px" }}
        >
          Account
        </Typography>
        <Divider sx={{ bgcolor: "white", height: "3px" }} />
        <Box>
          <Typography
            variant="h4"
            component="div"
            fontSize="16px"
            sx={{ position: "relative", marginLeft: "10px", marginTop: "10px" }}
          >
            Account Details
          </Typography>
        </Box>
        <List sx={{ mt: -1, pl: 5, listStyleType: "disc" }}>
          {selectedItem === "Account" &&
            ["Vendor", "Customer", "Associated"].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "list-item",
                  "&:hover": { color: "rgb(64,149,241)" },
                  padding: "0 16px",
                  width: "calc(100% - 32px)",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "initial",
                    px: 0.5,
                    ml: -1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root": {
                      color: "rgb(64,149,241)",
                    },
                    "& .MuiListItemIcon-root": {
                      mr: "-70px", // ลดระยะห่างระหว่างไอคอนและข้อความ
                    },
                  }}
                >
                  <ListItemIcon>
                    {iconMapping[text]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ fontSize: "0.875rem", mt: "-6px" }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </SecondaryDrawer>

      <SecondaryDrawer
        variant="permanent"
        open={stonemasterOpen}
        ref={stonemasterDrawerRef}
        onMouseLeave={handleSecondaryDrawerMouseLeave}
      >
        <DrawerHeader />
        <Typography
          variant="h5"
          component="div"
          fontSize="18px"
          fontWeight="bold"
          sx={{ position: "relative", top: "-20px", marginLeft: "10px" }}
        >
          Stone Master
        </Typography>
        <Divider sx={{ bgcolor: "white", height: "3px" }} />
        <Box>
          <Typography
            variant="h4"
            component="div"
            fontSize="16px"
            sx={{ position: "relative", marginLeft: "10px", marginTop: "10px" }}
          >
            Stone Master
          </Typography>
        </Box>
        <List sx={{ mt: -1, pl: 5, listStyleType: "disc" }}>
          {selectedItem === "Stone Master" &&
            [
              "Stone Group",
              "Stone",
              "Shape",
              "Size",
              "Color",
              "Cutting",
              "Quality",
              "Clarity",
              "Certificate Type",
              "Labour Type",
            ].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "list-item",
                  "&:hover": { color: "rgb(64,149,241)" },
                  padding: "0 16px",
                  width: "calc(100% - 32px)",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "initial",
                    px: 0.5,
                    ml: -1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root": {
                      color: "rgb(64,149,241)",
                    },
                    "& .MuiListItemIcon-root": {
                      mr: "-70px", // ลดระยะห่างระหว่างไอคอนและข้อความ
                    },
                  }}
                >
                  <ListItemIcon>
                    {iconMapping[text]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ fontSize: "0.875rem", mt: "-6px" }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </SecondaryDrawer>

      <SecondaryDrawer
        variant="permanent"
        open={purchaseorderOpen}
        ref={purchaseorderDrawerRef}
        onMouseLeave={handleSecondaryDrawerMouseLeave}
      >
        <DrawerHeader />
        <Typography
          variant="h5"
          component="div"
          fontSize="18px"
          fontWeight="bold"
          sx={{ position: "relative", top: "-20px", marginLeft: "10px" }}
        >
          Purchase Order
        </Typography>
        <Divider sx={{ bgcolor: "white", height: "3px" }} />
        <Box>
          <Typography
            variant="h4"
            component="div"
            fontSize="16px"
            sx={{ position: "relative", marginLeft: "10px", marginTop: "10px" }}
          >
            Purchase Order
          </Typography>
        </Box>
        <List sx={{ mt: -1, pl: 5, listStyleType: "disc" }}>
          {selectedItem === "Purchase Order" &&
            ["Purchase Order (PO)", "Purchase (PU)"].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "list-item",
                  "&:hover": { color: "rgb(64,149,241)" },
                  padding: "0 16px",
                  width: "calc(100% - 32px)",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "initial",
                    px: 0.5,
                    ml: -1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root": {
                      color: "rgb(64,149,241)",
                    },
                    "& .MuiListItemIcon-root": {
                      mr: "-70px", // ลดระยะห่างระหว่างไอคอนและข้อความ
                    },
                  }}
                >
                  <ListItemIcon>
                    {iconMapping[text]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ fontSize: "0.875rem", mt: "-6px" }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </SecondaryDrawer>

      <SecondaryDrawer
        variant="permanent"
        open={memoOpen}
        ref={memoDrawerRef}
        onMouseLeave={handleSecondaryDrawerMouseLeave}
      >
        <DrawerHeader />
        <Typography
          variant="h5"
          component="div"
          fontSize="18px"
          fontWeight="bold"
          sx={{ position: "relative", top: "-20px", marginLeft: "10px" }}
        >
          Memo
        </Typography>
        <Divider sx={{ bgcolor: "white", height: "3px" }} />
        <Box>
          <Typography
            variant="h4"
            component="div"
            fontSize="16px"
            sx={{ position: "relative", marginLeft: "10px", marginTop: "10px" }}
          >
            Memo
          </Typography>
        </Box>
        <List sx={{ mt: -1, pl: 5, listStyleType: "disc" }}>
          {selectedItem === "Memo" &&
            ["Memo In", "Memo Return", "Memo Out", "Memo Out Return"].map(
              (text) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{
                    display: "list-item",
                    "&:hover": { color: "rgb(64,149,241)" },
                    padding: "0 16px",
                    width: "calc(100% - 32px)",
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 20,
                      justifyContent: "initial",
                      px: 0.5,
                      ml: -1,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root": {
                        color: "rgb(64,149,241)",
                      },
                      "& .MuiListItemIcon-root": {
                        mr: "-70px", // ลดระยะห่างระหว่างไอคอนและข้อความ
                      },
                    }}
                  >
                    <ListItemIcon>
                      {iconMapping[text]}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ fontSize: "0.875rem", mt: "-6px" }} />
                  </ListItemButton>
                </ListItem>
              )
            )}
        </List>
      </SecondaryDrawer>

      <SecondaryDrawer
        variant="permanent"
        open={inventoryOpen}
        ref={inventoryDrawerRef}
        onMouseLeave={handleSecondaryDrawerMouseLeave}
      >
        <DrawerHeader />
        <Typography
          variant="h5"
          component="div"
          fontSize="18px"
          fontWeight="bold"
          sx={{ position: "relative", top: "-20px", marginLeft: "10px" }}
        >
          Inventory
        </Typography>
        <Divider sx={{ bgcolor: "white", height: "3px" }} />
        <Box>
          <Typography
            variant="h4"
            component="div"
            fontSize="16px"
            sx={{ position: "relative", marginLeft: "10px", marginTop: "10px" }}
          >
            Inventory
          </Typography>
        </Box>
        <List sx={{ mt: -1, pl: 5, listStyleType: "disc" }}>
          {selectedItem === "Inventory" &&
            ["All", "Primary", "Consignment", "Load"].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "list-item",
                  "&:hover": { color: "rgb(64,149,241)" },
                  padding: "0 16px",
                  width: "calc(100% - 32px)",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "initial",
                    px: 0.5,
                    ml: -1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root": {
                      color: "rgb(64,149,241)",
                    },
                    "& .MuiListItemIcon-root": {
                      mr: "-70px", // ลดระยะห่างระหว่างไอคอนและข้อความ
                    },
                  }}
                >
                  <ListItemIcon>
                    {iconMapping[text]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ fontSize: "0.875rem", mt: "-6px" }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </SecondaryDrawer>

      <SecondaryDrawer
        variant="permanent"
        open={financeOpen}
        ref={financeDrawerRef}
        onMouseLeave={handleSecondaryDrawerMouseLeave}
      >
        <DrawerHeader />
        <Typography
          variant="h5"
          component="div"
          fontSize="18px"
          fontWeight="bold"
          sx={{ position: "relative", top: "-20px", marginLeft: "10px" }}
        >
          Finance
        </Typography>
        <Divider sx={{ bgcolor: "white", height: "3px" }} />
        <Box>
          <Typography
            variant="h4"
            component="div"
            fontSize="16px"
            sx={{ position: "relative", marginLeft: "10px", marginTop: "10px" }}
          >
            Finance
          </Typography>
        </Box>
        <List sx={{ mt: -1, pl: 5, listStyleType: "disc" }}>
          {selectedItem === "Finance" &&
            ["Outstanding Receipt", "Transaction"].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "list-item",
                  "&:hover": { color: "rgb(64,149,241)" },
                  padding: "0 16px",
                  width: "calc(100% - 32px)",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "initial",
                    px: 0.5,
                    ml: -1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                      "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root": {
                        color: "rgb(64,149,241)",
                      },
                      "& .MuiListItemIcon-root": {
                        mr: "-70px", // ลดระยะห่างระหว่างไอคอนและข้อความ
                      },
                    }}
                  >
                    <ListItemIcon>
                      {iconMapping[text]}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ fontSize: "0.875rem", mt: "-6px" }} />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </SecondaryDrawer>

      <SecondaryDrawer
        variant="permanent"
        open={otherOpen}
        ref={otherDrawerRef}
        onMouseLeave={handleSecondaryDrawerMouseLeave}
      >
        <DrawerHeader />
        <Typography
          variant="h5"
          component="div"
          fontSize="18px"
          fontWeight="bold"
          sx={{ position: "relative", top: "-20px", marginLeft: "10px" }}
        >
          Other
        </Typography>
        <Divider sx={{ bgcolor: "white", height: "3px" }} />
        <Box>
          <Typography
            variant="h4"
            component="div"
            fontSize="16px"
            sx={{ position: "relative", marginLeft: "10px", marginTop: "10px" }}
          >
            Other
          </Typography>
        </Box>
        <List sx={{ mt: -1, pl: 5, listStyleType: "disc" }}>
          {selectedItem === "Other" &&
            ["Main Location", "Sub Location", "Currency"].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "list-item",
                  "&:hover": { color: "rgb(64,149,241)" },
                  padding: "0 16px",
                  width: "calc(100% - 32px)",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 20,
                    justifyContent: "initial",
                    px: 0.5,
                    ml: -1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover .MuiListItemText-root, &:hover .MuiListItemIcon-root": {
                      color: "rgb(64,149,241)",
                    },
                    "& .MuiListItemIcon-root": {
                      mr: "-70px", // ลดระยะห่างระหว่างไอคอนและข้อความ
                    },
                  }}
                >
                  <ListItemIcon>
                    {iconMapping[text]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ fontSize: "0.875rem", mt: "-6px" }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </SecondaryDrawer>
    </Box>
  );
}
