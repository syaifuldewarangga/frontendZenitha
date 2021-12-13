import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import FBIcon from '@mui/icons-material/Facebook';
import IGIcon from '@mui/icons-material/Instagram';
import YTIcon from '@mui/icons-material/YouTube';
import ShippingIcon from '@mui/icons-material/LocalShipping';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <EmailIcon />
          <Typography variant="h8" component="div" sx={{ flexGrow: 1, ml: 1 }}>
            sample@gmail.com
          </Typography>
          <ShippingIcon />
          <Typography sx={{ ml: 1 }}>CEK ORDER</Typography>
          <Typography sx={{ ml: 5 }}>CEK STOK</Typography>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            sx={{ ml: 18 }}
          >
            <FBIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            sx={{ ml: 1 }}
          >
            <IGIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            sx={{ ml: 1 }}
          >
            <YTIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
