import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Owerview} from "../../pages/dashboard"


const DashboardRoutes = () => {
  return (
      <Routes>
            <Route path='/' element={<Owerview/>}/>
      </Routes>
  ) 
}

export default DashboardRoutes