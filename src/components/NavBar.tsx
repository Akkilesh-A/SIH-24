import React from 'react'
import { Button } from './ui'

const NavBar = () => {
  return (
    <div className='h-[10vh] bg-darkTeal p-4 flex justify-between items-center'>
        <div className='flex gap-8 items-center'>
            <div className='flex pl-2 pr-6 gap-4 bg-teal  p-2 rounded-full'>
                <Button className='rounded-full hover:underline hover:bg-white bg-white opacity-70'>Home</Button>
                <Button className='rounded-full hover:underline text-white'>About</Button>
                <Button className='rounded-full hover:underline text-white'>Sign In</Button>
            </div>
            <Button className='bg-mildOrange px-8 py-6 rounded-full hover:underline hover:bg-mildOrange'>Sign In</Button>
        </div>
    </div>
  )
}

export default NavBar