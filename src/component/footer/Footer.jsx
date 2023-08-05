import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const footer = () => {
  return (
    <>
      <Box backgroundColor="#E7E7E7" color="#28303F" >
        <Container sx={{ pt: "50px", pb: "50px" }}>
          <Stack
            direction="row"
            alignItems="start"
            justifyContent="space-between"
            fontWeight="700"
          >
            <Stack>
              <img
                alt=""
                src="/images/1.png"
                style={{ width: "77px", height: "85px" }}
              />
            </Stack>
            <Stack spacing={4}>
              <Stack direction="row" gap="10px">
                <img
                  alt=""
                  src="/images/store 03.png"
                  style={{ width: "24px", height: "24px" }}
                />
                <a href="/"style={{color:"#28303F",textDecoration:'none',fontWeight: "700"}}>О нас</a>
              </Stack>
              <Stack direction="row" gap="10px">
                <img
                  alt=""
                  src="/images/book 01.png"
                  style={{ width: "24px", height: "24px" }}
                />
                <a href="/" style={{color:"#28303F",textDecoration:'none',fontWeight: "700"}}>Отзывы</a>
              </Stack>
              <Stack direction="row" gap="10px">
                <img
                  alt=""
                  src="/images/community.png"
                  style={{ width: "24px", height: "24px" }}
                />
                <a href="/" style={{color:"#28303F",textDecoration:'none'}}>Сотрудничество</a>
              </Stack>
            </Stack>
            <Stack spacing={4}>
              <Stack direction="row" gap="10px">
                <img
                  alt=""
                  src="/images/image-tick.png"
                  style={{ width: "24px", height: "24px" }}
                />
                <a  href="/"style={{color:"#28303F",textDecoration:'none'}}>Рамы и крепления</a>
              </Stack>
              <Stack direction="row" gap="10px">
                <img
                  alt=""
                  src="/images/wallet-check.png"
                  style={{ width: "24px", height: "24px" }}
                />
                <a href="/"style={{color:"#28303F",textDecoration:'none'}}>Цены</a>
              </Stack>
              <Stack direction="row" gap="10px">
                <img
                  alt=""
                  src="/images/delivery-done.png"
                  style={{ width: "24px", height: "24px" }}
                />
                <a href="/"style={{color:"#28303F",textDecoration:'none'}}>Доставка и оплата</a>
              </Stack>
            </Stack>
            <Stack spacing={4}>
              <Typography fontWeight="700">Контакты</Typography>
              <Stack direction='row' spacing={4}>
                <Stack spacing={2} >
                  <Stack direction="row" gap="10px">
                    <img
                      alt=""
                      src="/images/call.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <a  href="tel:+993 12 94 52 40" style={{color:"#28303F", fontWeight: "400",textDecoration:'none' }}>+993 12 94 52 40</a>
                  </Stack>
                  <Stack direction="row" gap="10px">
                    <img
                      alt=""
                      src="/images/collection.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <a href="tel:+993 12 94 52 41"style={{ fontWeight: "400",color:"#28303F",textDecoration:'none' }}>+993 12 94 52 41</a>
                  </Stack>
                  <Stack direction="row" gap="10px">
                    <img
                      alt=""
                      src="/images/calling.svg"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <a href="tel:+993 62 07 53 35" style={{ fontWeight: "400",color:"#28303F",textDecoration:'none' }}>+993 62 07 53 35</a>
                  </Stack>
                </Stack>

                <Stack spacing={2}>
                  <Stack direction="row" gap="10px">
                    <img
                      alt=""
                      src="/images/mail-plus.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <a href="mailto:homedecortm@yandex.ru" style={{color:"#28303F",textDecoration:'none',fontWeight: "400"}}>homedecortm@yandex.ru</a>
                  </Stack>
                  <Stack direction="row" gap="10px">
                    <img
                      alt=""
                      src="/images/mail-favourite.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <a style={{color:"#28303F",textDecoration:'none',fontWeight: "400"}}>info@homedecortm.com</a>
                  </Stack>
                  <Stack direction="row" gap="10px">
                    <img
                      alt=""
                      src="/images/chat.png"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <a style={{color:"#28303F",textDecoration:'none',fontWeight: "400"}}>+993 62 07 53 35</a>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          
        </Container>
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={2} >
            <img alt='' src="/images/book-info.svg"  style={{ width: "24px", height: "24px" }}/>    
            <Typography fontSize='12px' color='#949494'>Пользовательское соглашение</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default footer;
