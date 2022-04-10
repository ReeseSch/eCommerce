import React from "react";
import { Grid } from "@material-ui/core";
import Product from './product/Product'
import useStyles from './styles'


const fakeProducts =[
    { id:1, name: 'Shoes', description: 'You wear them on your feet.', price: '$30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_qm0dvA4VzkXl_Fm9OhOc_WYXbCs6czlYw&usqp=CAU'},
    { id:2, name: 'Pillow', description: `It's fluffy.`, price: '$10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYcuZCPkfq3ovLw2nMivT1eIIl1iHvFxJew&usqp=CAU'},
    { id:3, name: 'Flip-Flops', description: 'Like shoes, but better.', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oqUdTydGGvkeZ9C4D1PTuZeP6dpabcVsRg&usqp=CAU'}
]

const Products = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {fakeProducts.map((fakeProduct) => (
                    <Grid item key={fakeProduct.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={fakeProduct} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )


}



export default Products