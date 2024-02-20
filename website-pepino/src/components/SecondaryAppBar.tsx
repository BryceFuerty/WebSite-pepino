import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoImage from '../logo-noir-or-vecto-uni_1.png';
import '../index.css';
import './HeaderSecondary.css';

import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

interface DrawerAppBarPropsTwo {
  window?: Window;
  style?: React.CSSProperties;
}

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Gallerie', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function DrawerAppBarTwo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("#000000"); // Couleur par défaut sans transparence

  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavSize("5rem") : setnavSize("10rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isSmallScreen = useMediaQuery('(max-width:899px)');

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pepino Fuertes
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={NavLink} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: 'flex', color: 'black', height: '200px', zIndex: 1000 }}>
      <div className='header-bg-two'>
        <CssBaseline />
        <AppBar
          className="MuiAppBar-root"
          style={{
            paddingLeft: '40px',
            boxShadow: 'none',
            backgroundColor: navColor,
          }}
        >
          <Toolbar style={{ minHeight: '100px' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { xs: 'block', sm: 'block', md: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <div className="LogoStyle">
              <img src={LogoImage} alt="Logo" style={{ width: "8ch", maxWidth: "none" }} />
            </div>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                color: 'black',
                fontSize: '40px',
                marginLeft: '20px',
                fontFamily: 'Samarkan',
              }}
            ></Typography>
            <Box className="BoxHeader">
              {!isSmallScreen &&
                navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={NavLink}
                    to={item.path}
                    sx={{ color: 'white', fontSize: '20px', fontFamily: 'Roboto-Regular', textTransform: 'none', marginLeft: '25px' }}
                  >
                    {item.label}
                  </Button>
                ))}
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
