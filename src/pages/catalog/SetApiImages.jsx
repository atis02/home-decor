// import { Box, Stack } from "@mui/material";
// import Image from "mui-image";
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
'use strict';

const BASE_PATH = "http://216.250.9.208:1498/api/paintings";
let favorites = localStorage.getItem('favoriteCharacters');
let parsedFavorites = JSON.parse(favorites);
let filteredArray = [...new Set(parsedFavorites)];



export default function SetApiImages() {
  // const apiGet = () => {
    const BASE_PATH = "http://216.250.9.208:1498/api/paintings";
    const IMAGEPATH = "http://216.250.9.208:1498/uploads/paintings/";
    fetch(BASE_PATH, { method: 'GET' })
      .then((res) => res.json())
      .then((parsedData) => {
        console.log(parsedData.map((item)=>(item.coverImageName.filename)));
        parsedData.forEach((item)=>{
        let card = document.createElement('div')
        let image = document.createElement('img')
        image.src = item.coverImageName.filename
      });
      });
    };
    SetApiImages();
    // useEffect(() => {
    //   apiGet();
    // }, []);
  // return (
  //   <>
  //   { parsedData.forEach((item)=>{
  //         <Stack>
  //           <Image alt="" src={`${IMAGEPATH}${item.coverImageName.filename}`}/>
  //         </Stack>
  //       })}
      {/* <Box
        direction="row"
        flexWrap="wrap"
        spacing={2}
        display="flex"
        mt="50px"
        alignItems="center"
        justifyContent="center"
      >
        <Image alt=""  src={`${IMAGEPATH}${Data}`}/>
      </Box> */}
//     </>
//   );
// }
