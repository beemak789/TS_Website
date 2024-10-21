import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';
import { links } from '../utils/links';
import styled from 'styled-components';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <NavBarContainer>
      <YellowLineContainer className='yello-container' />
      <ToolbarContainer>
        <Link to='nav'>
          <LogoImg src='/white-slp-logo.png' alt='logo'></LogoImg>
        </Link>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Hamburger
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
            alt='menu-icon-nav'
          >
            <MenuIcon />
          </Hamburger>

          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            disableScrollLock={false}
          >
            {links.map(
              (link, idx) =>
                idx > 0 && (
                  <MenuItem
                    key={idx}
                    onClick={handleCloseNavMenu}
                    onBlur={handleCloseNavMenu}
                  >
                    <Typography>
                      <Link
                        spy={true}
                        smooth={true}
                        duration={500}
                        to={link.to}
                      >
                        {link.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                )
            )}
          </Menu>
        </Box>

        <NavLinksContainer className='nav-links-container'>
          {links.map((link, idx) => (
            <Button key={idx} onClick={handleCloseNavMenu} alt='link-buttons'>
              <StyledLink spy={true} smooth={true} duration={500} to={link.to}>
                {link.name}
              </StyledLink>
            </Button>
          ))}
        </NavLinksContainer>
      </ToolbarContainer>
    </NavBarContainer>
  );
};
export default Navbar;

const YellowLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  color: black;
  text-align: center;
  font-size: 18px;
  background-color: #fed32c;
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 375px) and (max-width: 768px) {
    background-color: white;
  }
`;

const Hamburger = styled(IconButton)`
  @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
    * {
      display: none;
    }
  }
`;
const LogoImg = styled.img`
  height: 100%;
  width: 19rem;
  margin-left: 1.5rem;
  top: 70px;

  @media only screen and (min-device-width: 375px) and (max-device-width: 768px) {
    width: 40%;
    position: inherit;
    margin-left: 0;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    margin-left: 12rem;
  }
`;

const ToolbarContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 350px;
  border-bottom: 1px solid blue;

  @media only screen and (min-device-width: 375px) and (max-device-width: 768px) {
    position: inherit;
    margin-left: 0;
  }
`;

const NavLinksContainer = styled(Box)`
  width: 100%;
  max-width: 1100px;
  display: flex;
  color: black !important;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #26453e;
  font-family: 'Mulish';
  font-size: 20px;
  color: #000068;
`;
