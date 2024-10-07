import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const Profile = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="flex-end"
      sx={{
        paddingRight: '16px',
       
      }}
    > 
    <Avatar
        alt={user.name}
        src={user.profile_picture}
        sx={{ width: 40, height: 40, border: '2px solid #030303' }}
      />

      <Typography variant="body1" sx={{ color: '#FFFFFF', fontSize: '0.875rem', marginRight: '10px', fontWeight: 'bold', marginLeft:'5px' }}>
        {user.name}
      </Typography>
     
    </Box>
  );
};

export default Profile;
