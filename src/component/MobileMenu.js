import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { links } from '../utils/links';
import { Link } from 'react-scroll';

export const MobileMenu = ({ handleOpenNavMenu, anchorElNav, handleCloseNavMenu}) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
        color='inherit'
        alt="mobile-icon"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {links.map((link, idx) => (
          <MenuItem key={idx} onClick={handleCloseNavMenu}>
            <Typography>
              <Link spy={true} smooth={true} duration={500} to={link.to}>
                {link.name}
              </Link>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
