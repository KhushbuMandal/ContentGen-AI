import { Button } from '@/components/ui/button'//
import { Input } from '@/components/ui/input'//
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    // <div className='p-5 shadow-sm border-b-2 border-purple-300 flex justify-between items-center '>
    //     <div className='flex gap-2 items-center p-2 border border-purple-300 rounded-md max-w-lg'> 
    //         <Search/>
    //         <input type='text' placeholder='Search...'
    //         className='outline-none'/>
    //     </div>

    //     <div className='bg-primary p-5 rounded-full text-xs text-white px-2 '>
    //     🔥 Join Membership just for $9.99/Month
    //     </div>
    // </div>

    <header className=" sticky top-0 z-20 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 shadow-sm md:ml-64 ">
        <div className="relative flex-1">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground " />
          <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8" />
        </div>
        <Button variant="outline" className="shrink-0 bg-primary text-white">
        🔥Join Memebership
        </Button>
        <UserButton/>
    </header>
  )
}

export default Header