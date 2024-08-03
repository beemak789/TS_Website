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
          <BannerLogo src='/banner.png' height={200} />
        </BannerContainer>
        <NavBarContainer>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 2 1440 320'>
            <path
              fill='#FFD937'
              fill-opacity='1'
              d='M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,128C672,128,768,192,864,208C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            ></path>
          </svg>

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
              >
                <Link spy={true} smooth={true} duration={500} to='nav'>
                  <LogoImg src='/logo.png'></LogoImg>
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
                  <Button key={idx} onClick={handleCloseNavMenu}>
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
`;

const BannerLogo = styled.img`
  height: 100px;
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  @media (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactInfoContainer = styled.div`
  background: #01b8d8;
  height: 25px;
  display: flex;
  padding: 0.8rem;

  span {
    color: white;
    padding: 0.5rem;
    font-size: 15px;
    margin-left: 2rem;
    font-weight: 500;
  }

  .facebook-insta-container {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-left: -2rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  position: relative;
  width: 300px;
  margin-left: 1.5rem;
  top: 30px;
  @media (min-width: 375px) and (max-width: 768px) {
    height: 230px;
    width: 310px;
  }
`;
const NavLinksContainer = styled(Box)`
  width: 100%;
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

const FacebookIcon = styled.svg`
  height: 1.2em;
  width: 1.2em;
  margin-top: -0.2rem;
`;
