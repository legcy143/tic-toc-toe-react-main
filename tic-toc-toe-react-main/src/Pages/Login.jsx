import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom"

import { Backdrop, Button, TextField } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CircularProgress from '@mui/material/CircularProgress';

import { useDispatch } from "react-redux"
import { add } from "../Store/Log"

function Login() {
  let dispatch = useDispatch()

  let navigate = useNavigate()
  const [userone, setuserone] = useState(false)
  const [usertwo, setusertwo] = useState(false)
  const [visible, setvisible] = useState("")
  const [logerror, setlogerror] = useState("enter name to start game")

const handlechangeone = (e)=>{
  // console.log(e.target.value.length)
  let eventone = e.target.value.length
  if (eventone < 3 || eventone > 20) {
    setuserone(true)
  }
}
const handlechangetwo = (e)=>{
  // console.log(e.target.value.length)
  let event = e.target.value.length;
    if (event > 3) {
      setuserone(true)
  }
}
///// handle submit function  
const handlesubmit = (e , k)=>{
  e.preventDefault()

  // console.log(userone , usertwo)
  const inpt1 = document.getElementById("inpt1")
  const inpt2 = document.getElementById("inpt2")
  let a11 = inpt1.value.length
  let a22 = inpt2.value.length

  if (a11 > 3 && a11 < 20 && a22 > 3 && a22 < 20) {
    let k = [inpt1.value , inpt2.value]
    //  dispatch(add(k))
    navigate("/game")
    console.log("Log In suscessfully")
  }
  else{ 
    if(a11>5 && a22>5){
      setlogerror("name should not be greater than 20")
      setTimeout(() => {
        setvisible("enter name to start game")        
      }, 3000);
    }
    else{
      setlogerror("name must be greatter than 5")
      setTimeout(() => {
        setvisible("enter name to start game")        
      }, 3000);
    }
    setvisible("visible")
    setTimeout(() => {
      setvisible("")        
    }, 3000);
   }
}

  return (
    <main className='login_main'>
      <nav className='login_nav'>
<img src="/legtic.png" alt="img" />
<h2>Login to legtic</h2>
</nav>
<section className={`error_in_log ${visible}`}>
<p>{logerror}</p>
  </section>
<form className='login_form' onSubmit={handlesubmit}>
<div className='form_input'>
  <p>user name 1</p>
  <input id='inpt1' type="text" placeholder='Enter user name' onChange={handlechangeone}/>
</div>
<div className='form_input'>
  <p>user name 2</p>
  <input id='inpt2' type="text" placeholder='Enter user name' onChange={handlechangetwo}/>
</div>
<Button type='submit' variant="contained" endIcon={<PlayArrowIcon/>}>
  Start game
</Button>
</form>
     
    </main>
  )
}
export default Login