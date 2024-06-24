// QRCodeModal.jsx
import React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import qrcodeimage from '../assets/qrcodeimage.png';

export default function QRCodeModal({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth={true}
      sx={{
        '& .MuiDialog-paper': {
          width: '500px',
          height: '599px',
          padding: '20px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <Box sx={{ position: 'relative', width: '100%' }}>
        {/* ปุ่มปิด */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '16px' }}>
        <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              '&:hover': {
                color: 'red', // เปลี่ยนสีเมื่อ hover
                background:'none'
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      
      {/* ส่วนหัวข้อความ */}
      <Box sx={{ textAlign: 'center', marginTop: '40px',width:'242px',height:'56' }}>
        <Typography variant="h6" sx={{ color: 'rgb(16,0,46)', marginBottom: '8px',font:'Calibri',fontWeight:'700',fontSize:'18px',lineHeight:'21.97px' }}>
          Scan QR Code
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'rgb(16,0,46)', fontSize: '14px',font:'Calibri',fontWeight:'400',fontSize:'14px',lineHeight:'17.09px'}}>
          Hold your device over a QR Code to scan it
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'rgb(16,0,46)', fontSize: '14px' }}>
          Tap the pop-up notification
        </Typography>
      </Box>

      {/* ส่วนรูปภาพ QR Code */}
      <Box
        sx={{
          position: 'relative',
          width: '300px',
          height: '300px',
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '226px',
            height: '226px',
            position: 'relative',
            '&::before, &::after, & .corner': {
              content: '""',
              position: 'absolute',
              width: '20px',
              height: '20px',
              border: '2px solid black',
            },
            '&::before': {
              top: '-10px',
              left: '-10px',
              borderBottom: 'none',
              borderRight: 'none',
            },
            '&::after': {
              bottom: '-10px',
              right: '-10px',
              borderTop: 'none',
              borderLeft: 'none',
            },
            '& .corner-top-right': {
              top: '-10px',
              right: '-10px',
              borderBottom: 'none',
              borderLeft: 'none',
            },
            '& .corner-bottom-left': {
              bottom: '-10px',
              left: '-10px',
              borderTop: 'none',
              borderRight: 'none',
            },
          }}
        >
          <img
            src={qrcodeimage}
            alt="QR Code"
            style={{
              width: '226px',
              height: '226px',
              top:'132px',
              left:'37px'
            }}
          />
          <Box className="corner corner-top-right" />
          <Box className="corner corner-bottom-left" />
        </Box>
      </Box>

      {/* ปุ่มเพิ่มเติม */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button
          sx={{
            width: '220px',
            height: '44px',
            padding: '12px 40px',
            borderRadius: '50px',
            border: '2px solid rgba(230, 230, 230, 1)',
            opacity: 1,
            backgroundColor: 'rgba(0,0,0,0.1)',
            ':hover': {
              backgroundColor: 'rgba(0,0,0,0.2)',
            },
            fontFamily: 'Calibri',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '24.41px',
            textAlign: 'left',
            color: 'rgb(16,0,46)',
          }}
        >
          SCAN
        </Button>
      </Box>
    </Dialog>
  );
}
