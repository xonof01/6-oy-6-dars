import React, { Children } from 'react'

const Button = ({type,children,extraStyle,onClick}) => {
  return (
    <button onClick={onClick} className={`login-button block mx-auto w-[134px] py-[13px] rounded-[100px] text-white text-[10px] font-regular leading-[15px] ${extraStyle}`}type='{type}' >{children}</button>
  )
}

export default Button