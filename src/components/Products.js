import { Grid } from '@mui/material';
import React from 'react';
import { v4 as uuid } from 'uuid';
import Product from './Product';
 
const Products = () => {

    const initialProducts = [
        {id: uuid(), category: "phone", name: "iPhone 12", description: "Apple iPhone 12", price: "$1000", image: "https://images.unsplash.com/photo-1621939703744-9b75e3f7ff0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
        {id: uuid(), category: "laptop", name: "Macbook M1", description: "Apple Macbook Air M1", price: "$1200", image: "https://images.unsplash.com/photo-1636032204234-72429621de88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"},
        {id: uuid(), category: "Camera", name: "Canon 80D", description: "Canon 80D DSLR camera", price: "$800", image: "https://images.unsplash.com/photo-1587301353899-fa2cfc2b34d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"},
        {id: uuid(), category: "Camera", name: "Nikon D3500", description: "Nikon D3500 DSLR camera", price: "$700", image: "https://images.unsplash.com/photo-1499787177381-f06342cd251f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
        {id: uuid(), category: "Keyboard", name: "Razor Keyboard", description: "Mechanical gaming Razor keyboard", price: "$150", image: "https://images.unsplash.com/photo-1646510352470-8058c608c43b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
        {id: uuid(), category: "Mouse", name: "Razor Mouse", description: "Premium gaming mouse", price: "$80", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"},
        {id: uuid(), category: "phone", name: "Samsung Galaxy s21", description: "Samsung galaxy s21 premium flagship phone", price: "$1100", image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
        {id: uuid(), category: "laptop", name: "Dell Inspiron 5559", description: "Dell inspiron 5559 high configuration laptop", price: "$800", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
        {id: uuid(), category: "watch", name: "Apple Watch", description: "Apple premium watch", price: "$400", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"},
        {id: uuid(), category: "phone", name: "iPhone 14 pro", description: "Apple iPhone 14 pro", price: "$1100", image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
    ]

  return (
    <main>
        <Grid container justify="center" spacing="6">
            {
                initialProducts.map((prd) => {
                    return <Grid item key={prd.id} xs={12} sm={6} md={4} lg={3} >
                                <Product initialProducts={prd} />
                            </Grid>
                })
            }
        </Grid>
    </main>
  )
}

export default Products;