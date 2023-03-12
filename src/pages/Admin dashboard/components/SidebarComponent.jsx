import React from 'react';
import {
  Dashboard,
  Person,
  Category,
  SupervisedUserCircle,
  Logout
} from '@mui/icons-material';
import styled from 'styled-components';
import {
  Divider,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import logo from '../../../assets/images/logo.png';

const Sidebar = styled.div`
  display: inline-block;
  width: 200px;
  height: 100vh;
`;

const Image = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const iconList = [
  <Dashboard />,
  <Person />,
  <Category />,
  <SupervisedUserCircle />,
  <Logout />
];

const SidebarComponent = () => {
  console.log('hi');
  return (
    <Sidebar>
      <Drawer
        sx={{
          width: '200px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '200px',
            boxSizing: 'border-box'
          }
        }}
        variant="persistent"
        anchor="left"
        open
      >
        <Toolbar>
          <Image src={logo} alt="logo" />
          <Typography>Admin</Typography>
        </Toolbar>
        <Divider />
        {['Dashboard', 'Users', 'Products', 'Roles', 'Sign out'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{iconList[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </Drawer>
    </Sidebar>
  );
};

export default SidebarComponent;
