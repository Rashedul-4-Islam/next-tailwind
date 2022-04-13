import { Box, Grid, Input, Typography } from "@mui/material";
import Image from "next/image"

const Email = () => {
    return (
        <div>
            <div className="email-section">
                 <Image src="/shap-1.png" width="500px" height="100%"></Image>
                 <Box sx={{ width: '90%',margin:'auto' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                        <Typography variant="h4" gutterBottom component="div">
                            Great Customer 
                            <br />
                            Relationships start here
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                           <Input sx={{background:'white'}} placeholder="right here"/>
                        </Grid>
                    </Grid>
                  </Box>
                 <Image src="/shap-2.png" width="1000px" height="100%"></Image>
            </div>
        </div>
    );
};

export default Email;