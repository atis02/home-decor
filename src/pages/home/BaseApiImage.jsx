import { Box, Modal } from "@mui/material";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // const modalImg = (if());
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
      
      <NavLink display="flex"  to={`/paintings/${item._id}`}  key={item._id} >

      <Image
      key={item._id}
      onClick={handleOpen}
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

// import React, { useEffect, useState } from "react";

// export default function BaseApiImage() {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState(data);
//   const [loading, setLoading] = useState(false);
//   let componentMounted = true;
//   const BASE_PATH = "http://216.250.9.208:1498/api/paintings";

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch(BASE_PATH);
//       if (componentMounted) {
//         setData(await response.clone().json());
//         setFilter(await response.json());
//         setLoading(false);
//         console.log(filter);
//       }

//       return () => {
//         componentMounted = false;
//       };
//     };
//     getProducts();
//   });
//   const Loading = () => {
//     return <>Loading...</>;
//   };
//   const ShowProduct = () => {
//     return 
//     <>
//       {filter.map((product)=>{
//         return(
//           <>
//             <img src={`${BASE_PATH}${product.coverImageName.filename}`} alt="" />
//           </>
//         )
//       })}
//     </>;
//   };

//   return (
//     <>
//       <div>
//         {loading? <Loading/> :<ShowProduct/> }
//       </div>
//     </>
//   );
// }
