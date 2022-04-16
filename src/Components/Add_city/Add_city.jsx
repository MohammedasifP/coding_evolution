import {useState} from "react"

export const Addcity=()=>{
const [data,setData]=useState({});    
    
    const handlechange=(e)=>{
     const {id,value}=e.target;
     setData({...data,[id]:value})
    }
     const senddata=(e)=>{
         e.preventDefault();
        fetch("http://localhost:3000/add-city",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"content-type":"application/json"}
        })
     }
    return (
        <div>
            <form onSubmit={senddata}>
                <label>Add country</label>
                <input type="text" id="country" onChange={handlechange}  /><br/><br/>
                <label>Add city</label>
                <input type="text" id="delhi" onChange={handlechange}  /><br/><br/>
                <label>Enter population</label>
                <input type="Number" id="population" onChange={handlechange}  /><br/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}