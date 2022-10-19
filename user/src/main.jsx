import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./Legcy.css"
import "./App.css"
import "./Game.css"
import {BrowserRouter , Routes , Route} from "react-router-dom"


import {Provider} from "react-redux"
import store from "./Store/store"

import Login from './Pages/Login'
import Game from './Pages/Game'
import Feedback from './Pages/Feedback'




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route index element={<App/>}/>
    <Route exact path='/' element={ <App/> } />
    <Route exact path='/login' element={ <Login/> } />
    <Route exact path='/game/:user1/:user2' element={ <Game/> } />
    <Route exact path='/feedback' element={ <Feedback /> } />
    <Route path="*" element={<h1>page not found</h1>}/> 
  </Routes>
  </BrowserRouter>

  </Provider>
  
)
