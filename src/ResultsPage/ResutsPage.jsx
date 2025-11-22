import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResutsPage = () => {
    const navigate = useNavigate()
  return (
    <> 
     <div className='bg-transparent  p-8 rounded-lg shadow-md text-center'>
    <h1 className='text-4xl font-bold text-violet mb-6'>Here are your score for this questioning session</h1>

    <p className='text-lg text-gray-900 mb-8'>Score 1 of 10</p>

    <div className=''>
        <button className='bg-transparent p-8 hover:bg-[#232024] text-white font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105' onClick={()=> navigate('/')}>Home</button>
        <button className='bg-transparent p-8 hover:bg-[#232024] text-white font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105' onClick={()=> navigate('/quizz')}>Play Again</button>
    </div>
    </div>
    </>
  )
}

export default ResutsPage