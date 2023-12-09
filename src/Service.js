import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Service = () => {
  const[myData, setMyData]=useState([]);

  const fetchedMyData = async () =>{
    try {
          let response = await fetch (' https://fakestoreapi.com/products');
          let data =await response.json();
          setMyData(data);
          console.log(data);
  
  
      } catch (error) {
         console.log(error); 
      }
  };
  useEffect(() =>{
  fetchedMyData();
  }, []);

  return (
    <>
   <div style={{margin:"auto",width:"250px", textAlign:"center", marginTop:"40px"}}>
    <h1>Our Services</h1>
    </div> 
 
    <Grid
      container
      direction="row"
      spacing={1}
      justifyContent="space-evenly"
      alignItems="center"
    
      sx={{marginTop:"80px",  height:"100px", width:"100%", backgroundColor:"white"}}
    >
        {myData.map((item)=>(
      
      <Card sx={{ maxWidth: 340,height:"500px", marginTop:"25px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="380"
          width="300"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textTransform:"capitalize", textAlign:"center", fontWeight:"bold"}}>
            {item.category}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
         ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>





        ))}
    
    
    </Grid>
    
    </>
    
    
    
    );







}


export default Service