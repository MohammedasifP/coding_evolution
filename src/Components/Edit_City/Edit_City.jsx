
import { useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
export const Editcity=()=>{
const {id}=useParams();
const [data,setData]=useState({});    
const navigate=useNavigate();    

    const handlechange=(e)=>{
     const {id,value}=e.target;
     setData({...data,[id]:value})
    }
     const senddata=(e)=>{
         e.preventDefault();
        fetch(`http://localhost:3000/add-city/${id}`,{
            method:"PATCH",
            body:JSON.stringify(data),
            headers:{"content-type":"application/json"}
        }).then(alert("city edited")).then(navigate("/"))
     }

return(
    <div>
            <form onSubmit={senddata}>
                <label>Add country</label>
                <input type="text" id="country" onChange={handlechange}  /><br/><br/>
                <label>Add city</label>
                <input type="text" id="city" onChange={handlechange}  /><br/><br/>
                <label>Enter population</label>
                <input type="Number" id="population" onChange={handlechange}  /><br/><br/>
                <input type="submit"/>
            </form>
    </div>
)
}