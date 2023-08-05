import React from "react";
import CatalogNav from "./CatalogNav";
import CatalogFetchApi from "../../component/navbar/CatalogFetchApi";
import BaseApiImage from "../home/BaseApiImage";
import { Button, Stack } from "@mui/material";

const Catalogs = () => {
  return (
    <>
      <CatalogNav />
      <CatalogFetchApi />
      <BaseApiImage />
      <Stack  sx={{
            borderBottom: "#F04F30",
            direction: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <Button>
          Просмотреть еще
        </Button>
      </Stack>
    </>
  );
};

export default Catalogs;
