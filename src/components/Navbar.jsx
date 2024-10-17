import React, { useState } from 'react'
import { AgentsIcon, BitcoinEthereumIcon, CardsIcon, LogAutIcon, OwerviewIcon,PaymentsIcon,StatisticsIcon,TransactionsIcon,UsersIcon} from '../assets/images/Icon'
import { NavLink, useNavigate } from 'react-router-dom'
import { Modal } from 'antd'

const Navbar = () => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false) 
  const navbarList = [
    {
    id:1,
    icon:<OwerviewIcon/>,
    title:"Owerview",
    path:"/",
    notificationCount: null
  },
  {
    id:2,
    icon:<UsersIcon/>,
    title:"Users",
    path:"/users",
    notificationCount: 19

  },
  {
    id:3,
    icon:<AgentsIcon/>,
    title:"agents",
    path:"/agents",
    notificationCount: null

  },
  {
    id:4,
    icon:<CardsIcon/>,
    title:"cards",
    path:"/cards",
    notificationCount: null
  },
  {
    id:5,
    icon:<BitcoinEthereumIcon/>,
    title:"Bitcoin & Ethereum",
    path:"/bitcoin-ethereum",
    notificationCount: null
  },
  {
    id:6,
    icon:<PaymentsIcon/>,
    title:"Payments",
    path:"/payments",
    notificationCount: 10
  },
  {
    id:7,
    icon:<TransactionsIcon/>,
    title:"Transactions",
    path:"/transactions",
    notificationCount: null
  },
  {
    id:8,
    icon:<StatisticsIcon/>,
    title:"Statistics",
    path:"/statistics",
    notificationCount: null
  },

]
  function handleSureLogout(){
    localStorage.clear()
    location.reload()
    location.pathname = "/"
  }
  return (
    <div className='w-[20%] h-[100vh] overflow-y-auto border-r-[2px] border-white pt-[44px] mt-[20px]' >
      {navbarList.map(item => (
        <NavLink key={item.id} className={`pl-[17px] relative py-[18px] mr-[17px] rounded-r-[100px] flex items-center space-x-[21px]`} to={item.path}>
          {item.icon}<span className='text-white text-[15px] font-regular'>{item.title}</span>
          {item.notificationCount ? 
          <button className='count-btn absolute top-0 bottom-0 font-bold leading-[12px] my-auto right-5 text-[8px] text-white w-[20px] h-[20px] rounded-full'>{item.notificationCount}</button>:""}
          </NavLink>
      ))}
      <button onClick={() => setOpenModal(true)} className='flex py-[18px] items-center gap-5 pl-[15px] hover:scale-[1.2] duration-300'>
        <LogAutIcon/>
        <span className='font-regular text-[12px] leading-[18px] text-white'>Logout</span>
      </button>
        <Modal title="Do you really want to exit the admin panel?" open={openModal} onOk={handleSureLogout} onCancel={() => setOpenModal(false)}/>
    </div>
  )
}

export default Navbar
