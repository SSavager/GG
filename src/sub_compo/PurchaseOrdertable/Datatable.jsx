import React, { useState, useCallback, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TableSortLabel from '@mui/material/TableSortLabel';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import DeleteIcon from '@mui/icons-material/Delete';


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
  }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontFamily: 'Calibri, sans-serif',
  fontSize: '16px',
  padding: '4px 8px',
  borderBottom: '1px solid #e0e0e0',
  borderRight: 'none',
  '&:last-child': {
    borderRight: 'none',
  },
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.black,
    fontWeight: 'bold',
    borderBottom: '1px solid #e0e0e0',
  },
  [`&.${tableCellClasses.body}`]: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderBottom: '1px solid #e0e0e0',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  fontFamily: 'Calibri, sans-serif',
  fontSize: '16px',
  display: 'table-row',
  alignItems: 'center',
  height: '42px',
  padding: '0px 8px',
  borderBottom: '1px solid #e0e0e0',
  opacity: 1,
  borderRadius: '5px',
}));

const CustomTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: '16px',
  '& .MuiTableSortLabel-icon': {
    opacity: 1,
    transition: 'transform 0.3s',
  },
  '&[aria-sort="asc"] .MuiTableSortLabel-icon': {
    transform: 'rotate(90deg)',
  },
  '&[aria-sort="desc"] .MuiTableSortLabel-icon': {
    transform: 'rotate(270deg)',
  },
  '&:hover .MuiTableSortLabel-icon': {
    opacity: 1,
    color: 'black',
  },
  '&:hover': {
    backgroundColor: 'inherit',
    color: 'black',
    boxShadow: 'none',
  },
  '&.MuiTableSortLabel-root': {
    boxShadow: 'none',
  }
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '16px',
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  padding: '0',
  margin: '0',
}));

const NoBorderTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  '& .MuiInputBase-input': {
    fontSize: '16px',
    color: '#999999',
  },
}));

function createData(id, tranDate, docDate, dueDate, poNo, account, ref1, ref2, pcs, weight, amount, currency, remark) {
  return { id, tranDate, docDate, dueDate, poNo, account, ref1, ref2, pcs, weight, amount, currency, remark };
}

const initialRows = [
  createData(1, '25/01/2024', '25/01/2024', '25/01/2024', 'PO2024010022', 'Lopster', '', '', 1, '0.5000', '14,350.00', 'THB', ''),
  createData(2, '25/01/2024', '25/01/2024', '25/01/2024', 'PO2024010228', 'Lopster', '', '', 1, '1.5000', '21,350.00', 'THB', ''),
  createData(3, '22/01/2024', '06/01/2024', '06/01/2024', 'PO2024010106', 'Lopster', '', '', 1, '0.5000', '9,050.00', 'THB', ''),
  createData(4, '', '', '', '', '', '', '', '', '', '', '', ''),
  createData(5, '', '', '', '', '', '', '', '', '', '', '', ''),
];

export default function CustomizedTables({ onSelectionChange }) {
  const [rows, setRows] = useState(initialRows);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('tranDate');
  const [filterAccount, setFilterAccount] = useState('');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [accountFilter, setAccountFilter] = useState('');
  const [remarkDialogOpen, setRemarkDialogOpen] = useState(false);
  const [currentRemark, setCurrentRemark] = useState('');
  const [currentRemarkIndex, setCurrentRemarkIndex] = useState(null);
  const [selected, setSelected] = useState([]);

  const handleCheckboxClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);

    // Call the handleOkClick function with the updated selection
    onSelectionChange(newSelected.map(selectedId => rows.find(row => row.id === selectedId)));
  };

  const handleRequestSort = useCallback((property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }, [order, orderBy]);

  const sortedRows = useMemo(() => {
    return rows.slice().sort((a, b) => {
      if (['tranDate', 'docDate', 'dueDate'].includes(orderBy)) {
        return order === 'asc'
          ? new Date(a[orderBy]) - new Date(b[orderBy])
          : new Date(b[orderBy]) - new Date(a[orderBy]);
      }
      return 0;
    }).filter(row => row.account.toLowerCase().includes(accountFilter.toLowerCase()));
  }, [order, orderBy, accountFilter, rows]);

  const handleFilterIconClick = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterChange = (event) => {
    setFilterAccount(event.target.value);
  };

  const handleApplyFilter = () => {
    setAccountFilter(filterAccount);
    setFilterDialogOpen(false);
  };

  const handleClearFilter = () => {
    setFilterAccount('');
    setAccountFilter('');
    setFilterDialogOpen(false);
  };

  const handleRemarkClick = (remark, index) => {
    setCurrentRemark(remark);
    setCurrentRemarkIndex(index);
    setRemarkDialogOpen(true);
  };

  const handleRemarkChange = (event) => {
    setCurrentRemark(event.target.value);
  };

  const handleRemarkSave = () => {
    if (currentRemarkIndex !== null) {
      const updatedRows = [...rows];
      updatedRows[currentRemarkIndex].remark = currentRemark;
      setRows(updatedRows);
      setRemarkDialogOpen(false);
    }
  };

  const handleDeleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <ScrollContainer component={Paper}>
      <Table
        sx={{
          minWidth: 700,
          border: '1px solid #e0e0e0',
          borderRadius: '5px',
          tableLayout: 'fixed',
        }}
        aria-label="customized table"
      >
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center" style={{ width: '40px' }}>
              <CustomCheckbox
                color="primary"
                // Add logic for check all
              />
            </StyledTableCell>
            <StyledTableCell align="center" style={{ width: '30px' }}>#</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '140px' }}>
              <CustomTableSortLabel
                IconComponent={SwapVertIcon}
                active={orderBy === 'tranDate'}
                direction={orderBy === 'tranDate' ? order : 'asc'}
                onClick={() => handleRequestSort('tranDate')}
              >
                TranDate
              </CustomTableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="center" style={{ width: '140px' }}>
              <CustomTableSortLabel
                IconComponent={SwapVertIcon}
                active={orderBy === 'docDate'}
                direction={orderBy === 'docDate' ? order : 'asc'}
                onClick={() => handleRequestSort('docDate')}
              >
                Doc Date
              </CustomTableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="center" style={{ width: '140px' }}>
              <CustomTableSortLabel
                IconComponent={SwapVertIcon}
                active={orderBy === 'dueDate'}
                direction={orderBy === 'dueDate' ? order : 'asc'}
                onClick={() => handleRequestSort('dueDate')}
              >
                Due Date
              </CustomTableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="center" style={{ width: '140px' }}>PO No.</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '140px' }}>
              Account
              <CustomIconButton onClick={handleFilterIconClick} size="small">
                <FilterAltOutlinedIcon />
              </CustomIconButton>
            </StyledTableCell>
            <StyledTableCell align="center" style={{ width: '140px' }}>Ref 1</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '140px' }}>Ref 2</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '60px' }}>Pcs</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '120px' }}>Weight</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '100px' }}>Amount</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '100px' }}>Currency</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '286px' }}>Remark</StyledTableCell>
            <StyledTableCell align="center" style={{ width: '40px' }}>
              Action
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" style={{ width: '40px', padding: '4px 0px' }}>
                <CustomCheckbox
                  color="primary"
                  checked={selected.indexOf(row.id) !== -1}
                  onChange={(event) => handleCheckboxClick(event, row.id)}
                />
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '30px', padding: '4px 0px' }}>{row.id}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '100px' }}>{row.tranDate}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '100px' }}>{row.docDate}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '100px' }}>{row.dueDate}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '100px' }}>{row.poNo}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '140px' }}>{row.account}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '80px' }}>{row.ref1}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '80px' }}>{row.ref2}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '60px' }}>{row.pcs}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '80px' }}>{row.weight}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '100px' }}>{row.amount}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '100px' }}>{row.currency}</StyledTableCell>
              <StyledTableCell align="center" style={{ width: '286px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <NoBorderTextField
                    variant="outlined"
                    size="small"
                    value={row.remark}
                    onChange={(e) => { rows[index].remark = e.target.value; }}
                    fullWidth
                    placeholder="Description ..."
                    InputProps={{
                      style: {
                        color: row.remark ? 'inherit' : 'rgba(154, 154, 154, 1)'
                      },
                    }}
                  />
                  <CustomIconButton onClick={() => handleRemarkClick(row.remark, index)} size="small">
                    <ZoomOutMapIcon />
                  </CustomIconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '40px' }}>
                <CustomIconButton onClick={() => handleDeleteRow(index)} size="small" color="secondary">
                  <DeleteIcon />
                </CustomIconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
        <DialogTitle>Filter Account</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="filterAccount"
            label="Account"
            type="text"
            fullWidth
            value={filterAccount}
            onChange={handleFilterChange}
            InputProps={{
              style: {
                fontSize: '16px',
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClearFilter} color="primary">
            Clear
          </Button>
          <Button onClick={handleApplyFilter} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={remarkDialogOpen} onClose={() => setRemarkDialogOpen(false)}>
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
          <Button onClick={() => setRemarkDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRemarkSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </ScrollContainer>
  );
}
