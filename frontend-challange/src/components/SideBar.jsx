import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

import SpotifyLogo from '../assets/spotify-logo.svg';
import HomeIcon from '../assets/home-icon.svg';
import SearchIcon from '../assets/search-icon.svg';
import LibraryIcon from '../assets/library-icon.svg';
import MiniSearchBar from './MiniSearchBar';

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('/api');
        setPlaylists(response.data.playlists);
      } catch (error) {
        console.error('Error fetching playlists', error);
      }
    };
    fetchPlaylists();
  }, []);

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <Box
      sx={{
        width: '240px',
        height: '100vh',
        backgroundColor: '#030303',
        padding: '16px',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      
      <Box sx={{ marginBottom: '32px' }}>
        <img src={SpotifyLogo} alt="Spotify Logo" style={{ width: '130px', height: '40px' }} />
      </Box>

      
      <List>
        <ListItem button>
          <img src={HomeIcon} alt="Home" style={{ width: '24px', marginRight: '16px' }} />
          <ListItemText primary="Home"  />
        </ListItem>

        <ListItem button>
          <img src={SearchIcon} alt="Search" style={{ width: '24px', marginRight: '16px' }} />
          <ListItemText primary="Browse"  />
        </ListItem>

        <ListItem button>
          <img src={LibraryIcon} alt="Library" style={{ width: '24px', marginRight: '16px', marginLeft: '4px' }} />
          <ListItemText primary="Library"  />
        </ListItem>
      </List>

      
      <Typography variant="body2" sx={{ marginTop: '32px', marginBottom: '8px', marginLeft:'15px' }}>
        PLAYLISTS
      </Typography>

     <MiniSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      
      <List>
        {filteredPlaylists.length > 0 ? (
          filteredPlaylists.map((playlist, index) => (
            <ListItem button key={index}>
              <ListItemText primary={playlist.title}  />
            </ListItem>
          ))
        ) : (
          <Typography >Playlist cannot found</Typography>
        )}
      </List>
    </Box>
  );
};

export default Sidebar;
