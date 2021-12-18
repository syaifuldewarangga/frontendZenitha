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

function TagihanPage() {
  const [kurir, setKurir] = React.useState('');

  const handleChange = (event) => {
    setKurir(event.target.value);
  };
  return (
    <>
      <Container fixed>
        <Box
          sx={{
            height: 1500,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 20,
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                textDecoration: 'underline',
              }}
            >
              BERANDA
            </Typography>
            <Typography sx={{ fontSize: 12, mx: 1 }}>/</Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: 'gray',
              }}
            >
              Keranjang
            </Typography>
            <Typography sx={{ fontSize: 12, mx: 1 }}>/</Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: 'gray',
              }}
            >
              Tagihan
            </Typography>
          </Box>

          <Typography sx={{ fontWeight: 'bold', fontSize: 30, mt: 5 }}>
            Tagihan
          </Typography>
          <Box
            sx={{
              height: 450,
              display: 'flex',
              flexDirection: 'row',
              mt: 5,
              //   bgcolor: 'red',
            }}
          >
            <Box sx={{ width: '60%' }}>
              <Box
                sx={{
                  height: 50,
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottom: 1,
                  borderBottomColor: 'gray',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ml: 4,
                }}
              >
                <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>
                  Pengirim
                </Typography>
              </Box>
              <Box sx={{ height: 300, ml: 4 }}>
                <Typography sx={{ my: 3, fontSize: 20, fontWeight: 'bold' }}>
                  Nama Pengirim
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
                <Typography sx={{ my: 3, fontSize: 20, fontWeight: 'bold' }}>
                  No. Telpon Pengirim
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              </Box>

              <Box
                sx={{
                  height: 50,
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottom: 1,
                  borderBottomColor: 'gray',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ml: 4,
                }}
              >
                <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>
                  Penerima
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 100,
                  ml: 4,
                  display: 'flex',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FormControl component="fieldset">
                  <RadioGroup row aria-label="position" name="position">
                    <FormControlLabel
                      value="cod"
                      control={<Radio />}
                      label="Diambil Langsung (COD)"
                      sx={{ mr: 10 }}
                    />
                    <FormControlLabel
                      value="penerima"
                      control={<Radio />}
                      label="Dikirim ke Alamat Penerima"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>

              <Box
                sx={{
                  height: 50,
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottom: 1,
                  borderBottomColor: 'lightgrey',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ml: 4,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                  Alamat Penerima
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 250,
                  ml: 4,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderBottom: 1,
                    borderBottomColor: 'lightgrey',
                  }}
                >
                  <Typography sx={{ mt: 2 }}>Didi Maryadi</Typography>
                  <Typography>082121212121</Typography>
                  <Typography>Jl. Flamboyan No. 32</Typography>
                  <Typography sx={{ mb: 2 }}>
                    Pamulang, Kota Tanggerang Selatan, 15418
                  </Typography>
                </Box>
                <Button
                  sx={{
                    width: 200,
                    border: 1,
                    borderColor: 'black',
                    bgcolor: 'white',
                    mt: 2,
                    textTransform: 'capitalize',
                  }}
                >
                  <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                    Pilih Alamat Lain
                  </Typography>
                </Button>
              </Box>

              <Box
                sx={{
                  height: 50,
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottom: 1,
                  borderBottomColor: 'lightgrey',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ml: 4,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                  Daftar Belanjaan
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 250,
                  ml: 4,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottom: 1,
                    borderBottomColor: 'lightgrey',
                    // bgcolor: 'red',
                  }}
                >
                  <Box
                    sx={{
                      height: 100,
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      // bgcolor: 'green',
                    }}
                  >
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: 1,
                        bgcolor: 'white',
                        border: 1,
                        borderColor: 'purple',
                        mr: 3,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image="/assets/images/image 8.png"
                        sx={{ height: '100%', borderRadius: 1 }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: 300,
                        height: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                        UMMI 11 - Gamis Zenitha
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography sx={{ mr: 3, color: 'magenta' }}>
                          Warna: Abu - Abu
                        </Typography>
                        <Typography sx={{ color: 'magenta' }}>
                          Ukuran: L
                        </Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 'bold' }}>
                        Rp 112.980
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ width: '100%' }}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Opsi Kurir Ekspedisi
                      </InputLabel>
                      <Select
                        value={kurir}
                        onChange={handleChange}
                        displayEmpty
                        label="Opsi Kurir Ekspedisi"
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value={'jneoke'}>JNE OKE</MenuItem>
                        <MenuItem value={'jnereg'}>JEN REG</MenuItem>
                        <MenuItem value={'jneyes'}>JNE YES</MenuItem>
                        <MenuItem value={'jntez'}>JNT EZ</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold' }}>Subtotal</Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Rp 112.980
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ width: '30%', ml: 5 }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
                Total Belanja
              </Typography>
              <Box
                sx={{
                  height: 50,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: 1,
                  borderBottomStyle: 'dashed',
                  borderBottomColor: 'gray',
                }}
              >
                <Typography sx={{ color: 'gray' }}>
                  Total Harga (1 Produk)
                </Typography>
                <Typography sx={{ color: 'gray' }}>Rp 112.980</Typography>
              </Box>
              <Box
                sx={{
                  height: 50,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>Total Harga</Typography>
                <Typography sx={{ fontWeight: 'bold' }}>Rp 112.980</Typography>
              </Box>
              <Button
                sx={{
                  width: '100%',
                  border: 1,
                  borderColor: 'magenta',
                  bgcolor: 'magenta',
                  mt: 3,
                }}
                href="/checkout-page"
              >
                <Typography sx={{ color: 'white' }}>CHECKOUT (1)</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default TagihanPage;
