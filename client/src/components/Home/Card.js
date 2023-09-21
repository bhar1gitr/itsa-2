import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = () => {

  const [cards, setCards] = useState([]);

  // const loadCards = () => {
  //   fetch("http://localhost:4000/loadCards").then(
  //     (res) => res.json()
  //   ).then(

  //     (data) => setCards(data)
  //   )
  // }
  // useEffect(() => {
  //   loadCards();
  // }, [])
  return (
    <>
      {/* {cards.map((val,index) =>
        <>
           <Cards key={val._id} style={{ width: '18rem' }}>
        <Cards.Img variant="top" src={val.image} />
      <Cards.Body>
        <Cards.Title>{val.title}</Cards.Title>
        <Cards.Text>
         {val.description}
        </Cards.Text>
        <Button variant="primary">Go somewhere</Button>
      </Cards.Body> 
    </Cards>
        </>
      )} */}
      {cards.map((val) =>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={val.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {val.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )
      }
    </>
  )
}

export default Cards