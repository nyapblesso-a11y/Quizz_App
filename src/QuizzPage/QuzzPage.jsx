import React from 'react'
import './QuizzPage.css'
export const QuzzPage = () => {
  return (
    <>
    <div className='bg-transparent  p-8 rounded-lg shadow-md text-center'>
     <h1 className='text-4xl font-bold text-violet mb-6'>Questions for you!</h1>
     <h6 className='text-lg text-gray-900 mb-8'>Have Fun</h6>
     <p>questions here</p>
     <button className='bg-transparent p-8 hover:bg-[#232024] text-white font-bold py-3 px-6 rounded-1.5xl text-xl transition duration-300 ease-in-out transform hover:scale-105'><span>check scores</span></button>
    </div>
    </>
  )
}
