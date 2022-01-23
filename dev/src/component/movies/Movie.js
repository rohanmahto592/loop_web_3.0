import React from 'react';
import {Grid,Card,Typography,CardMedia,CardContent,Divider, CardActions, Button} from '@material-ui/core'
import useStyles from './styles'

const Movie = ({movie}) => {
    const classes=useStyles();
    console.log(movie)
  return(
      <Grid container alignItems="stretch" spacing={0}>
          {

              movie?.d?.map((item,index)=>(
                <Grid item  xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                    <CardMedia className={classes.cardmedia}
                    component={'img'}
                    src={item?.i?.imageUrl}
                    
                    
                    />
                    <CardContent>
                        <Typography className={classes.typo} variant="h6" color="primary">
                            {item.l}
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button  type="submit" variant="contained" color="secondary"> rank  {item.rank}</Button>
                        <Button type="submit" variant="contained" color="secondary"> year {item.y}</Button>
                    </CardActions>
                    <Typography className={classes.typo2} variant='h6' color='inherit'>{item.s}</Typography>
                  </Card>


                </Grid>




              ))


          }

      </Grid>


  )
      
  
};

export default Movie;

