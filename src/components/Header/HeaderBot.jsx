import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InvenIcon from '@mui/icons-material/Inventory';

const Hilang = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {},
}));

const Muncul = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'gray',
  marginRight: theme.spacing(5),
  width: 1070,
  [theme.breakpoints.down('md')]: {
    width: 540,
    marginRight: theme.spacing(2),
  },
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
    [theme.breakpoints.down('md')]: {
      width: 470,
    },
  },
}));

function HeaderBot() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'white',
          [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Toolbar>
          <Hilang>
            <Avatar
              variant="rounded"
              src="/assets/images/logo 3.png"
              sx={{ bgcolor: 'black', width: 150, height: 50, mr: 3 }}
            />
          </Hilang>
          <Link to="/">
            <IconButton sx={{ mr: 1 }}>
              <HomeIcon sx={{ color: 'pink' }} />
            </IconButton>
          </Link>

          <Muncul>
            <Link to="/detail-produk">
              <IconButton sx={{ mr: 1 }}>
                <InvenIcon sx={{ color: 'pink' }} />
              </IconButton>
            </Link>
          </Muncul>

          <Hilang>
            <Link to="/detail-produk">
              <Button sx={{ mr: 3 }}>
                <Typography
                  sx={{ fontWeight: 'bold', color: 'black', width: 130 }}
                >
                  PRODUK KAMI
                </Typography>
                <ArrowDownIcon sx={{ color: 'gray' }} />
              </Button>
            </Link>
          </Hilang>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cari Produk"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Hilang>
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
          </Hilang>

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
              [theme.breakpoints.down('md')]: {
                width: 40,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRight: 1,
                borderRightColor: 'lightgrey',
                mr: 2,
              },
            }}
          >
            <Link to="/cart-page">
              <IconButton
                sx={{
                  mr: 5,
                  [theme.breakpoints.down('md')]: {
                    mr: 0,
                  },
                }}
              >
                <CartIcon sx={{ color: 'black' }} />
              </IconButton>
            </Link>
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
