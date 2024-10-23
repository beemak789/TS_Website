import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
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
      <YellowLineContainer className='yello-container'>
        <div>
          <span>(330)-757-1302</span>
          <span>hello@teachingslp.com</span>
          <span></span>
        </div>
      </YellowLineContainer>
      <ToolbarContainer>
        <Link to='nav'>
          <LogoImg src='/white-slp-logo.png' alt='logo'></LogoImg>
        </Link>

        <StyledBox>
          <Hamburger
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
            alt='menu-icon-nav'
          >
            <MenuIcon className='menu-icon'/>
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
        </StyledBox>

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

  span {
    color: #01b8d8;
    padding: 0.5rem;
    font-size: 20px;
    margin-left: 2rem;
    font-weight: 500;

    @media (min-width: 375px) and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hamburger = styled(IconButton)`
  .menu-icon {
    font-size: 2rem;
  }

  @media (min-width: 1043px) {
    .menu-icon {
      display: none;
    }
  }

  @media (min-width: 650px) {
    .menu-icon {
      font-size: 3rem;
    }
  }
`;

const StyledBox = styled(Box)`
  margin-right: 1rem;
`
const LogoImg = styled.img`
  height: 100%;
  width: 19rem;
  margin-left: 1.5rem;
  top: 70px;

  @media only screen and (min-device-width: 375px) and (max-device-width: 768px) {
    width: 40%;
  }

`;

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 350px;
  box-shadow: 0 3px 3px -2px lightgray;
`;

const NavLinksContainer = styled(Box)`
  width: 100%;
  max-width: 1100px;
  display: flex;
  color: black !important;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (min-width: 375px) and (max-width: 1042px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #26453e;
  font-family: 'Mulish';
  font-size: 20px;
  color: #000068;
`;
