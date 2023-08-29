import { Box, Skeleton, Stack } from "@mui/material";
import Image from "mui-image";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function BaseApiImage() {
  const [loading, SetLoading] = useState(false);
  const [data, setdata] = useState([]);
  const apiGet = () => {
    const BASE_PATH = "http://216.250.9.208:1498/api/paintings";
    SetLoading(true);
    fetch(BASE_PATH)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setdata(json);
        SetLoading(false);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  const IMAGEPATH = "http://216.250.9.208:1498/uploads/paintings/";

  function Loading() {
    return (
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Skeleton width={270} height={430} position="relative" />
        <Skeleton width={270} height={430} position="relative" />
        <Skeleton width={270} height={430} position="relative" />
        <Skeleton width={270} height={430} position="relative" />
        <Skeleton width={270} height={430} position="relative" />
        <Skeleton width={270} height={430} position="relative" />
        <Skeleton width={270} height={430} position="relative" />
        <Skeleton width={270} height={430} position="relative" />
      </Stack>
    );
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
            <Stack>
              <NavLink
                display="flex"
                to={`/paintings/${item._id}`}
                key={item.id}
              >
                <Image
                  onClick={() => {
                      localStorage.setItem(
                          `HomeDecor-SetImage`,
                      JSON.stringify(item)
                      );
                    }}
                    key={item._id}
                    style={{
                        width: "300px",
                    height: "300px",
                    margin: "0 10px 10px 0",
                    border: "1px solid black",
                  }}
                  src={`${IMAGEPATH}${item.coverImageName.filename}`}
                  className="api-image"
                  alt=""
                  />
              </NavLink>
            </Stack>
          ))}
        </Box>
      )}
    </>
  );
}
