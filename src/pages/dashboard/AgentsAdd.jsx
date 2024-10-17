import React, { useContext, useEffect, useState } from 'react'
import { BackIcon, UploadImg } from '../../assets/images/Icon'
import Button from '../../components/Button'
import { Context } from '../../context/context'
import { useNavigate, useParams } from 'react-router-dom'
import CustomLoading from '../../components/CustomLoading'

const AgentsAdd = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const {agents,setAgents} = useContext(Context)
  const [userName,setUserName] = useState("")
  const [userEmail,setUserEmail] = useState("")
  const [userAbout,setUserAbout] = useState("")
  const [imgUrl,setImgUrl] = useState(null)
  const [isLoading,setIsLoading] = useState(false)

  function handleAddAgent(e){
    e.preventDefault() 
   if(id){
    const updateAgent  = agents.find(item => item.id == id)
    updateAgent.img = imgUrl
    updateAgent.username = userName
    updateAgent.useremail = userEmail
    updateAgent.about = userAbout
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
      setAgents([...agents])
      navigate(-1)
    },1000)
   }
   else{
    const data = {
      id: agents.length +1,
      Checked:false,
      status:true,
      img:imgUrl,
      username:userName,
      useremail:userEmail,
      about:userAbout,
    }
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
      setAgents([...agents,data])
      navigate(-1)
    },1000)
   }
  }
  useEffect(() => {
    if(id){
      const updateAgent  = agents.find(item => item.id == id)
      setImgUrl(updateAgent.img)
      setUserName(updateAgent.username)
      setUserEmail(updateAgent.useremail)
      setUserAbout(updateAgent.about)
    }
  },[])
  return (
    <div className='p-[50px]'>
      <p className='font-bold text-[12px] leading-[18px] text-white mb-[33px]'>Admin Management Agents</p>
      <div className='flex items-center space-x-[10px]'>
            <button onClick={() => navigate(-1)} className='hover:scale-[1.3] duration-300'><BackIcon/></button>
            <h2 className='font-bold text-[16px] leading-[24px] text-white'>Agents</h2>
        </div>
      <div className='p-[40px] border-[2px] border-white mt-[28px] rounded-lg'>
        <form onSubmit={handleAddAgent} className='p-[40px] rounded-lg mt-[28px]' autoComplete='off'>
            <label className='w-[244px] h-[168px] border-[2px] border-white rounded-lg flex flex-col items-center pt-[52px] mx-auto mb-[83px]'>
              <input onChange={(e) => setImgUrl(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file"/>
              {imgUrl ?  <img className='w-full h-full' src={imgUrl} alt="choose img" width={`100%`} height={`100%`} />
              :<><UploadImg/>
              <strong className='font-bold text-[12px] leading-[20px] text-white mt-5 inline-block'>Upload Agent image here</strong></>}
            </label>
            <label className='flex flex-col w-[362px] mx-auto mt-[27px]'>
              <span className='text-[15px] text-white mb-[17px]'>Agent Name</span>
              <input value={userName} onChange={(e)=> setUserName(e.target.value)} className='py-[23px] pl-[34px] pr-[5px] text-white rounded-[130px] focus:shadow-md outline-none bg-transparent border-[2px] border-white focus:shadow-white' type="text" name="AgentName" placeholder='Enter name' required/>
            </label>
            <label className='flex flex-col w-[362px] mx-auto mt-[27px]'>
              <span className='text-[15px] text-white mb-[17px]'>Agent Email</span>
              <input type='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className='py-[23px] pl-[34px] pr-[5px] text-white rounded-[130px] focus:shadow-md outline-none bg-transparent border-[2px] border-white focus:shadow-white' name="AgentEmail" placeholder='Enter Email' required/>
            </label>
            <label className='flex flex-col w-[362px] mx-auto my-[27px]'>
              <span className='text-[15px] text-white mb-[17px]'>About</span>
              <input type='text' value={userAbout} onChange={(e)=> setUserAbout(e.target.value)} className='py-[23px] pl-[34px] pr-[5px] text-white rounded-[130px] focus:shadow-md outline-none bg-transparent border-[2px] border-white focus:shadow-white' name="AgentAbout" placeholder='Enter about agent' required/>
            </label>
           <Button extraStyle={`font-regular text-[10px] leading-[15px] text-white`} type={"submit"}>{id ? "Edit Agent":"Add Agent"}</Button>
        </form>
        {isLoading ? <CustomLoading/>:""}
      </div>
    </div>
  )
}

export default AgentsAdd