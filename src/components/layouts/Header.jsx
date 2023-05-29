import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logos/logo.svg'
import pizza from '../../assets/images/6.svg'

const Header = () => {
    return (
        <Box
            component="header"
            display="flex"
            justifyContent="space-between"
            alignItems="start"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingTop={3}
            >
                <img src={logo} alt='logo' />
                <Typography
                    variant="h6"
                    color='secondary'
                    fontSize="20px"
                    px={1}
                >
                    PizzaHut
                </Typography>
            </Box>

            <Box display={{ xs: 'none', sm: 'block' }} minWidth='228px' >
                <img src={pizza} alt='pizza' width='90%' />
            </Box>

            <Stack
                spacing={2}
                direction="row"
                paddingTop={3}
            >
                <SearchIcon color='secondary' />
                <ShoppingBagIcon color='secondary' />
                <MenuIcon color='secondary' />
            </Stack>
        </Box>
    )
}

export default Header;