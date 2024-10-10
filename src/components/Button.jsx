import React from 'react'

const Button = ({type,title}) => {
  return (
    <button className='login-button block mx-auto w-[134px] py-[13px] rounded-[100px] text-white text-[10px] font-regular leading-[15px]'type='{type}' >{title}</button>
  )
}

export default Button