import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CheckoutPage() {
  return (
    <>
      <Container fixed>
        <Box
          sx={{
            height: 1300,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
            // bgcolor: 'blue',
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
              Pembelian
            </Typography>
          </Box>

          <Box
            sx={{
              height: '30%',
              width: '100%',
              mt: 5,
              display: 'flex',
              flexDirection: 'row',
              //   bgcolor: 'green',
            }}
          >
            <Box sx={{ width: '40%' }}>
              <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
                  Lakukan Pembayaran Dalam
                </Typography>
                <Typography
                  sx={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}
                >
                  23 : 52 : 46
                </Typography>
                <Typography sx={{ fontSize: 20, color: 'gray' }}>
                  Batas Akhir Pembayaran
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                  Minggu, 25 Juli 2021 08:28
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: '60%' }}>
              <Box
                sx={{
                  border: 1,
                  borderColor: 'gray',
                  borderRadius: 2,
                  height: '60%',
                }}
              >
                <Box
                  sx={{
                    height: '20%',
                    borderBottom: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ ml: 3, fontWeight: 'bold' }}>
                    Bank BRI (Dicek Otomatis)
                  </Typography>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: 'blue',
                      mr: 3,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    height: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      height: '20%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 1,
                      mx: 3,
                      //   bgcolor: 'green',
                    }}
                  >
                    <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                      No. Order
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>#DSAF34</Typography>
                  </Box>

                  <Box
                    sx={{
                      height: '20%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      //   bgcolor: 'green',
                    }}
                  >
                    <Box sx={{ ml: 3 }}>
                      <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                        Kode Pembayaran
                      </Typography>
                      <Typography sx={{ fontWeight: 'bold' }}>
                        2132143215
                      </Typography>
                    </Box>
                    <Button
                      sx={{ mr: 3, fontWeight: 'bold', color: 'magenta' }}
                    >
                      SALIN
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      height: '20%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ ml: 3 }}>
                      <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                        Total Pembayaran
                      </Typography>
                      <Typography sx={{ fontWeight: 'bold' }}>
                        Rp 120.980
                      </Typography>
                    </Box>
                    <Button
                      sx={{ mr: 3, fontWeight: 'bold', color: 'magenta' }}
                    >
                      Lihat Detail
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  mt: 3,
                  height: 70,
                }}
              >
                <Button
                  sx={{
                    width: '49%',
                    border: 1,
                    borderColor: 'magenta',
                    bgcolor: 'white',
                    textTransform: 'capitalize',
                  }}
                  href="/"
                >
                  <Typography
                    sx={{ color: 'purple', fontWeight: 'bold', fontSize: 20 }}
                  >
                    Belanja Lagi
                  </Typography>
                </Button>

                <Button
                  sx={{
                    width: '49%',
                    border: 1,
                    borderColor: 'magenta',
                    bgcolor: 'magenta',
                    textTransform: 'capitalize',
                  }}
                >
                  <Typography
                    sx={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                  >
                    Cek Status Orderan
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>

          <Box sx={{ height: '30%' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
              Cara Pembayaran
            </Typography>
            <Typography sx={{ color: 'gray' }}>
              Pembayaran dapat juga dilakukan dengan metode dibawah ini dengan
              biaya layanan sebagai berikut:
            </Typography>
            <Box
              sx={{
                height: '30%',
                borderTop: 1,
                mt: 1,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  height: '90%',
                  width: '10%',
                  borderRadius: 2,
                  borderColor: 'blue',
                  border: 1,
                }}
              />
              <Typography
                sx={{ width: '70%', fontWeight: 'bold', fontSize: 20 }}
              >
                Bank BRI (Dicek Otomatis)
              </Typography>
              <Typography sx={{ color: 'gray', fontSize: 20 }}>
                Rp 1.000
              </Typography>
            </Box>

            <Box
              sx={{
                height: '30%',
                borderTop: 1,
                mt: 1,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  height: '90%',
                  width: '10%',
                  borderRadius: 2,
                  borderColor: 'blue',
                  border: 1,
                }}
              />
              <Typography
                sx={{ width: '70%', fontWeight: 'bold', fontSize: 20 }}
              >
                Bank BNI (Dicek Otomatis)
              </Typography>
              <Typography sx={{ color: 'gray', fontSize: 20 }}>
                Rp 1.000
              </Typography>
            </Box>

            <Box
              sx={{
                height: '30%',
                borderTop: 1,
                mt: 1,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  height: '90%',
                  width: '10%',
                  borderRadius: 2,
                  borderColor: 'blue',
                  border: 1,
                }}
              />
              <Typography
                sx={{ width: '70%', fontWeight: 'bold', fontSize: 20 }}
              >
                Bank BCA (Dicek Otomatis)
              </Typography>
              <Typography sx={{ color: 'gray', fontSize: 20 }}>
                Rp 1.000
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ color: 'gray', mt: 10 }}>Catatan</Typography>
          <Typography
            sx={{
              color: 'gray',
              ml: 1,
              mt: 2,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            •
            <Typography sx={{ fontWeight: 'bold', mx: 1 }}>
              Simpan bukti pembayaran
            </Typography>
            yang sewaktu-waktu diperlukan jika terjadi kendala transaksi
          </Typography>
          <Typography
            sx={{
              color: 'gray',
              ml: 1,
              mt: 2,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            • Pesanan
            <Typography sx={{ color: 'red', mx: 1 }}>
              otomatis dibatalkan
            </Typography>
            apabila tidak melakukan pembayaran lebih dari 2 hari setelah kode
            pembayaran diberikan
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default CheckoutPage;
