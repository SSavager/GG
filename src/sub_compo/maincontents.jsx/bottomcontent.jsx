import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import SaveDialog from '../bottomcontent/savemodal';
import SuccessDialog from '../bottomcontent/aftersavemodal';

const BottomContent = () => {
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleOpenSaveDialog = () => {
    setSaveDialogOpen(true);
  };

  const handleCloseSaveDialog = () => {
    setSaveDialogOpen(false);
  };

  const handleOpenSuccessDialog = () => {
    setSuccessDialogOpen(true);
  };

  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
  };

  const handleSave = () => {
    console.log('Saved!');
    setSaveDialogOpen(false);
    setSuccessDialogOpen(true);
  };

  return (
    <Box
      sx={{
        width: '1844px', // ใช้ความกว้าง 100% ของคอนเทนเนอร์
        height: '80px',
        display: 'flex',
        justifyContent: 'flex-end', // ปรับให้ปุ่มอยู่ทางขวา
        alignItems: 'center',
        borderTop: '1px solid rgba(191, 191, 191, 1)',
        backgroundColor: 'white',
        position: 'fixed', // ใช้ fixed เพื่อให้ bottom content อยู่ที่ด้านล่างของหน้าจอ
        bottom: 0, // ตรึงไว้ที่ด้านล่าง
        zIndex: 1000, // ให้แน่ใจว่าอยู่ด้านบนของคอนเทนเนอร์อื่นๆ
        ml:'-75px'
      }}
    >
      <Button 
        variant="outlined" 
        sx={{ 
          marginRight: '10px', // เพิ่มระยะห่างระหว่างปุ่มและขอบ
          '&:focus': { outline: 'none' },
          '&:hover': {
            backgroundColor: '#f44336',
            borderColor: '#f44336',
            color: '#fff',
          }
        }}
        onClick={handleCloseSaveDialog}
      >
        Cancel
      </Button>
      <Button 
        variant="contained" 
        color="success"
        sx={{
          '&:focus': { outline: 'none' },
          marginRight: '65px' // เพิ่มระยะห่างระหว่างปุ่ม Save กับขอบขวา
        }}
        onClick={handleOpenSaveDialog}
      >
        Save
      </Button>

      <SaveDialog 
        open={saveDialogOpen} 
        onClose={handleCloseSaveDialog} 
        onSave={handleSave} 
      />

      <SuccessDialog 
        open={successDialogOpen} 
        onClose={handleCloseSuccessDialog} 
      />
    </Box>
  );
};

export default BottomContent;
