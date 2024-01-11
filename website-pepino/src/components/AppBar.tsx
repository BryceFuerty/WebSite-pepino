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
import './Header.css';
import { NavLink } from 'react-router-dom';

interface DrawerAppBarProps {
  window?: Window;
  style?: React.CSSProperties;
}

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Gallerie', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColor("#000000") : setnavColor("transparent");
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
    <Box sx={{  display: 'flex', color: 'black', height: '200px', zIndex: 1000  }}>
      <div className='header-bg'>
        <CssBaseline />
        <AppBar
          className="MuiAppBar-root"
          style={{
            paddingLeft: '40px',
            boxShadow: 'none',
            backgroundColor: navColor,
            transition: 'background-color 0.8s ease', // Ajout d'une transition
          }}>
          <Toolbar style={{ minHeight: '100px' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <div className="LogoStyle">
              <img src={LogoImage} alt="Logo" />
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
              {navItems.map((item) => (
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
    </Box>
  );
};

