import * as React from 'react';
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
import LogoImage from '../Logo.jpg';
import { useState } from 'react'
import "../index.css"
import "./Header.css"

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
interface DrawerAppBarProps {
  window?: () => Window;
  style?: React.CSSProperties;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const DrawerAppBar : React.FC<DrawerAppBarProps> = ({ window, style }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pepino Fuertes
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', color:"black" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:"black", paddingLeft:"40px"}}>
        <Toolbar style={{ minHeight:"100px"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          
          </IconButton>
            <div className='LogoStyle'>
              <img src={LogoImage} alt="Logo"  /> 
            </div>
           
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color:'#ca9a50',fontSize:'40px',marginLeft:'20px',fontFamily:"Samarkan" }}
            >
            
            </Typography>
          <Box className ="BoxHeader">
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#ca9a50', fontSize:'20px', fontFamily:"Roboto-Regular",textTransform: 'none', marginLeft:"25px"}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
export default DrawerAppBar;