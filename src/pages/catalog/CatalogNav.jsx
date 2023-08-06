import React, { useState } from "react";
import {Box,Container,Stack,Typography,Drawer,useTheme,useMediaQuery,IconButton, Button,} from "@mui/material";
import { navbarItems } from "../../data/navbar/NavbarItems.mjs";
import Image from "mui-image";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const CatalogNav = () => {
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
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <img
                src={isMobile ? "/images/1.png" : "/images/Logo.png"}
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
                    <a href='https://instagram.com' style={{textDecoration:'none',color:'#000'}}>
                      Новинки каждый день
                    </a>
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <NavLink  to="/shopping">
                    <Button
                      sx={{ color: "black" }}
                      spacing={2}
                      className="shopping-button"
                    >
                      <Stack spacing={1} direction="row" alignItems="center">
                        <Image
                          src="/images/cart02.png"
                          alt=""
                          style={{ width: "20px", height: "20px" }}
                        />

                        <Typography
                          sx={{
                            fontSize: { lg: "15px", xs: "10px" },
                            alignItems: "center",
                            justifyContent: "center",
                            direction: "row",
                            textAlign: "center",
                          }}
                        >
                          Корзина
                        </Typography>
                      </Stack>
                    </Button>
                  </NavLink>
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
                {navbarItems.map((item, i) => (
                  <Typography sx={{textAlign: "start",color: "#000",}}>
                    {item.title}
                  </Typography>
                ))}
            </Stack>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default CatalogNav;
