import React, { useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Login() {
  let navigate = useNavigate()
  const [userone, setuserone] = useState("")
  const [usertwo, setusertwo] = useState("")
  const [visible, setvisible] = useState("")
  const [logerror, setlogerror] = useState("enter name to start game")
  const [validation, setvalidation] = useState(false)

 const errpopup = (time, error) => {
        setTimeout(() => {
            setvisible("")
        }, time);
        setvisible("visible")
        setlogerror(error)
    }
    useEffect(() => {
      funcvalidation()
    }, [{userone , usertwo}])
    
    function funcvalidation(){
      if (userone.length >= 3 && usertwo.length >= 3) {
        setvalidation(true)
      }
      else{
        setvalidation(false)
      }
    }
  ///// handle submit function  
  const handlesubmit = (e) => {
    e.preventDefault()
    if (validation === true) {
      navigate(`/game/${userone}/${usertwo}`)
      setuserone("");setusertwo("")
    } else {
      errpopup(1000, "name must be greater than 3")
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
          <input id='inpt1' type="text" placeholder='Enter user name'
            value={userone}
            onChange={(e) => { setuserone(e.target.value) }} />
        </div>
        <div className='form_input'>
          <p>user name 2</p>
          <input id='inpt2' type="text" placeholder='Enter user name'
            value={usertwo}
            onChange={(e) => { setusertwo(e.target.value) }} />
        </div>
        <Button type='submit' variant="contained" endIcon={<PlayArrowIcon />}>
          Start game
        </Button>
      </form>

    </main>
  )
}
export default Login