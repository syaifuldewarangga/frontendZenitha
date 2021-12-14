import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Container, CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
  width: 150,
  height: 150,
  backgroundColor: 'blue',
  borderRadius: 3,
}));

function Body() {
  return (
    <>
      <Box
        position="inherit"
        sx={{ flexGrow: 1, height: 700, backgroundColor: 'pink' }}
      ></Box>
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: 300, mt: 10 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
            Kategori Produk
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 5 }}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Box>
      </Container>
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: 300, mt: 10 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
            Lagi Promo
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Body;
