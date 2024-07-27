import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export const Logo = () => {
  return (
    <Box
    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
    >
      <img
        src='/leafIcon.png'
        alt='leafIcon logo'
        width={26}
        height={29}
        style={{ borderRadius: '50%', marginRight: '0.4rem' }}
      ></img>
      <Typography
        variant='h6'
        noWrap
        component='a'
        href='/'
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'Solway',
          fontWeight: 400,
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Speak Easy with Brandy
      </Typography>
    </Box>
  );
};
