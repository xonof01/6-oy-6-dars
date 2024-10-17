import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import {AgentMore, AgentsAdd, BitcoinEthereum, Cards, Owerview, Payments, Statistics, Transactions, Users} from "../../pages/dashboard"
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Loading from "../../assets/images/loading.png"

const Agents = lazy(() => new Promise((resolve) => {
  return setTimeout(() => resolve(import("../../pages/dashboard/Agents")),1000)
}))

const DashboardRoutes = () => {
  return (
        <div>
          <Header/>
          <div className='flex items-center justify-between'>
              <Navbar/>
              <div className='w-[80%] relative h-[100vh] overflow-y-auto'>
                <Routes>
                          <Route path='/' element={<Owerview/>}/>
                          <Route path='/users' element={<Users/>}/>
                          <Route path='/agents' element={
                            <Suspense fallback={
                              <img className='absolute top-0 right-0 bottom-0 left-0 mt-5' src={Loading} alt='Loading...' width={400}/>
                            }><Agents/></Suspense>
                          }/>
                          <Route path='/agents/:id' element={<AgentMore/>}/>
                          <Route path='/agents/add' element={<AgentsAdd/>}/>
                          <Route path='/agents/:id/update' element={<AgentsAdd/>}/>
                          <Route path='/cards' element={<Cards/>}/>
                          <Route path='/bitcoin-ethereum' element={<BitcoinEthereum/>}/>
                          <Route path='/payments' element={<Payments/>}/>
                          <Route path='/transactions' element={<Transactions/>}/>
                          <Route path='/statistics' element={<Statistics/>}/>
                </Routes>
              </div>
          </div>
        </div>
  ) 
}

export default DashboardRoutes