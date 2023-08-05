import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CatalogFetchApi() {
  const [data, setdata] = useState([]);
  const apiGet = () => {
    const BASE_PATH = "http://216.250.9.208:1498/api/catalogs";
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
  // data.subCatalogsName.forEach(alert)
  return (
    <>
      <Box className="btns">
        {data.map((item) => (
          <div className="dropdown">
              <button className="dropbtn">{item.catalogTitle}</button>
              <div className="dropdown-content">
                {item.subCatalogsName.map((elem) => (
                  <NavLink to={`/subcatalogs/${elem._id}`}> {elem.subcatalogTitle}</NavLink>
                  ))}
              </div>
            </div>
        ))}
      </Box>
    </>
  );
}
