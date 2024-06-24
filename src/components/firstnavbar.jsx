import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import engflag from "../assets/engflag.svg";

export default function ButtonAppBar() {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "1864px" }}>
        <AppBar sx={{ backgroundColor: "rgb(5, 89, 91)" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, paddingLeft: "60px", fontSize: '16px' }}
            >
              help
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1, // เพิ่มช่องว่างระหว่างองค์ประกอบ
              }}
            >
              {/* รูปภาพ */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={engflag}
                  alt="Your Image"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
              </Box>

              {/* ปุ่มกระดิ่ง */}
              <IconButton
                color="inherit"
                sx={{
                  width: '40px',
                  height: '40px',
                  "&:hover": {
                    color: "blue",
                  },
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
              >
                <NotificationsNoneIcon sx={{ fontSize: "24px" }} />
              </IconButton>

              {/* ปุ่ม Super Admin */}
              <Button
                color="inherit"
                startIcon={
                  <AccountCircleRoundedIcon sx={{ fontSize: "24px", width: '24px', height: '24px' }} />
                }
                sx={{
                  fontSize: "16px",
                  textTransform: "none",
                  fontFamily: 'Calibri',
                  fontWeight: '700',
                  lineHeight: '19.53px',
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
              >
                Super Admin
              </Button>

              {/* ปุ่มปิด */}
              <Box sx={{ display: "flex", alignItems: "center", height: '100%' }}>
                <IconButton
                  color="inherit"
                  sx={{
                    width: '40px',
                    height: '40px',
                    "&:hover": {
                      color: "red",
                    },
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  <PowerSettingsNewIcon sx={{ fontSize: "24px" }} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
