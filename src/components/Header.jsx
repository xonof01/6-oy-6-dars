import React from 'react'
import DashboardLogo  from '../assets/images/Dashboard-logo.svg'
import LogoPart from "../assets/images/LogoPart.svg"
import Bell from "../assets/images/bell.svg"
import { Badge } from 'antd'
const Header = () => {
  return (
    <div className='w-[100%] py-[24px] border-b-[2px] border-white px-[65px] flex items-center justify-between'>
      <img src={DashboardLogo} alt="dashboard-logo" width={104} height={21} />
      <div className='flex items-center space-x-[77px]'>
        <div className='flex items-center justify-between'>
          <img src={LogoPart} alt="LogoPart" width={36} height={36} />
          <strong className='font-regular text-[12px] leading-[24px] text-white'>CoinBase</strong>
        </div>
          <Badge color='#a559a7' count={9} size='small'>
            <img src={Bell} alt="bell-icon" width={12.31} height={20}/>
          </Badge>
      </div>
    </div>
  )
}

export default Header