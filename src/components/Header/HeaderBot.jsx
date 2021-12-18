import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/ShoppingCart';
import LoveIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  ilang: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  homeBtn: {
    mr: 200,
    [theme.breakpoints.down('sm')]: {
      mr: 100,
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'gray',
  marginRight: theme.spacing(5),
  marginLeft: 0,
  width: 1070,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: 1000,
  },
}));

function HeaderBot() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <Avatar
            variant="rounded"
            src="/assets/images/logo 3.png"
            sx={{ bgcolor: 'black', width: 150, height: 50, mr: 3 }}
            // className={classes.ilang}
          />
          <IconButton href="/" sx={{ mr: 1 }}>
            <HomeIcon sx={{ color: 'pink' }} />
          </IconButton>

          <Button sx={{ mr: 3 }} href="/detail-produk">
            <Typography sx={{ fontWeight: 'bold', color: 'black', width: 130 }}>
              PRODUK KAMI
            </Typography>
            <ArrowDownIcon sx={{ color: 'gray' }} />
          </Button>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cari Produk"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: 1,
              borderRightColor: 'lightgrey',
              mr: 5,
            }}
          >
            <IconButton sx={{ mr: 5 }}>
              <LoveIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: 1,
              borderRightColor: 'lightgrey',
              mr: 4,
            }}
          >
            <IconButton sx={{ mr: 5 }} href="/cart-page">
              <CartIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              borderColor: 'black',
              mr: 3,
            }}
          >
            LOGIN
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: 'pink',
              color: 'white',
              fontWeight: 'bold',
              borderColor: 'pink',
              flexDirection: 'column-reverse',
            }}
          >
            DAFTAR
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderBot;
