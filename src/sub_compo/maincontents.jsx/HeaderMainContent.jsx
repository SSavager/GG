import * as React from 'react';
import { Box, Typography, TextField, InputAdornment, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import $ from 'jquery';
import 'bootstrap-datepicker';

function HeaderMainContent() {
  const [account, setAccount] = React.useState('');
  const [ref1, setRef1] = React.useState('');
  const [ref2, setRef2] = React.useState('');
  const [currency, setCurrency] = React.useState('');

  React.useEffect(() => {
    // Initialize Bootstrap Datepicker
    $('#docDate, #dueDate').datepicker({
      format: 'dd/mm/yyyy',
      autoclose: true,
    });
  }, []);

  const handleAccountChange = (event) => setAccount(event.target.value);
  const handleRef1Change = (event) => setRef1(event.target.value);
  const handleRef2Change = (event) => setRef2(event.target.value);
  const handleCurrencyChange = (event) => setCurrency(event.target.value);

  return (
    <Box sx={{ width: '1740px', borderBottom: 'none',  }}>
      {/* Transaction and Update Info */}
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '10px' }}>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '12px', color: 'gray' }}>
            Transaction Date: <strong>17/01/2024</strong> By: <strong>Super Admin</strong>
          </Typography>
          <Typography sx={{ fontSize: '12px', color: 'gray' }}>
            Last Update: <strong>03/02/2024</strong> By: <strong>Super Admin</strong>
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ border: '1px solid rgba(198, 198, 200, 1)', padding: '10px 15px', boxSizing: 'border-box',ml:'-40px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Box>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Purchase No. :</Typography>
            <Typography sx={{ fontWeight: 'bold', color: '#005960', fontSize: '28px' }}>PU2024010022</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <FormControl variant="outlined" sx={{ width: '220px', borderRadius: '8px' }}>
              <InputLabel shrink htmlFor="docDate">Doc Date *</InputLabel>
              <TextField
                id="docDate"
                type="text"
                placeholder="DD/MM/YY"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <CalendarMonthIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  height: '42px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)', // Default color
                    },
                    '&:hover fieldset': {
                      borderColor: '#005960', // Color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#005960', // Color when focused
                    },
                  },
                  '& input': {
                    padding: '10px', // Adjust padding for input text
                  },
                }}
              />
            </FormControl>
            <FormControl variant="outlined" sx={{ width: '220px', borderRadius: '8px' }}>
              <InputLabel shrink htmlFor="dueDate">Due Date *</InputLabel>
              <TextField
                id="dueDate"
                type="text"
                placeholder="DD/MM/YY"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <CalendarMonthIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  height: '42px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)', // Default color
                    },
                    '&:hover fieldset': {
                      borderColor: '#005960', // Color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#005960', // Color when focused
                    },
                  },
                  '& input': {
                    padding: '10px', // Adjust padding for input text
                  },
                }}
              />
            </FormControl>
          </Box>
        </Box>

        {/* Fields on the new row */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap',gap:'13px' }}>
          <div className="form-group" style={{ marginRight: '10px' }}>
            <FormControl variant="outlined" sx={{ width: '456px', borderRadius: '8px' }}>
              <InputLabel shrink htmlFor="account">Account</InputLabel>
              <Select
                value={account}
                onChange={handleAccountChange}
                label="Account"
                inputProps={{
                  id: 'account',
                }}
                sx={{
                  height: '42px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)', // Default color
                    },
                    '&:hover fieldset': {
                      borderColor: '#005960', // Color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#005960', // Color when focused
                    },
                  },
                  '& .MuiSelect-select': {
                    padding: '10px', // Adjust padding for select text
                  },
                }}
              >
                <MenuItem value="">
                  <em>Choose...</em>
                </MenuItem>
                <MenuItem value="1">Account 1</MenuItem>
                <MenuItem value="2">Account 2</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-group" style={{ marginRight: '10px' }}>
            <FormControl variant="outlined" sx={{ width: '260px', borderRadius: '8px' }}>
              <InputLabel shrink htmlFor="ref1">Ref. 1</InputLabel>
              <TextField
                value={ref1}
                onChange={handleRef1Change}
                variant="outlined"
                placeholder="Reference 1"
                inputProps={{
                  id: 'ref1',
                }}
                sx={{
                  height: '42px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)', // Default color
                    },
                    '&:hover fieldset': {
                      borderColor: '#005960', // Color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#005960', // Color when focused
                    },
                  },
                  '& input': {
                    padding: '10px', // Adjust padding for input text
                  },
                }}
              />
            </FormControl>
          </div>
          <div className="form-group" style={{ marginRight: '10px' }}>
            <FormControl variant="outlined" sx={{ width: '260px', borderRadius: '8px' }}>
              <InputLabel shrink htmlFor="ref2">Ref. 2</InputLabel>
              <TextField
                value={ref2}
                onChange={handleRef2Change}
                variant="outlined"
                placeholder="Reference 2"
                inputProps={{
                  id: 'ref2',
                }}
                sx={{
                  height: '42px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)', // Default color
                    },
                    '&:hover fieldset': {
                      borderColor: '#005960', // Color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#005960', // Color when focused
                    },
                  },
                  '& input': {
                    padding: '10px', // Adjust padding for input text
                  },
                }}
              />
            </FormControl>
          </div>
          <div className="form-group" style={{ marginRight: '10px' }}>
            <FormControl variant="outlined" sx={{ width: '235px', borderRadius: '8px' }}>
              <InputLabel shrink htmlFor="currency">Currency</InputLabel>
              <Select
                value={currency}
                onChange={handleCurrencyChange}
                label="Currency"
                inputProps={{
                  id: 'currency',
                }}
                sx={{
                  height: '42px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)', // Default color
                    },
                    '&:hover fieldset': {
                      borderColor: '#005960', // Color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#005960', // Color when focused
                    },
                  },
                  '& .MuiSelect-select': {
                    padding: '10px', // Adjust padding for select text
                  },
                }}
              >
                <MenuItem value="THB">THB - Thailand</MenuItem>
                <MenuItem value="USD">USD - United States</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-group">
            <FormControl variant="outlined" sx={{ width: '279px', borderRadius: '8px' }}>
              <InputLabel shrink htmlFor="exchangeRate">Exchange Rate</InputLabel>
              <TextField
                value=""
                disabled
                variant="outlined"
                placeholder="Exchange Rate"
                inputProps={{
                  id: 'exchangeRate',
                }}
                sx={{
                  height: '42px',
                  backgroundColor: 'rgba(240, 240, 240, 1)', // สีพื้นหลังเทา
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.23)', // Default color
                    },
                    '&:hover fieldset': {
                      borderColor: '#005960', // Color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#005960', // Color when focused
                    },
                  },
                  '& input': {
                    padding: '10px', // Adjust padding for input text
                    WebkitTextFillColor: 'black', // สีข้อความในฟิลด์ที่ถูก disabled
                  },
                }}
              />
            </FormControl>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderMainContent;
