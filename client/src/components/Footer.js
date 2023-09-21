import React from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    const footerStyle = {
        background: '#27005D',
        color: 'white',
        padding: '40px 0',
        boxShadow: '0px -5px 15px rgba(0, 0, 0, 0.2)',
        marginTop:"18px"
      };
    
      const socialIconStyle = {
        fontSize: '32px',
        marginRight: '15px',
        color: 'white',
      };
  return (
    <footer style={footerStyle}>
    <Container  maxWidth="lg">
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6">Footer Title</Typography>
        <Typography variant="body2">
          This is a sample footer for your React application.
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="subtitle1">Links</Typography>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="subtitle1">Social Media</Typography>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Your Company. All rights
          reserved.
        </Typography>
      </Grid>
    </Grid>
  </Container>
    </footer>
  );
}

export default Footer;
