import React from "react";
import { Avatar } from "@mui/material";
import zlatkoImage from "../images/zlatko.jpg";

function Krug() {
  return <Avatar alt="Z" src={zlatkoImage} sx={{ width: 100, height: 100 }} />;
}

export default Krug;
