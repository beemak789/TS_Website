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
    <>
      <AppBar
        position='static'
        className='nav-bar-container'
        name='nav'
        color='transparent'
      >
        <BannerContainer>
          <BannerLogo src='/banner.png' height={200} alt='banner-logo'/>
        </BannerContainer>
        <NavBarContainer>
          <WaveHeader xmlns='http://www.w3.org/2000/svg' viewBox='0 2 1440 320'>
            <path
              fill='#FFD937'
              fill-opacity='1'
              d='M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,128C672,128,768,192,864,208C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            ></path>
          </WaveHeader>

          <Container maxWidth='xl' style={{ position: 'absolute' }}>
            <Toolbar
              disableGutters
              sx={{
                width: '100%',
                mx: 'auto',
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                disableRipple={true}
                style={{ backgroundColor: 'transparent' }}
                alt="main-logo"
              >
                <Link spy={true} smooth={true} duration={500} to='nav'>
                  <LogoImg src='/logo.png' alt='logo' ></LogoImg>
                </Link>
              </Button>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                  alt="menu-icon-nav"
                >
                  <MenuIcon />
                </IconButton>

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
                  <Button key={idx} onClick={handleCloseNavMenu} alt="link-buttons">
                    <StyledLink
                      spy={true}
                      smooth={true}
                      duration={500}
                      to={link.to}
                    >
                      {link.name}
                    </StyledLink>
                  </Button>
                ))}
              </NavLinksContainer>
            </Toolbar>
          </Container>
        </NavBarContainer>
      </AppBar>
    </>
  );
};
export default Navbar;

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffd937;
  @media (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }
`;

const WaveHeader = styled.svg`
  @media (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
`;

const BannerLogo = styled.img`
  height: 100px;

  @media (min-width: 375px) and (max-width: 768px) {
    height: 50px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 2rem;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;

  @media (min-width: 375px) and (max-width: 768px) {
    height: 200px;
    background-color: #ffd937;
  }
`;

const LogoImg = styled.img`
  height: 100%;
  position: relative;
  width: 300px;
  margin-left: 1.5rem;
  top: 30px;
`;
const NavLinksContainer = styled(Box)`
  width: 100%;
  max-width: 1100px;
  display: flex;
  color: black !important;
  justify-content: space-between;
  margin-top: -1rem;
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
