import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PropagateLoader from "react-spinners/PropagateLoader";

const SuccessRest = () => {
    
    const {addtoCartList=[]}=useSelector((state)=>state?.AddCartRest)
    console.log(addtoCartList);
    // console.log("sonu");

    let success  = {
        color: "#b92c27",
        fontSize: "55px",
        fontWeight: "700",
        fontFamily: "auto",
    }
    const tool={
        width: "85rem",
        height: "100%",
        // border: "1px solid",
        position: "absolute",
        top: "3.5rem",
        backgroundColor: "antiquewhite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])

  return (
    <>
    <div style={tool}>
   {
    loading?<PropagateLoader color="#36d7b7" />:addtoCartList.length > 0 ? <div style={success}> sucess</div>:<div style={success}>cart is empty</div>
   }
   </div>
    </>
  )
}

export default SuccessRest
