import React from 'react'
import {SiteLogo} from "../../assets/images/Icon"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const SignUp = () => {
  return (
    <div className='text-center flex flex-col items-center pt-[63px]'>
      <SiteLogo/>
      <h2 className='text-white font-bold text-[25px] leading-[37px] mt-[18px] mb-[10px]'>Sign Up</h2>
      <form  className='w-[362px] text-start' autoComplete='off'>
        <label className='flex flex-col mb-[27px]'>
          <span className='text-[15px] text-white mb-[17px]'>Email</span>
          <input className='py-[23px] pl-[34px] pr-[5px] rounded-[130px] focus:shadow-md focus:shadow-white' type="email" name="email" placeholder='Email' required/>
        </label>
        <label className='flex flex-col'>
          <span className='text-[15px] text-white mb-[17px]'>Password</span>
          <input className='py-[23px] pl-[34px] pr-[5px] rounded-[130px] focus:shadow-md focus:shadow-white' type="password" name="email" placeholder='XXXXXXXXXX' required/>
        </label>
        <Link to={"/"} className='text-white text-[10px] leading-[15px] font-regular my-[10px] block text-center hover:scale-[1.4] duration-300'>Sign In</Link>
        <Button title={"SignIn"} type={"submit"}/>
      </form>
    </div>
  )
}

export default SignUp