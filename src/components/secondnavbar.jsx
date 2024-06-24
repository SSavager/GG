import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import QRCodeModal from "../sub_compo/QRCodeModal";
import PurchaseOrderModal from "../sub_compo/PurchaseOrderModal";
import CropFreeTwoToneIcon from '@mui/icons-material/CropFreeTwoTone';
import excel from "../assets/excel.svg";
import print from "../assets/print.svg";

export default function Secondnavbar() {
  const [qrOpen, setQrOpen] = React.useState(false);
  const [poOpen, setPoOpen] = React.useState(false);

  const handleQrOpen = () => {
    setQrOpen(true);
  };

  const handleQrClose = () => {
    setQrOpen(false);
  };

  const handlePoOpen = () => {
    setPoOpen(true);
  };

  const handlePoClose = () => {
    setPoOpen(false);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "rgb(6,44,48)", mt: 8 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              font: 'calibri',
              fontSize: '24px',
              fontWeight: '700',
              lineHeight: '29.3px',
              paddingLeft: '18px',
            }}
          >
            Purchase (PU)
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                width: "115px",
                height: "35px",
                backgroundColor: "rgb(198,169,105)",
                color: "white",
                "&:hover": { backgroundColor: "gold" },
                fontFamily: "Calibri",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "19.53px",
                textAlign: "left",
                textTransform: "none",
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              Day book
            </Button>

            <Button
              variant="contained"
              sx={{
                width: "84px",
                height: "35px",
                backgroundColor: "rgb(198,169,105)",
                color: "white",
                "&:hover": { backgroundColor: "gold" },
                fontFamily: "Calibri",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "19.53px",
                textAlign: "left",
                textTransform: "none",
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
              onClick={handlePoOpen}
            >
              PO
            </Button>

            <Button
              variant="contained"
              sx={{
                width: "139px",
                height: "35px",
                backgroundColor: "rgb(198,169,105)",
                color: "white",
                "&:hover": { backgroundColor: "gold" },
                fontFamily: "Calibri",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "19.53px",
                textAlign: "left",
                textTransform: "none",
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              Memo pending
            </Button>

            <IconButton
              color="inherit"
              sx={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              <Box
                component="img"
                src={print}
                alt="Print"
                sx={{
                  width: '24px',
                  height: '24px',
                  filter: 'invert(100%) sepia(100%) saturate(0%) brightness(2)',
                  "&:hover": { filter: "invert(100%) sepia(100%) saturate(100%) hue-rotate(180deg) brightness(2)" }
                }}
              />
            </IconButton>

            <IconButton
              color="inherit"
              sx={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              <Box
                component="img"
                src={excel}
                alt="Excel"
                sx={{
                  width: '24px',
                  height: '24px',
                  filter: 'invert(100%) sepia(100%) saturate(0%) brightness(2)',
                  "&:hover": { filter: "invert(100%) sepia(100%) saturate(100%) hue-rotate(180deg) brightness(2)" }
                }}
              />
            </IconButton>

            <IconButton
              color="inherit"
              sx={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                "&:hover": { color: "rgb(30,144,255)" },
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
              onClick={handleQrOpen}
            >
              <CropFreeTwoToneIcon sx={{ fontSize: '24px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <QRCodeModal
        open={qrOpen}
        onClose={handleQrClose}
        qrValue="https://example.com"
      />

      <PurchaseOrderModal
        open={poOpen}
        onClose={handlePoClose}
      />
    </>
  );
}
