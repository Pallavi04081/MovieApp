import {useState,useEffect} from 'react';
import axios from 'axios';
import Card1 from '../Components/CardCom/Card';
import ButtonAppBar from '../Components/Header/NavBar';


const Home = ({auth})=>{

    const [movieData,setmovieData] = useState([])
    useEffect(()=>{
       const movieApi=async()=>{
         const Result = await axios.post("https://hoblist.com/api/movieList",{
                 category: "movies",
                 language: "kannada",
                 genre: "all",
                 sort: "voting"
             })
            
             setmovieData(Result.data.result) 
       }
        movieApi()
       
      },[])



    return(
        <>
        <div style={{height:"100%",overflow:"scroll"}}>
        <ButtonAppBar auth={auth}/>
        {
            movieData.map((ele)=>{
                return(
                    <>
                    <div style={{margin:"25px"}}>
                    <Card1 movieData={ele}/>
                    </div>
                    </>
                )
            })
        }
        </div>
        </>
    )
}

export default Home;