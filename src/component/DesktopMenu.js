import React from 'react'
import Box from '@mui/material/MenuItem';
import Button from '@mui/material/MenuItem';
import { links } from '../utils/links';
import { Link } from 'react-scroll';
export const DesktopMenu = ({ handleCloseNavMenu }) => {
  return (
    <Box
    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
    style={{ marginLeft: '30%' }}
  >
    {links.map((link, idx) => (
      <Button
        key={idx}
        onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          color: 'black',
          display: 'block',
        }}
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to={link.to}
          style={{ fontFamily: 'Solway' }}
        >
          {link.name}
        </Link>
      </Button>
    ))}
  </Box>
  )
}
