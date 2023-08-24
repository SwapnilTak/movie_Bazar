import { Paper } from "@mui/material";
import react from "react";
import DrawerAppBar from "./common/header.js";
import axios from "axios";
import React, { useEffect } from "react";
// import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Home() {
  //   const Options = {
  //     method: "GET",
  //     url: "https://imdb-top-100-movies.p.rapidapi.com/",
  //     headers: {
  //       "X-RapidAPI-Key": "f4c4e7dc52msheb64b561256f5a6p1131eajsn8cf53d7c4f7c",
  //       "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com"
  //     }
  //   };
  //   async function GetMovieData() {
  //     try {
  //       const response = await axios.request(Options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   useEffect(() => {
  //     GetMovieData();
  //   }, []);

  return (
    <>
      <DrawerAppBar />
      <div style={{ width: "30%" }}>
        <h1>featured movie</h1>
        <img src="./public/images.jpeg" />
      </div>
      {/*    
    {/* <GRid container sapcing={2}>
      {movieData && movieData.map((movie, index)=>(
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={movie.image}
            alt={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Rating name="half-rating-read" defaultValue={movie.rating} precision={0.5} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
      )}

    </Grid>*} */}
    </>
  );
}
export default Home;
