import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import logo from '../../assets/logos/logo.svg'

const Footer = () => {
  return (
    <Box component='footer' >
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Box >
            <img src={logo} alt='logo' />
            <Typography variant="h6" color='secondary' fontSize={"20px"} px={1}>
              PizzaHut
            </Typography>
          </Box>
        </Grid>
        <Grid xs={2}></Grid>
        <Grid xs={2}></Grid>
        <Grid xs={2}></Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </Box>
  )
}

export default Footer