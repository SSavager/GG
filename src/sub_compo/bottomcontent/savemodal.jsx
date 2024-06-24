import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const SaveDialog = ({ open, onClose, onSave }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="save-dialog-title"
      PaperProps={{
        style: { width: '590px', height: '361px' },
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="flex-end">
          <IconButton 
            onClick={onClose} 
            sx={{
              '&:focus': {
                outline: 'none', // ปิดการแสดงขอบเขตเมื่อโฟกัส
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <HelpOutlineIcon style={{ fontSize: '112px', color: '#007bff' }} />
          <Typography variant="h6" gutterBottom style={{ fontSize: '24px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Calibri', lineHeight: '29px' }}>
            Would you like to save?
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center', marginBottom: '16px' }}>
        <Button 
          onClick={onClose} 
          variant="outlined" 
          sx={{
            width: '100px',
            height: '44px',
            marginRight: '16px',
            color: '#000', // สีเริ่มต้นของปุ่ม
            backgroundColor: 'transparent', // สีพื้นหลังเริ่มต้น
            border: '2px solid rgba(230, 230, 230, 1)', // สีขอบเริ่มต้น
            '&:hover': {
              backgroundColor: '#ff0000', // สีพื้นหลังสีแดงเมื่อ hover
              borderColor: '#ff0000', // สีขอบสีแดงเมื่อ hover
              color: '#fff', // สีตัวอักษรสีขาวเมื่อ hover
            },
            '&:focus': {
              outline: 'none', // ปิดการแสดงขอบเขตเมื่อโฟกัส
            },
          }}
        >
          No
        </Button>
        <Button 
          onClick={onSave} 
          variant="contained" 
          sx={{
            width: '100px',
            height: '44px',
            backgroundColor: '#00695c',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#00574b', // สีพื้นหลังเมื่อ hover
            },
            '&:focus': {
              outline: 'none', // ปิดการแสดงขอบเขตเมื่อโฟกัส
            },
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDialog;
