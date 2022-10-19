import { Button } from '@mui/material'
import { useState , useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Navbar from './Component/Navbar'
import {Link} from "react-router-dom"


function App() {
  let navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/login")
    }, 1000);
  }, [])
  


  return (
    <div className="App">
      <img src="/logo.png" alt="" />
      <h1>welcome to legtic game</h1>
      <br />
      <Link to="/login"><Button variant='contained'>Continue</Button></Link>
       </div>
  )
}

export default App
