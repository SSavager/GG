import React, { useState } from 'react';
import Sidebar from "../components/sidebar";
import Firstnavbar from "../components/firstnavbar";
import Secondnavbar from "../components/secondnavbar";
import Maincontent from "../components/maincontent";
import Box from "@mui/material/Box";

function PageMain() {
  // State สำหรับสถานะของ pin
  const [isPinned, setIsPinned] = useState(false);

  // ฟังก์ชันสำหรับการเปลี่ยนแปลงสถานะ pin
  const handlePinChange = (newPinStatus) => {
    setIsPinned(newPinStatus);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100", width:"10px" }}>
          <Box>
          <Firstnavbar />
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar
          sx={{ width: isPinned ? "180px" : "80px", backgroundColor: "#F0F0F0" }} 
          onPinChange={handlePinChange}
        />
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Secondnavbar />
          <Box sx={{ flexGrow: 1, pt: '125px',backgroundColor:'white',width:'1990px',height:'px',pl:'55px', transition: "padding-left 0.3s ease-in-out", paddingLeft: isPinned ? "225px" : "80px" }}>
            <Maincontent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageMain;
