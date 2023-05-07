import React from 'react';
import Header from '../layouts/Header';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import main from '../../assets/images/Image.svg';
import food1 from '../../assets/logos/food1.svg'
import food2 from '../../assets/logos/food2.svg'

const Home = () => {
    return (
        <Box position={'relative'}>
            <Header />
            <Box position={'absolute'} zIndex={1} >
                <Typography variant='p' color={"primary"} fontWeight='700'>
                    The PizzaHut Restaurant
                </Typography>
                <Typography variant='h1' fontWeight='700'>
                    Good Food
                </Typography>
                <Typography variant='h1' fontWeight='700'>
                    Good Mood
                </Typography>
                <Box sx={{
                    position: "absolute",
                    top: "57px",
                    right: "106px"
                }} >
                    <img src={food1} alt='food' />
                </Box>
                <Box sx={{
                    position: "absolute",
                    right: "122px",
                    top: "37px"
                }} >
                    <img src={food2} alt='food' />
                </Box>
                <Box>

                </Box>
                <Typography variant='h6' color={'secondary'} sx={{
                    fontWeight: 450,
                    fontSize: "20px",
                    lineHeight: "160%",
                    maxWidth: "550px",
                    mb: "44px"
                }}
                >
                    The PizzaHut is an neighborhood restaurant serving seasonal global cuisine driven by the faire.
                </Typography>

                <Button variant="contained" sx={{
                    borderRadius: "30px", textTransform: "capitalize", Padding: " 1px 3px 1px 3px",
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

            <Box position={'absolute'} right={"-82px"} top={"106px"}>
                <img src={main} alt='main theme' />
            </Box>
        </Box>
    )
}

export default Home;