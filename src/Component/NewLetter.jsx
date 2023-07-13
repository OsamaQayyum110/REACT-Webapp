import React from 'react'

const NewLetter = () => {
    return (
        <div className='w-full py-16 text-white px-4 '>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p>
                        Sign up to our newsletter and stay up to date.
                    </p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3  flex w-full rounded-md text-black' placeholder='Enter Email' type='email'/>
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 md:transform md:transition-transform md:hover:scale-105 hover:bg-[#16ffb5]' >Notify Me</button>
                    </div>
                    <p>
                    We care bout the protection of your data. Read our{' '}
                    <span className='text-[#16ffb5]'>Privacy Policy. </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewLetter