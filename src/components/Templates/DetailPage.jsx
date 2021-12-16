import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, IconButton } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Body.css';
import CartIcon from '@mui/icons-material/ShoppingCart';
import FavIcon from '@mui/icons-material/FavoriteBorder';
import FavIconFill from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

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

function DetailPage() {
  return (
    <>
      <Container fixed>
        <Box sx={{ height: 600, borderBottom: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 17,
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
                textDecoration: 'underline',
              }}
            >
              DETAIL PRODUK
            </Typography>
            <Typography sx={{ fontSize: 12, mx: 1 }}>/</Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: 'gray',
              }}
            >
              UMMI 11
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: 400,
              mt: 4,
            }}
          >
            <Box
              sx={{
                width: '10%',
                mr: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  height: '23%',
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 1,
                  borderColor: 'purple',
                }}
              ></Box>
              <Box
                sx={{
                  height: '23%',
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 1,
                  borderColor: 'purple',
                }}
              ></Box>
              <Box
                sx={{
                  height: '23%',
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 1,
                  borderColor: 'purple',
                }}
              ></Box>
              <Box
                sx={{
                  height: '23%',
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 1,
                  borderColor: 'purple',
                }}
              ></Box>
            </Box>

            <Box sx={{ width: '45%', mr: 5 }}>
              <CardMedia
                component="img"
                image="/assets/images/image 8.png"
                sx={{
                  height: '95%',
                  border: 1,
                  borderColor: 'purple',
                  borderRadius: 1,
                }}
              />
            </Box>

            <Box sx={{ width: '45%' }}>
              <Box
                sx={{
                  height: '30%',
                  borderBottom: 1,
                  borderBottomColor: 'lightgrey',
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
                      fontSize: 17,
                    }}
                  >
                    Kode Produk
                  </Typography>
                  <Typography sx={{ fontSize: 17, mx: 1 }}>:</Typography>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: 'bold',
                    }}
                  >
                    3393
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 30, fontWeight: 'bold', my: 1 }}>
                  Ummi 11 - Gamis Zenitha
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 15,
                    }}
                  >
                    Stok Tersedia
                  </Typography>
                  <Typography sx={{ fontSize: 15, mr: 1 }}>:</Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}
                  >
                    3
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  borderBottom: 1,
                  borderBottomColor: 'lightgrey',
                }}
              >
                <Typography sx={{ fontSize: 17, my: 1, color: 'gray' }}>
                  Harga:
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      color: 'red',
                      fontWeight: 'bold',
                      mr: 1,
                    }}
                  >
                    Rp112.980
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 20,
                      color: 'gray',
                      fontWeight: 'bold',
                      textDecoration: 'line-through',
                    }}
                  >
                    Rp188.300
                  </Typography>
                </Box>
                <IconButton sx={{ mt: -10, ml: 60 }}>
                  <ShareIcon />
                </IconButton>
              </Box>
              <Box sx={{ height: '50%' }}>
                <Box
                  sx={{
                    height: '33%',
                    bgcolor: 'red',
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <Box sx={{ width: '50%', bgcolor: 'red' }}>
                    <Typography>Quantity</Typography>
                  </Box>
                  <Box sx={{ width: '50%', bgcolor: 'blue' }}>
                    <Typography>Warna</Typography>
                  </Box>
                </Box>
                <Box sx={{ height: '33%', bgcolor: 'green' }}></Box>
                <Box sx={{ height: '33%', bgcolor: 'blue' }}></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container fixed>
        <Box sx={{ height: 500, mt: 10, boxShadow: 2 }}></Box>
      </Container>

      <Container fixed>
        <Box sx={{ height: 600, mt: 10, boxShadow: 2 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20, mb: 3 }}>
            Produk Serupa
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
        </Box>
      </Container>

      <Container fixed>
        <Box sx={{ height: 600, mt: 10, boxShadow: 2 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20, mb: 3 }}>
            Produk Serupa
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
        </Box>
      </Container>

      <Container
        fixed
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Button
          variant="outlined"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            borderColor: 'black',
            textTransform: 'capitalize',
            alignSelf: 'center',
            mt: 20,
            mb: 10,
            width: 150,
          }}
        >
          Lihat Semua
        </Button>
      </Container>

      <Box
        sx={{
          height: 400,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <CardMedia
          component="img"
          image="/assets/images/bottombanner.jpg"
          sx={{ mr: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
          alt="home banner"
        />
        <CardMedia
          component="img"
          image="/assets/images/bottombanner2.jpg"
          sx={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          alt="home banner"
        />
      </Box>

      <Container fixed>
        <Box
          sx={{
            height: 400,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              width: '50%',
              // height: '100%',
              mr: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: 30, mb: 1 }}>
              BRAND YANG TERSEDIA DI TOKO KAMI
            </Typography>
            {/* <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              malesuada lorem. Nam iaculis lacinia ligula, ut faucibus mi
              maximus quis. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Pellentesque luctus ac nunc
              vitae molestie. Nullam viverra, elit vel lobortis lacinia, orci
              justo imperdiet mauris, facilisis gravida nibh risus ac leo. Donec
              quis nisl a mi venenatis sodales sit amet sed urna. Etiam massa
              tortor, suscipit nec ante feugiat, dapibus vulputate tortor.
            </Typography> */}
          </Box>
          <Box sx={{ width: '50%' }}>
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo1.png"
              sx={{ width: 120, height: 50, ml: 2, mt: 10 }}
            />
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo3.png"
              sx={{ width: 125, height: 60, ml: 40, mt: -6 }}
            />
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo4.png"
              sx={{ width: 150, height: 60, ml: 2, mt: 15 }}
            />
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo5.png"
              sx={{
                width: 135,
                height: 140,
                ml: 25,
                mt: -25,
                borderRadius: 10,
              }}
            />
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo2.png"
              sx={{
                width: 145,
                height: 145,
                ml: 50,
                mt: -10,
                borderRadius: 10,
              }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default DetailPage;
