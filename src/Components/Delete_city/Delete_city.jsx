
import { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom"
export const Deletecity=()=>{
    const {id}=useParams();
   const navigate=useNavigate();
    useEffect(()=>{
      
        fetch(`http://localhost:3000/add-city/${id}`,{
            method:"DELETE",
        
        }).then(alert("city deleted")).then(navigate("/"))
    },[])

          

  return(
      <div>
          
      </div>
  )
}