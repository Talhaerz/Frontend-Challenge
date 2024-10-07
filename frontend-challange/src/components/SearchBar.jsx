import React, { useState } from 'react';
import { Box, Button, InputBase } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <InputBase
        sx={{
          padding: '10px',
          width: '300px',
          borderRadius: '25px',
          border: 'none',
          outline: 'none',
          color: 'white', 
          fontSize: '14px',
        }}
        placeholder="Search for albums or playlists..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        sx={{
          padding: '8px 16px',
          marginLeft: '10px',
          backgroundColor: '#66D36E',
          borderRadius: '25px',
          color: 'white',
          minWidth: '70px',
          textTransform: 'capitalize',
          ':hover': {
            backgroundColor: '#57b05f',
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
