import React, { useEffect, useState } from "react";
import Image from "mui-image";
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, ImageList, ImageListItem, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import CatalogNav from "./CatalogNav";
import Array from './Array.mjs'

const localCharacter = localStorage.getItem("HomeDecor-SetImage");
const character = JSON.parse(localCharacter);

export default function ApiImage() {
   function BasicSelect() {
    
    return (
      <>
      {Array.map((item)=>{
        <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      })}
      
      {/* <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Время работы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Как происходит оплата</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Доставка</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Сроки</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Упаковка</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>На какой бумаге печать</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Какие рамы мы продаем</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Время работы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      </>
    );
  }
  function Frames() {
    const FramePath = " http://216.250.9.208:1498/api/frames/";
    const [frames, setFrames] = useState([]);
    const apiGet = () => {
      fetch(FramePath)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setFrames(json);
        });
    };
    useEffect(() => {
      apiGet();
    }, []);
    
    return (
      <>
        <Stack direction={"row"} gap={3}>
          <ImageList sx={{ width: 400, height: 450}} cols={2} rowHeight={200} >
            {frames.map((item) => (
              <ImageListItem key={item.img} direction='row'gap={5} justifyContent='space-around'>
                <Image
                  className="frame-img"
                  width={100}
                  height={150}
                  alt=""
                  src={`http://216.250.9.208:1498/uploads/paintings/${item.coverImageName.filename}`}
                />
                <Stack direction='row' mt={'10px'} gap='20px'className="frame-img" >
                    <div>{item.frameSize}</div>
                    <div>{`${item.frameСost}man`}</div>
                </Stack>
              </ImageListItem>
              ))}
          </ImageList>
        </Stack>
      </>
    );
  }

  return (
    <>
      <CatalogNav />
      <Box m={"100px"} mt={"50px"}>
        <Stack direction="row" gap={"120px"} >
          <Image
            width="500px"
            height="490px"
            direction="row"
            alt=""
            className="api-image"
            src={`http://216.250.9.208:1498/uploads/paintings/${character.coverImageName.filename}`}
          />
          <Stack>
            <h1 style={{ textAlign: "center" }}>{character.title}</h1>
            <h4 style={{ textAlign: "center" }}>
              Мы подчеркнули размеры, используемые в данном интерьере.
            </h4>
            <Frames />
          <BasicSelect/>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
