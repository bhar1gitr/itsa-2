import React from 'react'

import Cards from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card = (props) => {
  return (
    <>
      
  <Cards  
    sx={{ 
      maxWidth: 345
    }}>
          <CardMedia
            sx={{ height: 200 }}
            image={props.image}
            title="green iguana"
          />
          <CardContent>
            <Typography 
             gutterBottom 
             variant="h5" 
             component="div"
             sx={{
              height: 40
             }}
             >
             {props.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Cards>
    
    </>
  )
}

export default Card