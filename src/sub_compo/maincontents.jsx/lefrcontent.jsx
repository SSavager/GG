import React, { useContext, useState, useEffect } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DatePicker from "react-datepicker";
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import DeleteIcon from '@mui/icons-material/Delete';
import "react-datepicker/dist/react-datepicker.css";
import { SelectedRowsContext } from '../../context/SelectedRowsContext';


const ScrollContainer = styled(TableContainer)(({ theme }) => ({
  overflowX: 'auto',
  maxWidth: '1232px',
  marginBottom: '30px',
  '&::-webkit-scrollbar': {
    height: '12px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#999999',
    borderRadius: '10px',
    border: '2px solid transparent',
    backgroundClip: 'content-box',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:vertical': {
    marginTop: '10px',
    marginBottom: '10px',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontFamily: 'Calibri, sans-serif',
  fontSize: '16px',
  padding: '0px',
  textAlign: 'center',
  borderBottom: '1px solid #e0e0e0',
  '&:last-child': {
    borderRight: 'none',
  },
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.black,
    fontWeight: 'bold',
    borderBottom: '1px solid #e0e0e0',
  },
  height: '36px',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  fontFamily: 'Calibri, sans-serif',
  fontSize: '16px',
  textAlign: 'center',
  borderBottom: '1px solid #e0e0e0',
  borderRadius: '5px',
}));

const NoBorderTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  height: '36px',
  margin: '4px',
  '& .MuiInputBase-root': {
    fontSize: '16px',
    textAlign: 'center',
    padding: '0',
    lineHeight: '36px',
  },
  '& .MuiOutlinedInput-root': {
    height: '36px',
    padding: '0',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#e0e0e0',
  },
}));

function createData(id, location, stone, shape, size, color, cutting, quality, clarity, certype, cerno, lot, pcs, weight, price, unit, amount, discount, discountamt, totalamount, duedate, refno, remark) {
  return {
    id,
    location,
    stone,
    shape,
    size,
    color,
    cutting,
    quality,
    clarity,
    certype,
    cerno,
    lot,
    pcs,
    weight,
    price,
    unit,
    amount,
    discount,
    discountamt,
    totalamount,
    duedate,
    refno,
    remark,
  };
}

const initialRows = [
  createData(1, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', new Date(), '', ''),
  createData(2, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', new Date(), '', ''),
  createData(3, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', new Date(), '', ''),
  createData(4, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', new Date(), '', ''),
  createData(5, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', new Date(), '', ''),
];

const LeftMainContent = () => {
  const { selectedRows } = useContext(SelectedRowsContext);
  const [rows, setRows] = useState(initialRows);
  const [remarkDialogOpen, setRemarkDialogOpen] = useState(false);
  const [currentRemark, setCurrentRemark] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    if (selectedRows && selectedRows.length > 0) {
      setRows(selectedRows);
    }
  }, [selectedRows]);

  const handleInputChange = (event, field, index) => {
    const newRows = [...rows];
    newRows[index][field] = event.target.value;
    setRows(newRows);
  };

  const handleDateChange = (date, index) => {
    const newRows = [...rows];
    newRows[index].duedate = date;
    setRows(newRows);
  };

  const handleRemarkChange = (event) => {
    setCurrentRemark(event.target.value);
  };

  const handleRemarkClick = (remark, index) => {
    setCurrentRemark(remark);
    setCurrentIndex(index);
    setRemarkDialogOpen(true);
  };

  const handleRemarkSave = () => {
    const newRows = [...rows];
    newRows[currentIndex].remark = currentRemark;
    setRows(newRows);
    setRemarkDialogOpen(false);
    setCurrentRemark(''); // Clear currentRemark
    setCurrentIndex(null); // Clear currentIndex
  };

  const addRow = () => {
    const newId = rows.length + 1;
    const newRow = createData(newId, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', new Date(), '', '');
    setRows([...rows, newRow]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((row, i) => i !== index);
    setRows(newRows);
  };

  return (
    <Box
      sx={{
        width: '1171px',
        height: '690px',
        padding: '0px',
        border: '1px solid rgba(198, 198, 200, 1)',
        mr:'4px',
        backgroundColor: 'rgba(248, 248, 248, 1)',
        pl: '20px'
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Item
      </Typography>

      <ScrollContainer component={Paper}>
        <Table
          sx={{
            width: '1048px',
            height: 'auto',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            tableLayout: 'fixed',
          }}
          aria-label="customized table"
        >
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center" style={{ width: '40px' }}>
                #
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Location
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Stone
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '100px' }}>
                Shape
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Size
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Color
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Cutting
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Quality
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Clarity
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Cer Type
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Cer No.
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '90px' }}>
                Lot
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '90px' }}>
                Pcs
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '120px' }}>
                Weight
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '120px' }}>
                Price
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '90px' }}>
                Unit
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '120px' }}>
                Amount
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '102px' }}>
                Discount (%)
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '120px' }}>
                Discount Amt
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '120px' }}>
                Total Amount
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Due Date
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>
                Ref No.
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '286px' }}>
                Remark
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '40px' }}>
                Action
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center" style={{ width: '40px' }}>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.location}
                      onChange={(e) => handleInputChange(e, 'location', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.stone}
                      onChange={(e) => handleInputChange(e, 'stone', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.shape}
                      onChange={(e) => handleInputChange(e, 'shape', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.size}
                      onChange={(e) => handleInputChange(e, 'size', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.color}
                      onChange={(e) => handleInputChange(e, 'color', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.cutting}
                      onChange={(e) => handleInputChange(e, 'cutting', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.quality}
                      onChange={(e) => handleInputChange(e, 'quality', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.clarity}
                      onChange={(e) => handleInputChange(e, 'clarity', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.certype}
                      onChange={(e) => handleInputChange(e, 'certype', index)}
                      fullWidth
                      placeholder=" "
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.cerno}
                      onChange={(e) => handleInputChange(e, 'cerno', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '100px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.lot}
                      onChange={(e) => handleInputChange(e, 'lot', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '60px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.pcs}
                      onChange={(e) => handleInputChange(e, 'pcs', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '100px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.weight}
                      onChange={(e) => handleInputChange(e, 'weight', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '100px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.price}
                      onChange={(e) => handleInputChange(e, 'price', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '60px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.unit}
                      onChange={(e) => handleInputChange(e, 'unit', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '120px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.amount}
                      onChange={(e) => handleInputChange(e, 'amount', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '100px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.discount}
                      onChange={(e) => handleInputChange(e, 'discount', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '100px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.discountamt}
                      onChange={(e) => handleInputChange(e, 'discountamt', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '100px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.totalamount}
                      onChange={(e) => handleInputChange(e, 'totalamount', index)}
                      fullWidth
                      placeholder=""
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '140px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <DatePicker
                      selected={row.duedate}
                      onChange={(date) => handleDateChange(date, index)}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '100px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NoBorderTextField
                      value={row.refno}
                      onChange={(e) => handleInputChange(e, 'refno', index)}
                      fullWidth
                      placeholder="."
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '286px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                    <NoBorderTextField
                      variant="outlined"
                      size="small"
                      value={row.remark}
                      onChange={(e) => handleInputChange(e, 'remark', index)}
                      fullWidth
                      placeholder="Description ..."
                      InputProps={{
                        style: {
                          height: '100%',
                          color: row.remark ? 'inherit' : 'rgba(154, 154, 154, 1)',
                        },
                      }}
                    />
                    <IconButton onClick={() => handleRemarkClick(row.remark, index)} size="small">
                      <ZoomOutMapIcon />
                    </IconButton>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '40px' }}>
                  <IconButton onClick={() => deleteRow(index)} size="small" color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollContainer>

      <Box sx={{ display: 'flex', justifyContent: 'start' }}>
        <Button onClick={addRow} color="primary">
          + Add Row
        </Button>
      </Box>

      <Box
        sx={{
          mt: 4,
          p: 2,
          maxWidth: '1048px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            margin: 0,
            paddingBottom: '4px',
            fontSize: '16px',
            color: '#000',
          }}
        >
          Remark
        </Typography>
        <TextField
          multiline
          rows={6}
          variant="outlined"
          placeholder="This remark will be shown on document"
          fullWidth
          inputProps={{
            maxLength: 250,
          }}
          InputProps={{
            style: {
              fontSize: '16px',
              color: '#888888',
              height: '130px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid rgba(191, 191, 191, 1)',
              padding: '8px',
            },
            notchedOutline: {
              borderWidth: '1px',
              borderColor: 'rgba(191, 191, 191, 1)',
            }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(191, 191, 191, 1)',
            },
          }}
        />
        <Typography
          variant="caption"
          color="textSecondary"
          align="right"
          display="block"
          sx={{ width: '100%', marginTop: '4px', paddingRight: '8px' }}
        >
          0/250
        </Typography>
      </Box>

      <Dialog open={remarkDialogOpen} onClose={() => {
        setRemarkDialogOpen(false);
        setCurrentRemark(''); // Clear currentRemark
        setCurrentIndex(null); // Clear currentIndex
      }}>
        <DialogTitle>Remark Details</DialogTitle>
        <DialogContent>
          <TextField
            id="remarkDetail"
            label="Remark"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={currentRemark}
            onChange={handleRemarkChange}
            InputProps={{
              style: {
                fontSize: '16px',
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setRemarkDialogOpen(false);
            setCurrentRemark(''); // Clear currentRemark
            setCurrentIndex(null); // Clear currentIndex
          }} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRemarkSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LeftMainContent;
