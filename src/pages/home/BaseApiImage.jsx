import { Box } from "@mui/material";
import Image from "mui-image";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function BaseApiImage() {
  const [data, setdata] = useState([]);
  const apiGet = () => {
    const BASE_PATH = "http://216.250.9.208:1498/api/paintings";
    fetch(BASE_PATH)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setdata(json);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  const IMAGEPATH = "http://216.250.9.208:1498/uploads/paintings/";

  return (
    <>
      <Box
        direction="row"
        flexWrap="wrap"
        spacing={2}
        display="flex"
        mt="50px"
        alignItems="center"
        justifyContent="center"
      >
        {data.map((item) => (
          <NavLink display="flex" to={`/paintings/${item._id}`} key={item._id}>
            <Image
              onClick={() => {
                localStorage.setItem(
                  `HomeDecor-SetImage`,
                  JSON.stringify(item)
                );
              }}
              key={item._id}
              style={{
                width: "250px",
                height: "250px",
                margin: "0 10px 10px 0",
                border: "1px solid black",
              }}
              src={`${IMAGEPATH}${item.coverImageName.filename}`}
              className="api-image"
              alt=""
            />
          </NavLink>
        ))}
      </Box>
    </>
  );
}
