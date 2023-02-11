import { useState } from "react";
import {Box,Button,TextareaAutosize,TextField, Typography,Select,InputLabel,MenuItem,FormControl} from "@mui/material"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactInfo = ()=>{
   
   return(
    <>
     <Box style={{display:"felex",flexDirection:"column",padding:"25px",background:"#6D44BC",color:"white",borderRadius:"25px",textAlign:"center",}}>
        <Box>
        <Typography variant="h3" component="h4" style={{fontSize:"36px"}}>
        Contact Information
        </Typography>
        </Box>
        <Box>
            <Box>
            <Typography style={{margin:"25px 0px",marginLeft:"20px"}}>Company : Geeksynergy Technologies Pvt Ltd</Typography>
            <Typography style={{margin:"25px",marginLeft:"60px"}}>Email :  companyofficial@gmail.com</Typography>
                <Typography style={{margin:"25px 0px"}}>Mobile No : +91 (123-456-789)</Typography>
              
            </Box>
            <Box style={{marginBottom:"25px",marginLeft:"30px"}}>
                <FacebookIcon style={{fontSize:"40px",marginRight:"5px",color:"white"}}/>
                <InstagramIcon style={{fontSize:"40px",marginRight:"5px",color:"white"}}/>
                <TwitterIcon style={{fontSize:"40px",marginRight:"5px",color:"white"}}/>
                <YouTubeIcon style={{fontSize:"40px",marginRight:"5px",color:"white"}}/>
            </Box>
        </Box>

     </Box>
    </>
   )

}

export default ContactInfo