import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems} from "./consts/navbarItems";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid } from '@mui/material';


const logoWidth = "90";

const Layout = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [drawerWidth,setDrawerWidth]=useState(0)
  const navigate = useNavigate()
  
  const handleDrawerOpen = () => {
    setOpen(true);
    setDrawerWidth(150);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setDrawerWidth(0);
  };

  return (
    <Grid item xs={4}  sx={{ display: 'flex', }}>
      <Grid style={{alignContent: "center"}}>
          <Logo width={logoWidth}/>    
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
      </Grid>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: "#101F33",
              color: "rgba(225, 225, 225, 0.7)",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div>
            <Logo width="80"/>    
            <IconButton sx={{height: "40",alignItems:"end"}} onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
        <Divider />
        <List>
          {mainNavbarItems.map((item) => (
            <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
              <ListItemButton>
                <ListItemIcon sx={{color: "rgba(225, 225, 225, 0.7)"}}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Grid>
  )
};

export default Layout
