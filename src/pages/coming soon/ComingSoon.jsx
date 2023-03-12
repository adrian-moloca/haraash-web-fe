import React from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import ComingSoonImg from '../../assets/images/logo.svg';
import Logo from '../../assets/images/logo.png';

const Image = styled('img')({
  width: '100%',
  maxWidth: '1200px'
});

const StyledLogo = styled('img')({
  width: '30px',
  margin: '10px'
});

const StyledButton = styled(Button)({
  backgroundColor: '#FFB300',
  '&.MuiButtonBase-root': {
    backgroundColor: '#FFB300',
    padding: '0.625rem 1.5rem'
  },
  '&.MuiButtonBase-root:focus': {
    backgroundColor: '#FFB300'
  }
});

const ComingSoon = ({ setMode, mode }) => {
  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="space-between"
    >
      <Box
        mb={3}
        width="100%"
        p={1}
        display="flex"
        justifyContent="space-between"
        sx={{ boxShadow: (theme) => theme.shadows[1] }}
      >
        <StyledLogo src={Logo} alt="logo" />
        <IconButton onClick={() => toggleMode()} sx={{ ml: 1 }} color="inherit">
          {mode === 'dark' ? (
            <Brightness7Icon fontSize="medium" color="white" />
          ) : (
            <Brightness4Icon fontSize="medium" />
          )}
        </IconButton>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          sx={{ padding: { xs: '10px', sm: '50px' } }}
        >
          <Typography
            fontWeight="bold"
            sx={{ marginBottom: '30px', typography: { sm: 'h1', xs: 'h3' } }}
          >
            HARAASH MARKTPLACE IS LAUNCHING SOON
          </Typography>
          <Typography
            fontWeight="regular"
            variant="h4"
            sx={{ marginBottom: '30px' }}
          >
            Subscribe now to our newsletter and be the first to know when we go
            live:
          </Typography>
          <Box display="flex" flexDirection="column" maxWidth="400px">
            <TextField sx={{ mb: '20px' }} label="Enter your email here" />
            <StyledButton variant="contained">
              <Typography variant="h6">NOTIFY ME !</Typography>
            </StyledButton>
          </Box>
        </Box>
        <Box sx={{ margin: { xs: '70px 0px' } }} flex="1">
          <Image src={ComingSoonImg} alt="coming soon img" />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        height="50px"
        fontSize="12px"
        color={(theme) =>
          mode === 'dark'
            ? theme.palette.common.white
            : theme.palette.common.black
        }
      >
        <p>&copy; HARAASH 2023</p>
      </Box>
    </Box>
  );
};

export default ComingSoon;
