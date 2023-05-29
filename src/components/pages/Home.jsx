import React from 'react';
import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import main from '../../assets/images/Image.svg';

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
                <Box >
                    <Typography variant='subtitle1' color="primary" fontWeight='700' gutterBottom>
                        The PizzaHut Restaurant
                    </Typography>
                    <Typography variant='h3' fontWeight='700' gutterBottom>
                        Good  F🍪🍪d
                    </Typography>

                    <Typography variant='h3' fontWeight='700'  gutterBottom>
                        Good  M😇😇d
                    </Typography>

                    <Typography variant='h6' color='secondary' maxWidth='550px' mb='44px'>
                        The PizzaHut is an neighborhood restaurant serving seasonal global cuisine driven by the faire.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "30px",
                            textTransform: "capitalize",
                            Padding: " 1px 3px 1px 3px",
                            filter: "drop-shadow(0px 20px 40px rgba(255, 148, 1, 0.2))"
                        }}>
                        Explore Food Menu
                    </Button>
                    <Stack spacing={3} direction={"row"} paddingTop={4} >
                        <Link href='https://www.facebook.com/viksa7111/' color='secondary' target='_blank'>
                            <FacebookOutlinedIcon />
                        </Link>
                        <Link href='https://www.instagram.com/vikasparmar___/' color='secondary' target='_blank'>
                            <InstagramIcon />
                        </Link>
                        <Link href='https://www.twitter.com/viksa7111/' color='secondary' target='_blank'>
                            <TwitterIcon />
                        </Link>
                    </Stack>
                </Box>

            </Grid>
            <Grid item xs={12} lg={5}>
                <Box position='relative' right='440px'>
                    <img src={main} alt='main theme'  />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home;