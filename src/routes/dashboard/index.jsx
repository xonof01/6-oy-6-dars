import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Agents, BitcoinEthereum, Cards, Owerview, Payments, Statistics, Transactions, Users} from "../../pages/dashboard"
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'


const DashboardRoutes = () => {
  return (
    <div>
        <Header/>w
        <div className='flex items-center justify-between'>
          <Navbar/>
          <div className='w-[80%] h-[100vh] overflow-y-auto'>
            <Routes>
                    <Route path='/' element={<Owerview/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/agents' element={<Agents/>}/>
                    <Route path='/cards' element={<Cards/>}/>
                    <Route path='/bitcoin-ethereum' element={<BitcoinEthereum/>}/>
                    <Route path='/payments' element={<Payments/>}/>
                    <Route path='/transactions' element={<Transactions/>}/>
                    <Route path='statistics' element={<Statistics/>}/>
            </Routes>
        </div>
        </div>
    </div>
  ) 
}

export default DashboardRoutes