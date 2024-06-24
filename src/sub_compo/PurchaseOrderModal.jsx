import React, { useContext, useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import DataTable from './PurchaseOrdertable/Datatable'; // Import the DataTable component or use the necessary component for display
import { SelectedRowsContext } from '../context/SelectedRowsContext'// Import context to share data

const PurchaseOrderModal = ({ open, onClose }) => {
  const { setSelectedRows } = useContext(SelectedRowsContext);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedData, setSelectedData] = useState([]);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleOkClick = () => {
    console.log('Selected Data:', selectedData);
    setSelectedRows(selectedData);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "1360px",
          height: "862px",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "56px",
            backgroundColor: "rgb(5,89,91)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <Typography
            sx={{ color: "white", fontFamily: "Calibri", fontSize: "24px" }}
          >
            Purchase Order
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: "white",
              width: "24px",
              height: "24px",
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: "96%",
            height: "100%",
            display: "flex",
            backgroundColor: "rgb(248,248,248)",
            mt: "24px",
            ml: "32px",
            mr: "32px",
            mb: "24px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              mt: "31px",
              ml: "32px",
              backgroundColor: "rgb(248,248,248)",
              width: "100%",
              mt: "31px",
              ml: "32px",
              mr: "32px",
              mb: "31px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "50px",
                backgroundColor: "rgb(248,248,248)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormControl
                variant="outlined"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <InputLabel
                  htmlFor="account"
                  sx={{
                    position: "absolute",
                    top: "-20px",
                    left: "16px",
                    padding: "0 4px",
                    color: "#666",
                    fontSize: "12px",
                    transform: "translateY(12px)",
                    transition: "0.2s ease-in-out",
                    pointerEvents: "none",
                  }}
                >
                  Account :
                </InputLabel>
                <OutlinedInput
                  id="account"
                  defaultValue="Lopster"
                  label="Account :"
                  sx={{
                    backgroundColor: "white",
                    width: "588px",
                    height: "42px",
                    paddingLeft: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ccc",
                      borderRadius: "8px",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#000",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 12px",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#000",
                    },
                  }}
                />
              </FormControl>
              
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                  }}
                >
                  <Typography
                    noWrap
                    sx={{
                      marginRight: "8px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "150px",
                      fontSize: '16px',
                      fontFamily: 'Calibri',
                      color: 'rgba(52, 52, 52, 1)'
                    }}
                  >
                    Rows per page
                  </Typography>
                  <FormControl
                    variant="outlined"
                    sx={{
                      width: "70px",
                      height: "38px",
                    }}
                  >
                    <Select
                      value={rowsPerPage}
                      onChange={handleRowsPerPageChange}
                      sx={{
                        height: "38px",
                        width:'69px',
                        backgroundColor: "white",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ccc",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000",
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "10px 12px",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#000",
                        },
                      }}
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  marginLeft: '16px',
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: 'rgb(248,248,248)',
                    borderRadius: '8px',
                    padding: '8px',
                    margin: '0 8px',
                    width: '28px',
                    height: '28px',
                    '&:hover': {
                      backgroundColor: 'rgba(248,248,248,0.8)',
                      color: 'yellow',
                    },
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  <LocalPrintshopOutlinedIcon />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: 'rgb(248,248,248)',
                    borderRadius: '8px',
                    padding: '8px',
                    margin: '0 8px',
                    width: '28px',
                    height: '28px',
                    fontSize :'200px',
                    '&:hover': {
                      backgroundColor: 'rgba(248,248,248,0.8)',
                      color: 'green',
                    },
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  <FingerprintOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                overflow: 'auto',
                backgroundColor: 'rgb(248,248,248)',
                mt:'21px',
              }}
            >
              <DataTable data={selectedData} rowsPerPage={rowsPerPage} onSelectionChange={setSelectedData} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "56px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 30px",
            mt: "-48px",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Button
            sx={{
              backgroundColor: 'white',
              width: '79px',
              height: '35px',
              border: '1px solid rgba(191, 191, 191, 1)',
              borderRadius: '4px',
              color: 'black',
              '&:hover': {
                backgroundColor: 'rgba(191, 191, 191, 0.8)',
              },
              position: 'absolute',
              top: '10px',
              left: '30px',
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: 'rgba(23, 198, 83, 1)',
              width: '79px',
              height: '35px',
              border: '1px solid rgba(191, 191, 191, 1)',
              borderRadius: '4px',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(23, 198, 83, 0.8)',
              },
              position: 'absolute',
              top: '10px',
              right: '30px',
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
            }}
            onClick={handleOkClick}
          >
            OK
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PurchaseOrderModal;
