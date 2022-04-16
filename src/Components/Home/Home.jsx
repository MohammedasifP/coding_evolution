import { useState } from "react"
import { useEffect } from "react"
import { Navbar } from "../Navbar/Navbar"
import { Link } from "react-router-dom"

export const Home=()=>{
const [citydata,setCitydata]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/add-city").then(Response=>Response.json()).then(data=>setCitydata(data))
    },[])
    

      return(
          <div>
             <Navbar/>
              <div>
                  <table border="1px">
                      <thead>
                          <tr>
                              <td>id</td>
                              <td>Country</td>
                              <td>City</td>
                              <td>Population</td>
                              <td>Edit</td>
                              <td>Delete</td>
                          </tr>
                      </thead>
                      <tbody>
                          {citydata.map((elem)=>{
                           return(
                            <tr>
                                 <td>{elem.id}</td>
                                 <td>{elem.country}</td>
                                 <td>{elem.city}</td>
                                 <td>{elem.population}</td>
                                 <td><Link to={`/edit/${elem.id}`}>Edit</Link></td>
                                 <td ><Link to={`/delete/${elem.id}`}>Delete</Link></td>
                             </tr> 
                           )
                          })}
                      </tbody>
                  </table>
              </div>
          </div>
      )
}