import React, { useState } from "react";
// Material UI Components
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

// Material UI Icons 
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

// Image Imports
import ITSA from "../Assets/ITSA_logo.png"

const pages = ['HOME', 'ABOUT', 'INDUSTRY COLLABORATIONS', 'EVENTS', 'CONTACT', 'HOUSECUP'];

function NavBar() {
  const [icon,setIcon] = useState("");
  const handleActive = (e) => {
    setIcon(e.target.innerText);
    console.log(icon);
  }

  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar style={{ backgroundColor: '#27005D' }} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img width="3%" style={{ marginRight: "20px", marginLeft: "20px" }} alt="ITSA" src={ITSA} />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              > */}
              <MenuIcon />
              {/* </IconButton> */}
              <Menu
                id="menu-appbar"
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
                {pages.map((page) => (
                  <Link to={`/${page.toLowerCase()}`}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to={`/${page.toLowerCase()}`}
                  key={page}
                  onClick={handleActive}
                >
                  {(
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: '#E4F1FF', display: 'block' }}
                    >
                      {page}
                    </Button>
                  )}
                </Link>

              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
