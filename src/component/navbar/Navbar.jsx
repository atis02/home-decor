import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Drawer,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { navbarItems } from "../../data/navbar/NavbarItems.mjs";
// import { NavLink } from "react-router-dom";
import Image from "mui-image";
import MenuIcon from "@mui/icons-material/Menu";
import "./fonts.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          backgroundImage: 'url("/images/header1.png")',
          backgroundPosition: "center center",
        }}
      >
        <Container>
          <Box
            pt="20px"
            sx={{
              direction: "row",
              //   alignItems: {lg:'none',sm},
              justifyContent: "space-between",
            }}
          >
            <Stack
              alignItems="end"
              justifyContent="end"
              display="flex"
              direction="row"
              spacing={2}
              sx={{ ...(isMobile ? { display: "none" } : { display: "" }) }}
            >
              <img
                src="/images/calling.svg"
                alt=""
                alignItems="end"
                style={{ width: "20px", height: "20px" }}
              />
              <a
                href="tel:+993 62 07 53 35"
                style={{ textDecoration: "none", color: "#000" }}
              >
                +993 62 07 53 35
              </a>
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <img
                src={isMobile ? "/images/1.png" : "images/Logo.png"}
                {...(isMobile
                  ? { width: "44px", height: "49px" }
                  : { width: "220px", height: "46px" })}
                style={{
                  lg: { width: "150px" },
                  xs: { width: "145px", height: "40px" },
                  alignItems: "start",
                }}
                alt=""
              />
              <Stack direction="row" spacing={3}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ ...(isMobile ? { display: "none" } : { display: "" }) }}
                >
                  <Image
                    src="/images/_Instagram.png"
                    {...(isMobile ? { width: "40px" } : { width: "20px" })}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: { lg: "17px", xs: "10px" },
                      alignItems: "center",
                      lineHeight: "0.9",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Новинки каждый день
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Image
                    src="/images/cart02.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: { lg: "17px", xs: "10px" },
                      alignItems: "center",
                      justifyContent: "center",
                      direction: "row",
                      textAlign: "center",
                    }}
                  >
                    Корзина
                  </Typography>
                  <IconButton
                    onClick={toggleMobileMenu}
                    sx={{
                      display: { xs: "flex", md: "none" },
                      color: "#333333",
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Container>
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{
            "& .MuiDrawer-paper": {
              width: "180px",
            },
          }}
        >
          <Box
            className="mobile-menu"
            sx={{
              bg: "#fff",
              height: "100%",
              padding: "16px",
            }}
          >
            <Stack spacing={2} pt={3} alignItems="center">
              <>
                {navbarItems.map((item, i) => (
                  // <NavLink
                  //   key={`navbar_items_mobile${i}`}
                  //   activeClass="active"
                  //   spy={true}
                  //   to={item.link}
                  //   smooth={true}
                  //   duration={1000}
                  //   className="scroll-link"
                  //   onClick={toggleMobileMenu}
                  // >
                  <Typography
                    sx={{
                      textAlign: "start",
                      color: "#000",
                    }}
                  >
                    {item.title}
                  </Typography>
                  // </NavLink>
                ))}
              </>
            </Stack>
          </Box>
        </Drawer>
        <Stack alignItems="center" direction="column" >
          <Typography
            {...(isMobile
              ? { width: "300px", height: "100px" }
              : { width: "540px", height: "110px" })}
            alignItems="center"
            direction="row"
            fontFamily="New-YorkerC"
            className="header-title"
            {...(isMobile ?{fontSize:'20px'}:{fontSize:'38px'})}
            >
            {isMobile
              ? "Создайте уютную атмосферу вашего дома вместе с нами"
              : "Постеры, картины, обои- для вашего интерьера "}
          </Typography>
              </Stack>
          <Stack direction='row' alignItems='end' justifyContent='space-around' mt={1} >
          <img
              src={isMobile ? "/images/Frame 59.png" : "images/banner img 1.png"}
              {...(isMobile
                ? { width: "114px", height: "140px" }
                : { width: "250px", height: "320px" })}
              alt=""/>
            <img
              src={isMobile ? "/images/headerjpg2.png" : "images/Frame 2.png "}
              {...(isMobile
                ? { width: "88px", height: "106px" }
                : { width: "181px", height: "234px" })}
              alt="" />
            <img
              src={isMobile ? "/images/headerjpg1.png" : "images/Frame 4.jpg"}
              {...(isMobile
                ? { width: "101px", height: "123px" }
                : { width: "250px", height: "320px" })}
              position='absolute'
              alt="" />
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
