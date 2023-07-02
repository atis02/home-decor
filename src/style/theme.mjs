import { Select,styled } from "@mui/material";

export const Colors = {
    primary: "#00349A",
    darkText: "#0A0B0F",
    lightText: "#FFFFFF",
    titleName: "#637381",
    primaryDark: "#333333 ",
    PassiveButton: "#18202B",
    display:'none',
    display2:'flex',
  };


  export const CustomSelect = styled(Select)({
    // Your custom styles for Select
    color: '#fff',
    "& fieldset": { border: "none" },
    "& .MuiSelect-icon": {
      color: '#fff', // Change the arrow color to #fff
    },
  });


 