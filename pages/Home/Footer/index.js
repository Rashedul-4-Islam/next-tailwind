import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import Header from '../Header/Header';
import Email from '../../../components/email';


const Footer = () => {
    return (
        
       <>
         
             <Box sx={{ width: '100%',marginTop:'20px',backgroundColor:'#121317',color:'white',padding:'20px' }}>
             <Email/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
              <Grid item xs={3}>
                    <Typography variant="h3" gutterBottom component="div">
                        Docy
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        I’m available for commissions and collaborations, and i’m excited to hear from you about new projects.!!
                    </Typography>
                    <div style={{display:'flex',flexBasis:'200px'}}>
                        <div className='footer-icon'>
                         <Facebook/>
                        </div>
                        <div className='footer-icon'>
                         <Twitter/>
                        </div>
                        <div className='footer-icon'>
                         <LinkedIn/>
                        </div>
                    </div>
              </Grid>
              <Grid style={{textAlign:'start'}} item xs={3}>
              <Typography variant="h6" gutterBottom component="div">
                 Doc Contents
              </Typography>
              <nav aria-label="secondary mailbox folders">
                    <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemText primary="Videos" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="List Style" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Tooltip & Direction" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Keyboard Shortcuts" />
                        </ListItemButton>
                    </ListItem>
                    </List>
          </nav>
              </Grid>
              <Grid item xs={3}>
                    <Typography variant="h6" gutterBottom component="div">
                        Doc Elements
                    </Typography>
                    <nav aria-label="secondary mailbox folders">
                    <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemText primary="Videos" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="List Style" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Tooltip & Direction" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Keyboard Shortcuts" />
                        </ListItemButton>
                    </ListItem>
                    </List>
                   </nav>
              </Grid>
              <Grid item xs={3}>
                    <Typography variant="h6" gutterBottom component="div">
                        Footnotes
                    </Typography>
                    <nav aria-label="secondary mailbox folders">
                    <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemText primary="Videos" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="List Style" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Tooltip & Direction" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Keyboard Shortcuts" />
                        </ListItemButton>
                    </ListItem>
                    </List>
                </nav>
              </Grid>
            </Grid>
            <hr />
            <p style={{textAlign:"center"}}><span>&copy;</span> All Rights Reserved by Programming Folk-Team</p>
          </Box>
       </>
    );
};

export default Footer;