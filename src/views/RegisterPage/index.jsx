import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [kurir, setKurir] = React.useState('');

  const handleChange = (event) => {
    setKurir(event.target.value);
  };

  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: 1000,
          ml: 10,
          paddingTop: 18,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box sx={{ width: '30%' }}>
          <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
            Masuk
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Box sx={{ height: 50, mt: 5 }}>
            <Box
              sx={{
                width: 100,
                bgcolor: 'green',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                Masuk
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '70%' }}></Box>
      </Box>
    </>
  );
}

export default RegisterPage;
