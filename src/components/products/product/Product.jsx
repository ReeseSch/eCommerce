import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { mergeClasses } from '@material-ui/styles'
import useStyles from './styles'

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price}
          </Typography>
        </div>
        <Typography variant='body2' color='textSecondary'>
          {product.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label='Add To Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>

    </Card>
  )
}

export default Product