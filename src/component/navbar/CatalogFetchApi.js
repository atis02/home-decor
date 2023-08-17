import { Box, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CatalogFetchApi() {
  const [loading,SetLoading] = useState(false);
  const [data, setdata] = useState([]);
  const apiGet = () => {
    const BASE_PATH = "http://216.250.9.208:1498/api/catalogs";
    SetLoading(true)
    fetch(BASE_PATH)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setdata(json);
        SetLoading(false)
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  let [catalogOpen, setCatalogOpen] = useState(false);
  
  function Loading() {
    return (
      <Stack direction='row' gap='20px' alignItems='center' justifyContent='center' flexWrap="wrap">
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
       <Skeleton width={100} height={60}/>
      </Stack>
    )
  }
  
  return (
    <>
      {loading?<Loading/>:
      <Box className="btns">
        {data.map((item,index) => (
          // <select
          // key={index}
          //   className={` ${catalogOpen && "active"}`}
          //   // onClick={() => setCatalogOpen((catalogOpen = !catalogOpen))}
          // >
          //   <div>{item.catalogTitle}</div>
          //   {item.subCatalogsName.map((elem,index)=>{
          //     <option key={index}>
          //       {elem.subcatalogTitle}
          //     </option>
          //   })}
          
          // </select>

          <div className="dropdown">
              <button  className={`dropbtn ${catalogOpen && 'active'}`} onClick={()=>setCatalogOpen(catalogOpen=!catalogOpen)} >{item.catalogTitle}</button>
              <div className="dropdown-content">
                {item.subCatalogsName.map((elem) => (
                  <NavLink to={`/subcatalogs/${elem._id}`}> {elem.subcatalogTitle}</NavLink>
                  ))}
              </div>
            </div>
        ))}
      </Box>}
    </>
  );
}
