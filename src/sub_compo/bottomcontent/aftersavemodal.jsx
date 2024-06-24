import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SuccessDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="success-dialog-title"
      PaperProps={{
        style: { width: '590px', height: '361px' },
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose} sx={{ '&:focus': { outline: 'none' } }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <CheckCircleOutlineIcon style={{ fontSize: '112px', color: 'rgba(23, 198, 83, 1)' }} />
          <Typography variant="h6" gutterBottom style={{ fontSize: '24px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Calibri', lineHeight: '29px' }}>
            Successfully!
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
