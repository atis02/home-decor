import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ApiImage() {
    const {id}= useParams();
    const [images,setImages] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const getApiImages = async ()=>{
            setLoading(true);
            const response = await fetch(`http://216.250.9.208:1498/api/paintings`);
            setImages(await response.json());
            setLoading(false);
        }
        getApiImages();
    },[]);
    const Loading = () =>{
        return(
            <>
                Loading...
            </>
        )
    }
    const ShowProduct = () =>{
        return(
            <>
                {images.map((elem)=>{
                    <img alt="" src={elem.coverImageName.filename}/>
                })}
            </>
        )
    }
  return (
    <>
      <div>
        <div className="container">
            <div className="row">
                {loading? <Loading/> : <ShowProduct/>}
            </div>
        </div>
      </div>
    </>
  );
}
