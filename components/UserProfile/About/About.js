/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import { Button, Container } from '@mui/material';


const About = () => {
    return (
        <div className='md:px-8'>
              <Box sx={{ flexGrow: 1 }}>
        <Grid className='m-2' container spacing={2}>
            <Grid item xs={12} md={4}>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className='font-bold'>About Me</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li><BusinessCenterIcon/> UX Desginer At Pixelstrap</li>
                                        <li><LibraryBooksIcon/> Studied Computer Science</li>
                                        <li><FavoriteIcon/> Relationship Status</li>
                                        <li><LocationOnIcon/> Lived In London</li>
                                        <li><BloodtypeIcon/> Blood Group</li>
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
                        <div className='my-8'>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className='font-bold'>Followers</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='text-center'>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-1/12 h-3/6  rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Rakibul Hasan</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/11.png" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Monirul Fahad</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between my-4'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/3.jpg" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Shihab</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Kawsar Hossain</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between  my-4'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Abu Bakker</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Rashedul Islam</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className='font-bold'>Following</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <ul className='text-center'>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-1/12 h-3/6  rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Rakibul Hasan</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/11.png" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Monirul Fahad</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between my-4'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/3.jpg" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Shihab</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Kawsar Hossain</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between  my-4'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Abu Bakker</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                        <li className='flex justify-between'>
                                            <img src="https://admin.pixelstrap.com/viho/assets/images/user/2.png" 
                                            className="w-1/12 h-3/6 rounded-full border-4 border-indigo-600" alt="" />
                                            <div>
                                                <h2 className='font-bold'>Rashedul Islam</h2>
                                                <Button className='bg-indigo-500 text-white hover:bg-cyan-300 hover:text-black'>Add Friend</Button>
                                            </div>
                                        </li>
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
                        <div className='my-8'>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className='font-bold'>Latest Photos</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li><BusinessCenterIcon/> UX Desginer At Pixelstrap</li>
                                        <li><LibraryBooksIcon/> Studied Computer Science</li>
                                        <li><FavoriteIcon/> Relationship Status</li>
                                        <li><LocationOnIcon/> Lived In London</li>
                                        <li><BloodtypeIcon/> Blood Group</li>
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className='font-bold'>Friends</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li><BusinessCenterIcon/> UX Desginer At Pixelstrap</li>
                                        <li><LibraryBooksIcon/> Studied Computer Science</li>
                                        <li><FavoriteIcon/> Relationship Status</li>
                                        <li><LocationOnIcon/> Lived In London</li>
                                        <li><BloodtypeIcon/> Blood Group</li>
                                    
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                         </div>
            </Grid>
            <Grid item xs={12} md={8}>
                 <div>
                     <Container>
                     <div className='flex justify-between mx-4'>
                          <div className='flex mb-4'>
                              <img src="https://admin.pixelstrap.com/viho/assets/images/user/7.jpg" className="w-1/12 h-5/6  rounded-full border-4 border-indigo-600" alt="" />
                              <div className='ml-4'>
                                  <h2 className='font-bold'>Elon Mask</h2>
                                  <p>22 Hours Ago</p>
                              </div>
                          </div>
                          <div>
                               <MoreHorizIcon/>
                          </div>
                      </div>
                      <div>
                          <img className='mx-4' src="https://admin.pixelstrap.com/viho/assets/images/user-profile/post1.jpg" alt="" />
                          <p className='my-3 mx-4 font-bold'>+5 people react this post</p>
                          <p className='font-bold mx-4 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <div>
                              <ul className='flex mx-4'>
                                  <li><FavoriteIcon/> Like 20</li>
                                  <li className='mx-5'><MessageIcon/> comment 5</li>
                                  <li><ShareIcon/> Share 3</li>
                              </ul>
                          </div>
                      </div>
                     </Container>
                 </div>
            </Grid>
        </Grid>
  </Box>
        </div>
    );
};

export default About;