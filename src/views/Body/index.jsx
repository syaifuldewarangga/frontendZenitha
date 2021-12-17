import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CartIcon from '@mui/icons-material/ShoppingCart';
import FavIcon from '@mui/icons-material/FavoriteBorder';
import FavIconFill from '@mui/icons-material/Favorite';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

const settings2 = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

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

function Body() {
  return (
    <>
      <Box position="inherit" sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image="/assets/images/banner.jpg"
          alt="home banner"
          sx={{ paddingTop: 15 }}
        />
      </Box>
      <Container fixed>
        <Box
          sx={{
            height: 300,
            mt: 10,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
            Kategori Produk
          </Typography>

          <div>
            <Slider {...settings}>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/gamis.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Gamis
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/hijab.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Hijab
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/koko.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Koko
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/rok.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>Rok</Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/jaket.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Jaket
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/mukena.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Mukena
                </Typography>
              </div>

              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/manset.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Manset
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/masker.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Masker
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/bayiibu.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Bayi dan Ibu
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/atasan.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Atasan
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/sarimbit.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Sarimbit
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/kurta.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Kurta
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/kulot.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Kulot
                </Typography>
              </div>
              <div>
                <CardMedia
                  component="img"
                  width="50"
                  height="150"
                  image="/assets/images/kategoriimg/rompisholat.png"
                  alt="gamis icon"
                  sx={{ paddingTop: 5 }}
                />
                <Typography sx={{ fontWeight: 'bold', ml: 10 }}>
                  Rompi Sholat
                </Typography>
              </div>
            </Slider>
          </div>
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 500,
            mt: 10,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
            Lagi Promo
          </Typography>
          <Box
            sx={{
              height: 400,
              borderRadius: 2,
              mt: 3,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                width: '20%',
                bgcolor: 'black',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                zIndex: '990',
              }}
            />

            <Box
              sx={{
                width: '80%',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <div>
                <Slider {...settings2}>
                  <div>
                    <Box
                      sx={{
                        width: '90%',
                        height: 400,
                        ml: 2,
                      }}
                    >
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
                          height: 40,
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
                            width: 150,
                          }}
                        >
                          Beli
                        </Button>
                      </Box>
                    </Box>
                  </div>

                  <div>
                    <Box
                      sx={{
                        width: '90%',
                        height: 400,
                        ml: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="50%"
                        image="/assets/images/image 16.png"
                        sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                      />
                      <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                        Long Blouse Lavina 29
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
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
                          Rp.159.300
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
                        Rp.64.980
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
                            width: 150,
                          }}
                        >
                          Beli
                        </Button>
                      </Box>
                    </Box>
                  </div>

                  <div>
                    <Box
                      sx={{
                        width: '90%',
                        height: 400,
                        ml: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="50%"
                        image="/assets/images/image 12.png"
                        sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                      />
                      <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                        Long Blouse Adella 29
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
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
                          Rp.259.300
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
                        Rp.134.980
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
                            width: 150,
                          }}
                        >
                          Beli
                        </Button>
                      </Box>
                    </Box>
                  </div>

                  <div>
                    <Box
                      sx={{
                        width: '90%',
                        height: 400,
                        ml: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="50%"
                        image="/assets/images/image 13.png"
                        sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                      />
                      <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                        Long Blouse Lavina 08
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
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
                          Rp.159.300
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
                        Rp.64.980
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
                            width: 150,
                          }}
                        >
                          Beli
                        </Button>
                      </Box>
                    </Box>
                  </div>
                </Slider>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container fixed>
        <Box sx={{ height: 600, mt: 10 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20, mb: 3 }}>
            Produk terbaru
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
            width: 300,
            height: 50,
            fontSize: 20,
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
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              malesuada lorem. Nam iaculis lacinia ligula, ut faucibus mi
              maximus quis. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Pellentesque luctus ac nunc
              vitae molestie. Nullam viverra, elit vel lobortis lacinia, orci
              justo imperdiet mauris, facilisis gravida nibh risus ac leo. Donec
              quis nisl a mi venenatis sodales sit amet sed urna. Etiam massa
              tortor, suscipit nec ante feugiat, dapibus vulputate tortor.
            </Typography>
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

export default Body;
