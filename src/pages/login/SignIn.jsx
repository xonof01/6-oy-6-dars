import React, { useContext } from 'react'
import {SiteLogo} from "../../assets/images/Icon"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Context } from '../../context/context'

const SignIn = () => {
  const {token,setToken} = useContext(Context)
  function handleSignInSubmit(e){
    e.preventDefault()
    const data = {
      email:e.target.email.value,
      password:e.target.password.value
    }
    if(data.email == "avazxonovfirdavsxon@gmail.com" && data.password == "7913"){
      setToken(data)
    }
  }
  return (
    <div className='text-center flex flex-col items-center pt-[63px]'>
      <SiteLogo/>
      <h2 className='text-white font-bold text-[25px] leading-[37px] mt-[18px] mb-[10px]'>Sign In</h2>
      <form onSubmit={handleSignInSubmit} className='w-[362px] text-start' autoComplete='off'>
        <label className='flex flex-col mb-[27px]'>
          <span className='text-[15px] text-white mb-[17px]'>Email</span>
          <input className='py-[23px] pl-[34px] pr-[5px] rounded-[130px] focus:shadow-md focus:shadow-white' type="email" name="email" placeholder='Email' required/>
        </label>
        <label className='flex flex-col'>
          <span className='text-[15px] text-white mb-[17px]'>Password</span>
          <input className='py-[23px] pl-[34px] pr-[5px] rounded-[130px] focus:shadow-md focus:shadow-white' type="password" name="email" placeholder='XXXXXXXXXX' required/>
        </label>
        <Link to={"/sign-Up"} className='text-white text-[10px] leading-[15px] font-regular my-[10px] block text-center hover:scale-[1.4] duration-300'>Sign Up</Link>
        <Button title={"SignIn"} type={"submit"}/>
      </form>
    </div>
  )
}

export default SignIn