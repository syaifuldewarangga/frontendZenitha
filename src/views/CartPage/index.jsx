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
import MinIcon from '@mui/icons-material/Remove';
import PlusIcon from '@mui/icons-material/Add';

function CartPage() {
  return (
    <>
      <Container fixed>
        <Box
          sx={{
            height: 600,
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
          </Box>

          <Typography sx={{ fontWeight: 'bold', fontSize: 30, mt: 5 }}>
            Keranjang
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
                href="/tagihan-page"
              >
                <Typography sx={{ color: 'white' }}>Beli (1)</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container fixed>
        <Box sx={{ height: 600, mt: 5, mb: 20 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20, mb: 3 }}>
            Rekomendasi Untukmu
          </Typography>
          <Box
            sx={{
              height: '50%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '20%',
                height: '100%',
                ml: 2,
                boxShadow: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  bgcolor: 'gray',
                  opacity: 0.5,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  ml: 22,
                  mt: 1,
                }}
              >
                <FavIcon sx={{ color: 'white' }} />
              </Box>
              <CardMedia
                component="img"
                height="50%"
                image="/assets/images/image 8.png"
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                UMMI 11
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 20,
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingX: 2,
                    fontWeight: 'bold',
                    color: 'purple',
                    fontSize: 13,
                  }}
                >
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 13,
                  }}
                >
                  Rp.188.300
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 20,
                  paddingLeft: 1,
                }}
              >
                Rp.122.980
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  ml: 1,
                  mt: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    mr: 3,
                  }}
                >
                  <CartIcon sx={{ color: 'purple' }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    flexDirection: 'column-reverse',
                    textTransform: 'capitalize',
                    width: 120,
                  }}
                >
                  Beli
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                width: '20%',
                height: '100%',
                ml: 2,
                boxShadow: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  bgcolor: 'gray',
                  opacity: 0.5,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  ml: 22,
                  mt: 1,
                }}
              >
                <FavIconFill sx={{ color: 'red' }} />
              </Box>
              <CardMedia
                component="img"
                height="50%"
                image="/assets/images/image 8.png"
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                UMMI 11
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 20,
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingX: 2,
                    fontWeight: 'bold',
                    color: 'purple',
                    fontSize: 13,
                  }}
                >
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 13,
                  }}
                >
                  Rp.188.300
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 20,
                  paddingLeft: 1,
                }}
              >
                Rp.122.980
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  ml: 1,
                  mt: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    mr: 3,
                  }}
                >
                  <CartIcon sx={{ color: 'purple' }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    flexDirection: 'column-reverse',
                    textTransform: 'capitalize',
                    width: 120,
                  }}
                >
                  Beli
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                width: '20%',
                height: '100%',
                ml: 2,
                boxShadow: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  bgcolor: 'gray',
                  opacity: 0.5,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  ml: 22,
                  mt: 1,
                }}
              >
                <FavIcon sx={{ color: 'white' }} />
              </Box>
              <CardMedia
                component="img"
                height="50%"
                image="/assets/images/image 8.png"
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                UMMI 11
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 20,
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingX: 2,
                    fontWeight: 'bold',
                    color: 'purple',
                    fontSize: 13,
                  }}
                >
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 13,
                  }}
                >
                  Rp.188.300
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 20,
                  paddingLeft: 1,
                }}
              >
                Rp.122.980
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  ml: 1,
                  mt: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    mr: 3,
                  }}
                >
                  <CartIcon sx={{ color: 'purple' }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    flexDirection: 'column-reverse',
                    textTransform: 'capitalize',
                    width: 120,
                  }}
                >
                  Beli
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                width: '20%',
                height: '100%',
                ml: 2,
                boxShadow: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  bgcolor: 'gray',
                  opacity: 0.5,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  ml: 22,
                  mt: 1,
                }}
              >
                <FavIcon sx={{ color: 'white' }} />
              </Box>
              <CardMedia
                component="img"
                height="50%"
                image="/assets/images/image 8.png"
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                UMMI 11
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 20,
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingX: 2,
                    fontWeight: 'bold',
                    color: 'purple',
                    fontSize: 13,
                  }}
                >
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 13,
                  }}
                >
                  Rp.188.300
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 20,
                  paddingLeft: 1,
                }}
              >
                Rp.122.980
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  ml: 1,
                  mt: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    mr: 3,
                  }}
                >
                  <CartIcon sx={{ color: 'purple' }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    flexDirection: 'column-reverse',
                    textTransform: 'capitalize',
                    width: 120,
                  }}
                >
                  Beli
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: '50%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 5,
            }}
          >
            <Box
              sx={{
                width: '20%',
                height: '100%',
                ml: 2,
                boxShadow: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  bgcolor: 'gray',
                  opacity: 0.5,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  ml: 22,
                  mt: 1,
                }}
              >
                <FavIconFill sx={{ color: 'red' }} />
              </Box>
              <CardMedia
                component="img"
                height="50%"
                image="/assets/images/image 8.png"
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                UMMI 11
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 20,
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingX: 2,
                    fontWeight: 'bold',
                    color: 'purple',
                    fontSize: 13,
                  }}
                >
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 13,
                  }}
                >
                  Rp.188.300
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 20,
                  paddingLeft: 1,
                }}
              >
                Rp.122.980
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  ml: 1,
                  mt: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    mr: 3,
                  }}
                >
                  <CartIcon sx={{ color: 'purple' }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    flexDirection: 'column-reverse',
                    textTransform: 'capitalize',
                    width: 120,
                  }}
                >
                  Beli
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                width: '20%',
                height: '100%',
                ml: 2,
                boxShadow: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  bgcolor: 'gray',
                  opacity: 0.5,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  ml: 22,
                  mt: 1,
                }}
              >
                <FavIconFill sx={{ color: 'red' }} />
              </Box>
              <CardMedia
                component="img"
                height="50%"
                image="/assets/images/image 8.png"
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                UMMI 11
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 20,
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingX: 2,
                    fontWeight: 'bold',
                    color: 'purple',
                    fontSize: 13,
                  }}
                >
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 13,
                  }}
                >
                  Rp.188.300
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 20,
                  paddingLeft: 1,
                }}
              >
                Rp.122.980
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  ml: 1,
                  mt: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    mr: 3,
                  }}
                >
                  <CartIcon sx={{ color: 'purple' }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    flexDirection: 'column-reverse',
                    textTransform: 'capitalize',
                    width: 120,
                  }}
                >
                  Beli
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                width: '20%',
                height: '100%',
                ml: 2,
                boxShadow: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  bgcolor: 'gray',
                  opacity: 0.5,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  ml: 22,
                  mt: 1,
                }}
              >
                <FavIconFill sx={{ color: 'red' }} />
              </Box>
              <CardMedia
                component="img"
                height="50%"
                image="/assets/images/image 8.png"
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                UMMI 11
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 20,
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingX: 2,
                    fontWeight: 'bold',
                    color: 'purple',
                    fontSize: 13,
                  }}
                >
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 13,
                  }}
                >
                  Rp.188.300
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 20,
                  paddingLeft: 1,
                }}
              >
                Rp.122.980
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  ml: 1,
                  mt: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    mr: 3,
                  }}
                >
                  <CartIcon sx={{ color: 'purple' }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    flexDirection: 'column-reverse',
                    textTransform: 'capitalize',
                    width: 120,
                  }}
                >
                  Beli
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                width: '20%',
                height: '100%',
                ml: 2,
                boxShadow: 5,
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  bgcolor: 'gray',
                  opacity: 0.5,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  ml: 22,
                  mt: 1,
                }}
              >
                <FavIcon sx={{ color: 'white' }} />
              </Box>
              <CardMedia
                component="img"
                height="50%"
                image="/assets/images/image 8.png"
                sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                UMMI 11
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 20,
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    paddingX: 2,
                    fontWeight: 'bold',
                    color: 'purple',
                    fontSize: 13,
                  }}
                >
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 13,
                  }}
                >
                  Rp.188.300
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontSize: 20,
                  paddingLeft: 1,
                }}
              >
                Rp.122.980
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  ml: 1,
                  mt: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    mr: 3,
                  }}
                >
                  <CartIcon sx={{ color: 'purple' }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'purple',
                    flexDirection: 'column-reverse',
                    textTransform: 'capitalize',
                    width: 120,
                  }}
                >
                  Beli
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default CartPage;
