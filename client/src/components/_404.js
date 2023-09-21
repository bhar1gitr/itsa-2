import React from 'react'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
  },
  text: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#f50057', // You can customize the color
  },
  button: {
    marginTop: theme.spacing(2),
  },
  astronaut: {
    width: '200px', // Adjust the astronaut size as needed
  },
}));

const _404 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <img
      src="astronaut.svg" // You can replace this with your own image
      alt="Astronaut"
      className={classes.astronaut}
    />
    <Typography variant="h1" className={classes.text}>
      404
    </Typography>
    <Typography variant="h5">Page Not Found</Typography>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/"
      className={classes.button}
    >
      Go to Home
    </Button>
  </div>
  )
}

export default _404