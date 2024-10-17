import React from 'react'
import LoadingImg  from "../assets/images/loading.png"

const CustomLoading = () => {
  return (
    <div className='fixed inset-0 bg-[#00000059] backdrop-blur'>
        <img className='mx-auto mt-[200px]' src={LoadingImg} alt="Loading..." width={300} />
    </div>
  )
}

export default CustomLoading