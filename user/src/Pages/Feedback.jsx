import { Button } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom"

function Feedback() {
    let navigate = useNavigate()
    const back = ()=>{
        navigate(-1)
    }
  return (
    <main className='main_form_feedback'>
        <nav className='main_form_feedback_nav'>
        <Button  startIcon={<ArrowBackIcon />} onClick={back}> Feedback</Button> 
        </nav>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdM2iTOKTu7rtWOF-i2sFD6PxD-pb_jA3aXDdAlDKBMPnoWcQ/viewform?embedded=true"
            loading="lazy"
         width="640" height="1395" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </main>
  )
}

export default Feedback