import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, IconButton } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CartIcon from '@mui/icons-material/ShoppingCart';
import FavIcon from '@mui/icons-material/FavoriteBorder';
import FavIconFill from '@mui/icons-material/Favorite';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MinIcon from '@mui/icons-material/Remove';
import PlusIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

// const settings = {
//   dots: false,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 6,
//   slidesToScroll: 1,
// };

// const settings2 = {
//   dots: false,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 1,
// };

// const Item = styled(Paper)(({ theme }) => ({
//   width: 150,
//   height: 150,
//   // backgroundColor: 'blue',
//   borderRadius: 3,
//   borderWidth: 2,
//   borderColor: 'black',
//   textAlign: 'center',
//   boxShadow: 10,
// }));

function TagihanPage() {
  const [warna, setWarna] = React.useState('');

  const handleChange = (event) => {
    setWarna(event.target.value);
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
              >
                <Typography sx={{ color: 'white' }}>Beli (1)</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 600,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
            mb: 10,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
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
              height: 250,
              display: 'flex',
              flexDirection: 'row',
              mt: 5,
              // bgcolor: 'red',
            }}
          >
            <Box sx={{ width: '60%' }}>
              <Box
                sx={{
                  height: 50,
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottom: 2,
                  borderBottomColor: 'gray',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ml: 4,
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked color="secondary" />}
                    label="Pilih Semua"
                  />
                </FormGroup>
                <Typography
                  sx={{ fontWeight: 'bold', fontSize: 20, color: 'magenta' }}
                >
                  Hapus
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 100,
                  ml: 4,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Checkbox defaultChecked color="secondary" sx={{ ml: -1 }} />
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: 1,
                    bgcolor: 'white',
                    border: 1,
                    borderColor: 'purple',
                    mr: 3,
                    ml: 2,
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
                    <Typography sx={{ color: 'magenta' }}>Ukuran: L</Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Rp 112.980
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  height: 30,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  ml: 4,
                }}
              >
                <Typography sx={{ mr: 2, width: 150 }}>
                  Pindah ke Wishlist
                </Typography>
                <IconButton>
                  <FavIconFill />
                </IconButton>
                <Box
                  sx={{ height: 1, border: 1, borderColor: 'gray', mx: 2 }}
                />
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <Box
                  sx={{
                    width: 150,
                    height: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    ml: 30,
                  }}
                >
                  <Box
                    sx={{
                      width: '31%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: 1,
                      borderColor: 'purple',
                    }}
                  >
                    <IconButton>
                      <MinIcon sx={{ color: 'purple' }} />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      width: '34%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: 3,
                      mx: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '31%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: 1,
                      borderColor: 'purple',
                    }}
                  >
                    <IconButton>
                      <PlusIcon sx={{ color: 'purple' }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default TagihanPage;
