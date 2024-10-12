import React from 'react'
import { AgentsIcon, BitcoinEthereumIcon, CardsIcon, OwerviewIcon,PaymentsIcon,StatisticsIcon,TransactionsIcon,UsersIcon ,} from '../assets/images/Icon'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
    notificationCount: null

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
    notificationCount: null
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
  return (
    <div className='w-[20%] h-[100vh] overflow-y-auto border-r-[2px] border-white pt-[44px] pl-[17px]' >
      {navbarList.map(item => {
        <NavLink to={item.path}>
            {item.icon}
            <span>{item.title}</span>
        </NavLink>
      })}
    </div>
  )
}

export default Navbar