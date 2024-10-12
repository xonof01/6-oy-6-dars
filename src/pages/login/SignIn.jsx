import React, { useContext, useState } from 'react'
import {SiteLogo} from "../../assets/images/Icon"
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Context } from '../../context/context'
import Loading from "../../assets/images/loading.png"
import toast,{Toaster} from 'react-hot-toast'

const SignIn = () => {
  const {token,setToken} = useContext(Context)
  const [isLoading,setIsLoading] = useState(false)
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  function handleSignInSubmit(e){
    e.preventDefault()
    const data = {
      email:e.target.email.value,
      password:e.target.password.value
    }
    setIsLoading(true)
    if(userInfo){
      if(data.email == userInfo.email && data.password == userInfo.password){
        setTimeout(() => {
          setIsLoading(false)
          setToken(data)
        }, 1000);
      }
      else{
        setTimeout(()=>{
          setIsLoading(false)
          toast.error("user not found !")
        },1000)
      }
    }
    else{
      if(data.email == "mubinullakh@gmail.com" && data.password == "123"){
        setTimeout(() => {
          setIsLoading(false)
          setToken(data)
        }, 1000);
      }
      else{
        setTimeout(()=>{
          setIsLoading(false)
          toast.error("user not found !")
        },1000)
      }
    }
  }
  return (
    <div data-aos="zoom-in" className='text-center flex flex-col items-center pt-[63px]'>
      <Toaster position="top-center"reverseOrder={false}/>
      <SiteLogo/>
      <h2 className='text-white font-bold text-[25px] leading-[37px] mt-[18px] mb-[10px]'>Sign In</h2>
      <form onSubmit={handleSignInSubmit} className='w-[362px] text-start' autoComplete='off'>
        <label className='flex flex-col mb-[27px]'>
          <span className='text-[15px] text-white mb-[17px]'>Email</span>
          <input className='py-[23px] pl-[34px] pr-[5px] rounded-[130px] focus:shadow-md outline-none focus:shadow-white' type="email" name="email" placeholder='Email' required/>
        </label>
        <label className='flex flex-col'>
          <span className='text-[15px] text-white mb-[17px]'>Password</span>
          <input className='py-[23px] pl-[34px] pr-[5px] rounded-[130px] focus:shadow-md outline-none focus:shadow-white' type="password" name="password" placeholder='XXXXXXXXXX' required/>
        </label>
        <Link to={"/sign-Up"} className='text-white text-[10px] leading-[15px] font-regular my-[10px] block text-center hover:scale-[1.4] duration-300'>Sign Up</Link>
        <Button type={"submit"}>
          {isLoading ? <img className='scale-[2] mx-auto' src={Loading} alt="loading..." width={30}/> : "Sign In"}
        </Button>
      </form>
    </div>
  )
}

export default SignIn