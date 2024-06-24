import React from 'react';
import { Box, Typography, TextField, Paper, Checkbox, FormControlLabel } from '@mui/material';

const SummaryValueBox = () => {
  return (
    <Paper 
      elevation={3} 
      style={{ padding: '16px', width: '605px', height: '687px', border: '1px solid rgba(191, 191, 191, 1)' }}
    >
      <Typography
        variant="h6"
        gutterBottom
        style={{ fontSize: '21px', fontFamily: 'Calibri', color: 'rgba(5, 89, 91, 1)' }}
      >
        Summary Value
      </Typography>
      <Box pl={5} pt={1}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography
            variant="body1"
            style={{ fontSize: '16px', fontFamily: 'Calibri' }}
          >
            Product Total Amount
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: '16px', fontFamily: 'Calibri' }}
          >
            0.00 THB
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              style={{ marginRight: '8px', fontSize: '16px', fontFamily: 'Calibri' }}
            >
              Discount
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              InputProps={{
                style: {
                  height: '20px',
                  width: '50px',
                  padding: '0',
                  fontSize: '16px',
                  fontFamily: 'Calibri',
                  border: '1px solid rgba(191, 191, 191, 1)',
                },
              }}
              style={{ width: '50px', height: '20px', marginRight: '16px', border: '1px solid rgba(191, 191, 191, 1)' }}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <TextField
              variant="outlined"
              size="small"
              value="0.00"
              InputProps={{
                readOnly: true,
                style: {
                  height: '20px',
                  width: '50px',
                  padding: '0',
                  fontSize: '16px',
                  fontFamily: 'Calibri',
                  border: '1px solid rgba(191, 191, 191, 1)',
                },
              }}
              style={{ width: '50px', height: '20px', marginRight: '8px', border: '1px solid rgba(191, 191, 191, 1)' }}
            />
            <Typography
              variant="body1"
              style={{ fontSize: '16px', fontFamily: 'Calibri' }}
            >
              THB
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography
            variant="body1"
            style={{ fontSize: '16px', fontFamily: 'Calibri' }}
          >
            Total after Discount
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: '16px', fontFamily: 'Calibri' }}
          >
            0.00 THB
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <FormControlLabel
            control={<Checkbox />}
            label="VAT"
            style={{ marginRight: '8px', fontSize: '16px', fontFamily: 'Calibri' }}
          />
          <Typography
            variant="body1"
            style={{ fontSize: '16px', fontFamily: 'Calibri' }}
          >
            0.00 THB
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography
            variant="body1"
            style={{ fontSize: '16px', fontFamily: 'Calibri' }}
          >
            Other Charge
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: '16px', fontFamily: 'Calibri' }}
          >
            0.00 THB
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} p={2} bgcolor="grey.200" style={{ border: '1px solid rgba(191, 191, 191, 1)' }}>
          <Typography
            variant="h6"
            style={{ fontSize: '24px', fontFamily: 'Calibri', fontWeight: 'bold' }}
          >
            Grand Total
          </Typography>
          <Typography
            variant="h4"
            style={{ fontSize: '24px', fontFamily: 'Calibri', fontWeight: 'bold' }}
          >
            0.00 THB
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography
            variant="body1"
            style={{ fontSize: '16px', fontFamily: 'Calibri' }}
          >
            Note
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            placeholder="This note will be shown on document"
            inputProps={{
              maxLength: 250,
              style: { fontSize: '16px', fontFamily: 'Calibri' },
            }}
            style={{ border: '1px solid rgba(191, 191, 191, 1)' }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default SummaryValueBox;
