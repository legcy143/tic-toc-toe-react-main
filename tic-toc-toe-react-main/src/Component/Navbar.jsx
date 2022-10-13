import React ,{ useState } from 'react'
import {Link} from "react-router-dom"
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RateReviewIcon from '@mui/icons-material/RateReview';

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <nav className='nav_main'>
<img src="/legtic.png" alt="" />
{/* //// icon menu  */}
<MenuIcon onClick={handleOpen}  className="c_p"/>

<Modal
className="modal_setting"
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<section className='setting_container'>
  <Button  startIcon={<DarkModeIcon/>}>Theme</Button>
  <br /><br />
  <Link to="/feedback">
<Button  startIcon={<RateReviewIcon/>}> Feedback</Button> 
  </Link>
<br /><br />
<Link to="/login">
<Button variant='outlined'  startIcon={<LogoutIcon />}>logout</Button>
</Link>
</section>

</Modal>
    </nav>
  )
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:2,
  p: 2,
};

export default Navbar
