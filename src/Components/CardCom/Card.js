import {Box,Typography,Button,CardMedia,Card} from "@mui/material"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Card.css"


const Card1 = ({movieData})=>{
 
    return(
        <>
        <Box class="cardContainer">
         <Box className="subCardContainer">
           <Box class="imageAndVoteContainer">
            <Box class="ArrowContainer">
            <ArrowDropUpIcon style={{fontSize:"80px",dispaly:"flex",alignItem:"center",justifyContent:"center"}}/>
             <Typography style={{display:"flex",fontSize:"30px",alignItem:"center",justifyContent:"center",marginLeft:"20px"}}>
                {movieData?.voted.length}
             </Typography>
            <ArrowDropDownIcon style={{fontSize:"80px"}}/>
            </Box>
            <Box >
                <Typography style={{disaply:"flex",justifyContent:"center",marginLeft:"20px"}}>
                    Votes
                </Typography>
            </Box>

           </Box>
          <Box className="imageContainer">
          <Card sx={{ width: "100%",height:"100%",borderRadius:"15px",boxShadow:"3px 2px 3px 2px gray"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={`${movieData?.poster}`}
        style={{height:"100%"}}
      />
    </Card>
          </Box>
           <Box className="ContentContainer">
            <Typography variant="h5" style={{marginLeft:"15px"}}>
                 {movieData.title}
            </Typography>
            <Typography style={{margin:"15px"}}>
               <span>Gener</span>: {movieData?.genre}
            </Typography>
            <Typography style={{margin:"15px"}}>
                <span>Director</span>: {movieData?.director[0]}
            </Typography>
            <Typography style={{margin:"15px"}}>
                <span>Starring</span>: {
                    movieData?.stars[0]}
            </Typography>
            <Typography style={{margin:"15px"}}>
              <span>language</span>: {movieData?.language}
            </Typography>
            <Typography style={{margin:"15px",color:"skyblue"}}>
               {movieData?.pageViews} views | Voted by {movieData?.voted.length} people
            </Typography>
           </Box>
         </Box>
         <Box>
         <Button variant="contained" style={{width:"100%",backgroundColor:"#6D44BC"}}>Watch Trailer</Button>
         </Box>
        </Box>
        
        </>
    )
}

export default Card1;