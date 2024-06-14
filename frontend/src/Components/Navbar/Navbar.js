import React, {useEffect, useState} from "react";
import Axios from "axios"
function Navbar() {
  const [data, setData] = useState("")
  console.log("Here::")

  const getData = async() => {
    const response = await Axios.get("http://localhost:5000/");
    setData(response.data);
  }
  console.log("Reached")
  useEffect(() => {
    getData()
  }, [])
  
  return (

    <h1>{data}</h1>
    
  )
}

export default Navbar
