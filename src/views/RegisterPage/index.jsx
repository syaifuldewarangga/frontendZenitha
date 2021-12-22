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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function RegisterPage() {
  const [kurir, setKurir] = React.useState('');

  const handleChange = (event) => {
    setKurir(event.target.value);
  };

  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
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

          <Box sx={{ width: '100%', mt: 5 }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChangeTabs}
                aria-label="basic tabs example"
                indicatorColor="secondary"
                textColor="black"
              >
                <Tab
                  label="Masuk"
                  {...a11yProps(0)}
                  sx={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    mr: 5,
                  }}
                />
                <Tab
                  label="Daftar"
                  {...a11yProps(1)}
                  sx={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    mr: 5,
                  }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
          </Box>
        </Box>
        <Box sx={{ width: '70%' }}></Box>
      </Box>
    </>
  );
}

export default RegisterPage;
