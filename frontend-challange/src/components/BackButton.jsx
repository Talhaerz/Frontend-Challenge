import React from 'react';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from "../assets/chevronLeft-icon.svg"

const BackButton = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'fixed',
        top: '20px',
        left: '300px',
        backgroundColor: '#030303',
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        fontSize: '24px',
        '&:hover': {
          backgroundColor: '#333',
        },
      }}
    >
      <img src={ChevronLeftIcon} alt="ChevronLeft" style={{width:"24px", height:"24px"}} />
    </IconButton>
  );
};

export default BackButton;
