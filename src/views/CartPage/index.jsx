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
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

function CartPage() {
  const theme = useTheme();
  return (
    <>
      <Container fixed>
        <Box
          sx={{
            height: 600,
            [theme.breakpoints.down('md')]: {
              height: 600,
              width: 900,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 20,
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 16,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                textDecoration: 'underline',
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  textDecoration: 'underline',
                },
              }}
            >
              BERANDA
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                mx: 1,
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  mx: 1,
                },
              }}
            >
              /
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: 'gray',
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  color: 'gray',
                },
              }}
            >
              Keranjang
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: 30,
              mt: 5,
              [theme.breakpoints.down('md')]: {
                fontWeight: 'bold',
                fontSize: 50,
                mt: 5,
              },
            }}
          >
            Keranjang
          </Typography>

          <Box
            sx={{
              height: 250,
              display: 'flex',
              flexDirection: 'row',
              mt: 5,
              [theme.breakpoints.down('md')]: {
                height: 500,
                display: 'flex',
                flexDirection: 'column',
                mt: 5,
              },
            }}
          >
            <Box
              sx={{
                width: '60%',
                [theme.breakpoints.down('md')]: {
                  width: '95%',
                },
              }}
            >
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
                  [theme.breakpoints.down('md')]: {
                    height: 60,
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: 2,
                    borderBottomColor: 'gray',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ml: 4,
                  },
                }}
              >
                <FormGroup
                  sx={{
                    [theme.breakpoints.down('md')]: {
                      transform: 'scale(1.5)',
                      ml: 4,
                    },
                  }}
                >
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
                  [theme.breakpoints.down('md')]: {
                    height: 150,
                    ml: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  },
                }}
              >
                <Checkbox
                  defaultChecked
                  color="secondary"
                  sx={{
                    ml: -1,
                    [theme.breakpoints.down('md')]: {
                      transform: 'scale(1.5)',
                    },
                  }}
                />
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
                    [theme.breakpoints.down('md')]: {
                      width: 120,
                      height: 120,
                      borderRadius: 1,
                      bgcolor: 'white',
                      border: 1,
                      borderColor: 'purple',
                      mr: 3,
                      ml: 2,
                      mt: 2,
                    },
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
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: 'gray',
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                        color: 'gray',
                        fontSize: 25,
                      },
                    }}
                  >
                    UMMI 11 - Gamis Zenitha
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      [theme.breakpoints.down('md')]: {
                        display: 'flex',
                        flexDirection: 'row',
                        width: 500,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        mr: 3,
                        color: 'magenta',
                        [theme.breakpoints.down('md')]: {
                          mr: 3,
                          color: 'magenta',
                          fontSize: 25,
                        },
                      }}
                    >
                      Warna: Abu - Abu
                    </Typography>
                    <Typography
                      sx={{
                        color: 'magenta',
                        [theme.breakpoints.down('md')]: {
                          color: 'magenta',
                          fontSize: 25,
                        },
                      }}
                    >
                      Ukuran: L
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                        fontSize: 25,
                      },
                    }}
                  >
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
                  [theme.breakpoints.down('md')]: {
                    height: 60,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    ml: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    mr: 2,
                    width: 150,
                    [theme.breakpoints.down('md')]: {
                      mr: 2,
                      width: 200,
                      fontSize: 20,
                    },
                  }}
                >
                  Pindah ke Wishlist
                </Typography>
                <IconButton>
                  <FavIconFill
                    sx={{
                      [theme.breakpoints.down('md')]: {
                        fontSize: 30,
                      },
                    }}
                  />
                </IconButton>
                <Box
                  sx={{
                    height: 1,
                    border: 1,
                    borderColor: 'gray',
                    mx: 2,
                    [theme.breakpoints.down('md')]: {
                      height: '50%',
                      border: 1,
                      borderColor: 'gray',
                      mx: 2,
                    },
                  }}
                />
                <IconButton>
                  <DeleteIcon
                    sx={{
                      [theme.breakpoints.down('md')]: {
                        fontSize: 30,
                        mr: 10,
                      },
                    }}
                  />
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

            <Muncul>
              <Box sx={{ width: '95%', ml: 2, mt: 5 }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    [theme.breakpoints.down('md')]: {
                      fontWeight: 'bold',
                      fontSize: 30,
                    },
                  }}
                >
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
                  <Typography
                    sx={{
                      color: 'gray',
                      [theme.breakpoints.down('md')]: {
                        color: 'gray',
                        fontSize: 20,
                      },
                    }}
                  >
                    Total Harga (1 Produk)
                  </Typography>
                  <Typography
                    sx={{
                      color: 'gray',
                      [theme.breakpoints.down('md')]: {
                        color: 'gray',
                        fontSize: 20,
                      },
                    }}
                  >
                    Rp 112.980
                  </Typography>
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
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                        fontSize: 20,
                      },
                    }}
                  >
                    Total Harga
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                        fontSize: 20,
                      },
                    }}
                  >
                    Rp 112.980
                  </Typography>
                </Box>
                <Link to="/tagihan-page">
                  <Button
                    sx={{
                      width: '100%',
                      border: 1,
                      borderColor: 'magenta',
                      bgcolor: 'magenta',
                      mt: 3,
                      [theme.breakpoints.down('md')]: {
                        width: '80%',
                        height: 80,
                        border: 1,
                        borderColor: 'magenta',
                        bgcolor: 'magenta',
                        mt: 5,
                        ml: 11,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'white',
                        [theme.breakpoints.down('md')]: {
                          color: 'white',
                          fontSize: 25,
                          fontWeight: 'bold',
                        },
                      }}
                    >
                      Beli (1)
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Muncul>

            <Hilang>
              <Box sx={{ width: '100%', ml: 5 }}>
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
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Total Harga
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Rp 112.980
                  </Typography>
                </Box>
                <Link to="/tagihan-page">
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
                </Link>
              </Box>
            </Hilang>
          </Box>
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 600,
            mt: 5,
            mb: 20,
            [theme.breakpoints.down('md')]: {
              height: 600,
              width: 900,
              mt: 40,
              mb: 20,
            },
          }}
        >
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
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    bgcolor: 'gray',
                    opacity: 0.5,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    ml: 16,
                    mt: 1,
                  },
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
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'purple',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'purple',
                      flexDirection: 'column-reverse',
                      textTransform: 'capitalize',
                      width: 70,
                    },
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
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    bgcolor: 'gray',
                    opacity: 0.5,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    ml: 16,
                    mt: 1,
                  },
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
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'purple',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'purple',
                      flexDirection: 'column-reverse',
                      textTransform: 'capitalize',
                      width: 70,
                    },
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
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    bgcolor: 'gray',
                    opacity: 0.5,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    ml: 16,
                    mt: 1,
                  },
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
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'purple',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'purple',
                      flexDirection: 'column-reverse',
                      textTransform: 'capitalize',
                      width: 70,
                    },
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
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    bgcolor: 'gray',
                    opacity: 0.5,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    ml: 16,
                    mt: 1,
                  },
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
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'purple',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'purple',
                      flexDirection: 'column-reverse',
                      textTransform: 'capitalize',
                      width: 70,
                    },
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
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    bgcolor: 'gray',
                    opacity: 0.5,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    ml: 16,
                    mt: 1,
                  },
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
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'purple',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'purple',
                      flexDirection: 'column-reverse',
                      textTransform: 'capitalize',
                      width: 70,
                    },
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
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    bgcolor: 'gray',
                    opacity: 0.5,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    ml: 16,
                    mt: 1,
                  },
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
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'purple',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'purple',
                      flexDirection: 'column-reverse',
                      textTransform: 'capitalize',
                      width: 70,
                    },
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
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    bgcolor: 'gray',
                    opacity: 0.5,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    ml: 16,
                    mt: 1,
                  },
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
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'purple',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'purple',
                      flexDirection: 'column-reverse',
                      textTransform: 'capitalize',
                      width: 70,
                    },
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
                  [theme.breakpoints.down('md')]: {
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    bgcolor: 'gray',
                    opacity: 0.5,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    ml: 16,
                    mt: 1,
                  },
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
                    [theme.breakpoints.down('md')]: {
                      backgroundColor: 'purple',
                      color: 'white',
                      fontWeight: 'bold',
                      borderColor: 'purple',
                      flexDirection: 'column-reverse',
                      textTransform: 'capitalize',
                      width: 70,
                    },
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
