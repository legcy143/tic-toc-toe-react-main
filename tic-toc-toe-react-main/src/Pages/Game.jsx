import { Button } from '@mui/material'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React, { useState , useEffect} from 'react'
import { Link } from "react-router-dom"
import Navbar from "../Component/Navbar"
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Game() {
  const [resetgamemodal , setresetgamemodal] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{ setOpen(false);resetgameopen();}

  const [logapi, setlogapi] = useState(true)
  const [winnerdiv, setwinnerdiv] = useState(true)
  const [winnerplayer, setwinnerplayer] = useState(" ")

  const [playerx, setplayerx] = useState("player_active")
  const [playero, setplayero] = useState("")

  const [x1, setx1] = useState(null);const [x2, setx2] = useState(null);
  const [x3, setx3] = useState(null);const [x4, setx4] = useState(null);
  const [x5, setx5] = useState(null);const [x6, setx6] = useState(null);
  const [x7, setx7] = useState(null);const [x8, setx8] = useState(null);
  const [x9, setx9] = useState(null);

  const player1_name = "PLAYER X"
  const player2_name = "PLAYER O"

  // arrya 
  const arr = []
  const handlex1 = () => { x1 === null?arr.length % 2 === 0 ? setx1("X") : setx1("O") : x1 === null };
  const handlex2 = () => { x2 === null?arr.length % 2 === 0 ? setx2("X") : setx2("O") : x2 === null };
  const handlex3 = () => { x3 === null?arr.length % 2 === 0 ? setx3("X") : setx3("O") : x3 === null };
  const handlex4 = () => { x4 === null?arr.length % 2 === 0 ? setx4("X") : setx4("O") : x4 === null };
  const handlex5 = () => { x5 === null?arr.length % 2 === 0 ? setx5("X") : setx5("O") : x5 === null };
  const handlex6 = () => { x6 === null?arr.length % 2 === 0 ? setx6("X") : setx6("O") : x6 === null };
  const handlex7 = () => { x7 === null?arr.length % 2 === 0 ? setx7("X") : setx7("O") : x7 === null };
  const handlex8 = () => { x8 === null?arr.length % 2 === 0 ? setx8("X") : setx8("O") : x8 === null };
  const handlex9 = () => { x9 === null?arr.length % 2 === 0 ? setx9("X") : setx9("O") : x9 === null };


  // checking ----
  const resetgameopen = ()=>{
    setresetgamemodal(false)
    resetgame()
  }
  const resetgame = () => {
    setx1(null);setx2(null);setx3(null);setx4(null);setx5(null);setx6(null);
    setx7(null);setx8(null);setx9(null);
    alert("Restart game")
    setOpen(false)
    setresetgamemodal(false)
  }



  //// check function 
  const check = () => {
useEffect(() => {
    if (arr.length %2 === 0) {
      setplayerx("player_active")
      setplayero("")
    }
    else{
      setplayero("player_active")
      setplayerx("")
    }
    if (arr.length === 9) {
      console.log("reset game modal enable")
    }
    let ar = [x1,x2,x3,x4,x5,x6,x7,x8,x9]
    let k1 = ar[0];let k2 = ar[1];let k3 = ar[2];
    let k4 = ar[3];let k5 = ar[4];let k6 = ar[5];
    let k7 = ar[6];let k8 = ar[7];let k9 = ar[8];

    // check winner function

const checkwinner = (para1 , para2 , para3)=>{
  if (para1 != null && para2 != null && para3 != null) {
    if (para1 == para2 && para2 == para3 && para1 == para2) {
      // console.log(para1, para2, para3, true ,)
      {para1 === "X"?setwinnerplayer(player1_name):setwinnerplayer(player2_name)}
      handleOpen()
    }
  }
}
    // condition for wiinner
    checkwinner(k1 , k2 , k3);
    checkwinner(k4 , k5 , k6);
    checkwinner(k7 , k8 , k9);
    checkwinner(k1 , k4 , k7);
    checkwinner(k2 , k5 , k8);
    checkwinner(k3 , k6 , k9);
    checkwinner(k1 , k5 , k9);
    checkwinner(k3 , k5 , k7);
    // if (k4 != null && k5 != null && k6 != null) {
    //   if (k4 == k5 && k5 == k6 && k4 == k6) {
    //     // console.log(k4, k5, k6, true ,"456")
    //     {k4 === "X"?setwinnerplayer("PLAYER X"):setwinnerplayer("PLAYER O")}
    //   }
    // }

  }, [check])

  }
  return (
    <main>
      {logapi===true?
      <>
        <Navbar />
      <section className='game_input_section'>
        <div className='game_player_nav d_flex ai_c jc_sb'>
          <h1 className={` player_name ${playerx} `}>Player X</h1>
          <h1 className={`player_name ${playero}`}>Player O</h1>
        </div>
        <main className='main_container_input'>
        <div className='game_input_container'>
          <p id='x1' onClick={handlex1}>{x1}</p>
          <p id='x2' onClick={handlex2}>{x2}</p>
          <p id='x3' onClick={handlex3}>{x3}</p>
        </div>
        <div className='game_input_container'>
          <p id='x4' onClick={handlex4}>{x4}</p>
          <p id='x5' onClick={handlex5}>{x5}</p>
          <p id='x6' onClick={handlex6}>{x6}</p>
        </div>
        <div className='game_input_container'>
          <p id='x7' onClick={handlex7}>{x7}</p>
          <p id='x8' onClick={handlex8}>{x8}</p>
          <p id='x9' onClick={handlex9}>{x9}</p>
        </div>  
        </main>
        <div className='vh'>
          {x1 === null ? false : arr.push(x1)}
          {x2 === null ? false : arr.push(x2)}
          {x3 === null ? false : arr.push(x3)}
          {x4 === null ? false : arr.push(x4)}
          {x5 === null ? false : arr.push(x5)}
          {x6 === null ? false : arr.push(x6)}
          {x7 === null ? false : arr.push(x7)}
          {x8 === null ? false : arr.push(x8)}
          {x9 === null ? false : arr.push(x9)}
          {check()}
        </div>

        {/* ///////modal  */}
<Modal
className="modal_setting"
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<section className='winner_modal_section'>
<p>
  {winnerplayer}
  </p>
  <p>
  won the game
  </p>
<br />
<br />
<Button onClick={resetgame} type='submit' variant="contained" startIcon={<RestartAltIcon/>}> Restart</Button>
</section> 
</Modal>
        <Button onClick={resetgame} type='submit' variant="contained" startIcon={<RestartAltIcon/>}> Reset game</Button>
      </section>
      </>
      //// else condition 
      :<section className='login_to_play'>    
          <p>
            it seems you are not loged in <br />
            please login to continue
          </p>
          <Link to="/login">
          <Button type='submit' variant="contained">Back to login</Button>
          </Link>
      </section>}
      {resetgamemodal === true? 
      <section className='main_alert_container'>
        <div>
          <p>Are you sure restart game</p><br />
          <Button onClick={resetgame} type='submit' variant="contained">yes</Button>
        </div>
      </section>:""}
    </main>
  )

}

export default Game;