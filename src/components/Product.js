import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, IconButton} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = ({initialProducts}) => {

    const {name, description, price, image} = initialProducts;
  return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Price: {price}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small" ><AddShoppingCartIcon /></IconButton>
            </CardActions>
        </Card>
  )
}

export default Product