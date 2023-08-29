import React, { useEffect, useState } from "react";
import Image from "mui-image";
import { useCart } from "react-use-cart";
import {
  Box,
  Button,
  Skeleton,
  Stack
} from "@mui/material";
import CatalogNav from "./CatalogNav";
import { NavLink, useNavigate } from "react-router-dom";
import BasicSelect from './Select'

  const localCharacter = localStorage.getItem("HomeDecor-SetImage");
  const character = JSON.parse(localCharacter);

export default function ApiImage(props) {
  const {addItem} = useCart();
  function LocalStorageGetProduct(){
    return(
      <>
      <Box m={"100px"} mt={"50px"} >
        <Stack direction="row" justifyContent='space-between'>
          <Image
            width="40vw"
            height="470px"
            direction="row"
            alt=""
            className="api-image"
            src={`http://216.250.9.208:1498/uploads/paintings/${character.coverImageName.filename}`}
          />
          <Stack alignItems='center'width='40vw'>
            <h1 style={{ textAlign: "center",m:'0' }}>{character.title}</h1>
            <h4 style={{ textAlign: "center" }}>
              Мы подчеркнули размеры, используемые в данном интерьере.
            </h4>
            <Frames />
            <Stack direction='row'mb={5} alignItems='center' justifyContent='flex-start'>
              
                <NavLink to="/shopping"><Button sx={{backgroundColor:'#687eb3',color:'#fff',width:'250px'}}onClick={()=>addItem(props.character)}>Перейти в корзину</Button></NavLink>
              
            </Stack>
            <BasicSelect />
          </Stack>
        </Stack>
      </Box>
      </>
    )
  }
  function Frames() {
    const FramePath = " http://216.250.9.208:1498/api/frames/";
    const [frames, setFrames] = useState([]);
    const [loading,SetLoading] = useState(false);

    const apiGet = () => {
      SetLoading(true);
      fetch(FramePath)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setFrames(json);
          SetLoading(false);
        });
    };
    useEffect(() => {
      apiGet();
    }, []);

   function ShowFrames(props) {

      return (
          <Stack direction={"column"} gap={3} sx={{overflow:'auto',height:'500px',width:'500px',mb:'30px',alignItems:'center'}}>
        Выберите размер картины и рамы:
          {frames.map((item,index) => (
            <Stack direction='row' gap={5}  justifyContent='center' item={item} key={index} >
              <Image
                className="frame-img"
                width={100}
                height={150}
                alt=""
                src={`http://216.250.9.208:1498/uploads/paintings/${item.coverImageName.filename}`}
              />
              <div
              style={{
              display:"flex",
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              mt:"10px",
              gap:"17px",
              key:{index},
              className:"frame-select"}}>
              <select className="frame-select"> 
                {character.printSizePost.map((item=>
                <option style={{display:'flex',justifyContent:'space-between'}} 
                >
                    {item.prSize}
                      --
                    {`${item.pricePost}man`}
                </option>))}
              </select>
              <select className="frame-select">
                <option style={{display:'flex',justifyContent:'space-between'}}>
                    {`${item.frameName}(${item.frameSize})`}
                      --
                    {`${item.frameСost}man`}
                </option>
              </select>
              <button className="frame-btn" 
                 onClick={() => {
                  localStorage.setItem(
                    `HomeDecor-SetFrame`,
                    JSON.stringify(item)
                  );
                }}
              >
               Добавить в корзину
              </button>
            </div>
            </Stack>
          ))}
        </Stack>
      )
    }
    function Loading(){
      return(
        <Stack width='500px'height='500px'>
          <Skeleton sx={{width:'100%',height:'100%'}}   direction='row' alignItems='start' justifyContent='flex-start' />
        </Stack>
      )
    }
    return (
      <>
        {loading?<Loading/>:<ShowFrames/>}
      </>
    );
  }
  return (
    <>
        <CatalogNav />
      <LocalStorageGetProduct/>
    </>
  );
}
