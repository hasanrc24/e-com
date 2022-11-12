import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Button, IconButton, Toolbar } from '@mui/material';

const Navbar = () => {

    const logo = 'https://play-lh.googleusercontent.com/a5wa-MvOw9tLeRv2oeDpZgS2GDVHTkuMZRQ0SGUR-9KrR9X_i5Jv5SCeRXySGS6fj6g';

  return (
    <AppBar color="inherit" position="fixed">
        <Toolbar style={{justifyContent: "space-between"}}>
            <Button>
                <img src={logo} alt='logo' height="50px" />
            </Button>
            <IconButton>
                <Badge badgeContent={2} color='secondary' >
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Toolbar>
        <div />
    </AppBar>
  )
}

export default Navbar