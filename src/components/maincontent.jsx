// components/maincontent.jsx
import React, { useContext } from "react";
import { Box } from "@mui/material";
import HeaderMainContent from "../sub_compo/maincontents.jsx/HeaderMainContent";
import LeftMainContent from "../sub_compo/maincontents.jsx/lefrcontent";
import RightMainContent from "../sub_compo/maincontents.jsx/rightcontent";
import BottomMainContent from "../sub_compo/maincontents.jsx/bottomcontent";
import { SelectedRowsContext } from '../context/SelectedRowsContext';

function Maincontent() {
  const { selectedRows } = useContext(SelectedRowsContext);

  return (
    <Box sx={{width: '100%', height: '918px',backgroundColor:'', }}>
      <Box>
        <HeaderMainContent />
        <Box display="flex" justifyContent="">
          <Box  sx={{ml:'-40px'}}>
            <LeftMainContent tableData={selectedRows} />
          </Box>
          <Box sx={{ml:'0px'}} >
            <RightMainContent />
          </Box>
        </Box>
        <BottomMainContent />
      </Box>
    </Box>
  );
}

export default Maincontent;
