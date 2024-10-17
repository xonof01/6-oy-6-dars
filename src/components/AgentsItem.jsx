import { Checkbox } from 'antd'
import React, { useContext, useState } from 'react'
import { DeleteIcon, MoreIcon } from '../assets/images/Icon'
import { Context } from '../context/context'
import { useNavigate } from 'react-router-dom'

const AgentsItem = ({item,handleDeleteBtnClick}) => {
    const {agents,setAgents} = useContext(Context)
    const [isPending,setIsPending] = useState(false)
    const [isChecked,setisChecked] = useState(item.isChecked)
    const navigate = useNavigate()

    function handleStatusClickBtn(){
        setIsPending(true)
        setTimeout(() => {
            setIsPending(false)
            item.status = !item.status
            setAgents([...agents])
        }, 1000);
    }
    function handleChakedBtn(){
        item.Checked = !item.Checked
    }
     
  return (
    <tr className='border-[2px] border-white'>
        <td className='space-x-[15px] py-[19px] pl-5'>
        <Checkbox chacked={isChecked}  onChange={handleChakedBtn}></Checkbox>
        <button onClick={handleStatusClickBtn} className={`${isPending ? "active-pending":(item.status ? `bg-green-400`:`bg-red-500`)} w-[91px] font-bold text-[12px] leading-[18px] py-[6px] text-center text-white rounded-[215px] duration-300`}>{isPending ? "Pending" :item.status ? "Active":"Down"}</button>
        </td>
        <td className='flex items-center justify-center space-x-[17px] py-[19px]'> 
        <img className='rounded-full' src={item.img} alt="random-img" width={36} height={36} />
        <strong className='font-regular text-[12px] leading-5 text-white'>{item.username}</strong>
        </td>
        <td className='text-white text-center text-[12px] leading-[19px] py-[19px]'>{item.useremail}</td>
        <td className='space-x-[17px] text-end py-[19px] pr-5 rounded-rt-[100px]'>
        <button onClick={() => handleDeleteBtnClick(item.id)} className='hover:scale-[1.4] duration-300 align-middle'>
            <DeleteIcon/>
        </button>
        <button onClick={() => navigate(`${item.id}`)} className='hover:scale-[1.4] duration-300 align-middle'>
            <MoreIcon/>
        </button>
        </td>
    </tr>
  )
}

export default AgentsItem