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

function TagihanPage() {
  const [kurir, setKurir] = React.useState('');

  const handleChange = (event) => {
    setKurir(event.target.value);
  };

  const theme = useTheme();
  return (
    <>
      <Container fixed>
        <Box
          sx={{
            height: 1500,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
            [theme.breakpoints.down('md')]: {
              height: 1600,
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
                paddingTop: 17,
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
              Tagihan
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: 30,
              mt: 5,
              [theme.breakpoints.down('md')]: {
                fontWeight: 'bold',
                fontSize: 40,
                mt: 5,
              },
            }}
          >
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
                  [theme.breakpoints.down('md')]: {
                    height: 70,
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: 1,
                    borderBottomColor: 'gray',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ml: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 35,
                      fontWeight: 'bold',
                    },
                  }}
                >
                  Pengirim
                </Typography>
              </Box>
              <Box sx={{ height: 300, ml: 4 }}>
                <Typography
                  sx={{
                    my: 3,
                    fontSize: 20,
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                      my: 3,
                      fontSize: 25,
                      fontWeight: 'bold',
                    },
                  }}
                >
                  Nama Pengirim
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    width: '100%',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 30,
                    },
                  }}
                />
                <Typography
                  sx={{
                    my: 3,
                    fontSize: 20,
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                      my: 3,
                      fontSize: 25,
                      fontWeight: 'bold',
                    },
                  }}
                >
                  No. Telpon Pengirim
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    width: '100%',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 30,
                    },
                  }}
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
                  [theme.breakpoints.down('md')]: {
                    height: 50,
                    width: 850,
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: 1,
                    borderBottomColor: 'gray',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ml: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 35,
                      fontWeight: 'bold',
                    },
                  }}
                >
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
                  [theme.breakpoints.down('md')]: {
                    height: 100,
                    ml: 4,
                    display: 'flex',
                    width: 850,
                    alignItems: 'center',
                  },
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
                  [theme.breakpoints.down('md')]: {
                    height: 50,
                    width: 850,
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: 1,
                    borderBottomColor: 'gray',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ml: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 25,
                      fontWeight: 'bold',
                    },
                  }}
                >
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
                    [theme.breakpoints.down('md')]: {
                      width: 850,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderBottom: 1,
                      borderBottomColor: 'gray',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      mt: 2,
                      [theme.breakpoints.down('md')]: {
                        fontSize: 20,
                        mt: 2,
                      },
                    }}
                  >
                    Didi Maryadi
                  </Typography>
                  <Typography
                    sx={{
                      [theme.breakpoints.down('md')]: {
                        fontSize: 20,
                      },
                    }}
                  >
                    082121212121
                  </Typography>
                  <Typography
                    sx={{
                      [theme.breakpoints.down('md')]: {
                        fontSize: 20,
                      },
                    }}
                  >
                    Jl. Flamboyan No. 32
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2,
                      [theme.breakpoints.down('md')]: {
                        fontSize: 20,
                        mb: 2,
                      },
                    }}
                  >
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
                    [theme.breakpoints.down('md')]: {
                      width: 200,
                      height: 70,
                      border: 1,
                      borderColor: 'black',
                      bgcolor: 'white',
                      mt: 3,
                      textTransform: 'capitalize',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: 'black',
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 20,
                      },
                    }}
                  >
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
                  [theme.breakpoints.down('md')]: {
                    height: 50,
                    width: 850,
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: 1,
                    borderBottomColor: 'gray',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ml: 4,
                    mt: 2,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 25,
                      fontWeight: 'bold',
                    },
                  }}
                >
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
                    [theme.breakpoints.down('md')]: {
                      width: 850,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderBottom: 1,
                      borderBottomColor: 'gray',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 100,
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      [theme.breakpoints.down('md')]: {
                        height: 150,
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      },
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
                        [theme.breakpoints.down('md')]: {
                          width: 110,
                          height: 110,
                          borderRadius: 1,
                          bgcolor: 'white',
                          border: 1,
                          borderColor: 'purple',
                          mr: 3,
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
                        [theme.breakpoints.down('md')]: {
                          width: 300,
                          height: 150,
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          color: 'gray',
                          [theme.breakpoints.down('md')]: {
                            fontWeight: 'bold',
                            color: 'gray',
                            fontSize: 20,
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
                            my: 2,
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
                              fontSize: 20,
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
                              fontSize: 20,
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
                            fontSize: 20,
                          },
                        }}
                      >
                        Rp 112.980
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ width: '100%' }}>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel
                        id="demo-simple-select-helper-label"
                        sx={{
                          [theme.breakpoints.down('md')]: {
                            fontSize: 20,
                          },
                        }}
                      >
                        Opsi Kurir Ekspedisi
                      </InputLabel>
                      <Select
                        value={kurir}
                        onChange={handleChange}
                        displayEmpty
                        label="Opsi Kurir Ekspedisi"
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem
                          value={'jneoke'}
                          sx={{
                            [theme.breakpoints.down('md')]: {
                              fontSize: 20,
                            },
                          }}
                        >
                          JNE OKE
                        </MenuItem>
                        <MenuItem
                          value={'jnereg'}
                          sx={{
                            [theme.breakpoints.down('md')]: {
                              fontSize: 20,
                            },
                          }}
                        >
                          JEN REG
                        </MenuItem>
                        <MenuItem
                          value={'jneyes'}
                          sx={{
                            [theme.breakpoints.down('md')]: {
                              fontSize: 20,
                            },
                          }}
                        >
                          JNE YES
                        </MenuItem>
                        <MenuItem
                          value={'jntez'}
                          sx={{
                            [theme.breakpoints.down('md')]: {
                              fontSize: 20,
                            },
                          }}
                        >
                          JNT EZ
                        </MenuItem>
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
                    [theme.breakpoints.down('md')]: {
                      height: 60,
                      width: 850,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        fontSize: 25,
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    Subtotal
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        fontSize: 25,
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    Rp 112.980
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ width: '30%', ml: 5 }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  [theme.breakpoints.down('md')]: {
                    fontSize: 30,
                    fontWeight: 'bold',
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
                  [theme.breakpoints.down('md')]: {
                    height: 50,
                    width: 300,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: 1,
                    borderBottomStyle: 'dashed',
                    borderBottomColor: 'gray',
                    mt: 2,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: 'gray',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 17,
                      color: 'gray',
                    },
                  }}
                >
                  Total Harga (1 Produk)
                </Typography>
                <Typography
                  sx={{
                    color: 'gray',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 17,
                      color: 'gray',
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
                  [theme.breakpoints.down('md')]: {
                    height: 50,
                    width: 300,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                    borderBottomColor: 'gray',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 17,
                      fontWeight: 'bold',
                    },
                  }}
                >
                  Total Harga
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 17,
                      fontWeight: 'bold',
                    },
                  }}
                >
                  Rp 112.980
                </Typography>
              </Box>
              <Link to="/checkout-page">
                <Button
                  sx={{
                    width: '100%',
                    border: 1,
                    borderColor: 'magenta',
                    bgcolor: 'magenta',
                    mt: 3,
                    [theme.breakpoints.down('md')]: {
                      width: '100%',
                      height: 60,
                      border: 1,
                      borderColor: 'magenta',
                      bgcolor: 'magenta',
                      mt: 3,
                      ml: 3,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      [theme.breakpoints.down('md')]: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    CHECKOUT (1)
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default TagihanPage;
