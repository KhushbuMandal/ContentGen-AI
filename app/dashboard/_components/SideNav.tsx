"use client"
import {  ChevronLeftIcon, ChevronRightIcon, FileClock, Home, HomeIcon, MenuIcon, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import path from 'path'
import React, { useEffect, useState } from 'react'


import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import SearchSection from './SearchSection'
import TemplateListSection from './TemplateListSection'

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import UsageTrack from './UsageTrack'


function SideNav() {

    const [userSearchInput , setUserSerchInput] = useState<string>()
    

    const MenuList = [
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },

    ]

    const pathname = usePathname();
    const path=usePathname();
    useEffect(() => {
        console.log(path);
    } , [])

    

  return (
    // <div className='h-screen p-5 shadow-sm border border-purple-300'>
    //     <div className='flex justify-center '>
    //         <Image src={'/logo.svg'} alt='logo' width={70} height={70}/>
    //     </div>
    //     <hr className='my-7 border border-purple-300'/>
    //     <div className='mt-10'> 
    //         {MenuList.map((menu,index)=>(
    //             <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
    //             ${path==menu.path && 'bg-primary text-white' }`}> 
    //                 <menu.icon className='h-6 w-6'/>
    //                 <h2 className='text-lg font-semibold'>{menu.name}</h2>
    //             </div>
    //         ))}

    //     </div>
        
    // </div>

    <div className="flex flex-1 flex-col">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background shadow-lg md:flex">
          <div className="flex h-16 shrink-0 items-center px-6">
            <Link href="#" className="flex justify-center items-center gap-2 font-semibold" prefetch={false}>
              {/* <MountainIcon className="h-6 w-6" />
              <span className="text-lg">Acme Inc</span> */}
              <Image  src={'/logo.svg'} alt='logo' width={70} height={70}/>
              <span className="text-lg underline">ContentGen AI</span>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 px-4 py-6">
            <Link
              href="/dashboard"
              className={`flex items-center mb-3 gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white ${path=='/dashboard' && 'bg-primary text-white' }`}
            //   hover:bg-muted hover:text-foreground 
              prefetch={false}
            >
              {/* <HomeIcon className="h-5 w-5" /> */}
              <HomeIcon />
              Home
            </Link>
            <Link
              href="/dashboard/history"
              className={`flex items-center mb-3 gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white ${path=='/dashboard/history' && 'bg-primary text-white' }`}
              prefetch={false}
            >
              {/* <ClockIcon className="h-5 w-5" /> */}
              <FileClock />
              History
            </Link>
            <Link
              href="/dashboard/billing"
              className={`flex items-center mb-3 gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white ${path=='/dashboard/billing' && 'bg-primary text-white' }`}
              prefetch={false}
            >
              {/* <CreditCardIcon className="h-5 w-5" /> */}
              <WalletCards/>
              Billing
            </Link>
            <Link
              href="/dashboard/setting"
              className={`flex items-center mb-3 gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white ${path=='/dashboard/setting' && 'bg-primary text-white' }`}
              prefetch={false}
            >
              {/* <SettingsIcon className="h-5 w-5" /> */}
              <Settings/>
              Settings
            </Link>
          </nav>
          <div className=' absolute bottom-10 left-0 w-full'>
            <UsageTrack/>
          </div>
        </aside>
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="outline" className="shrink-0 md:hidden">
              {/* <MenuIcon className="h-5 w-5" /> */}
              <MenuIcon className='h-5 w-5'/>
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="flex h-16 shrink-0 items-center px-6">
              <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <Image  src={'/logo.svg'} alt='logo' width={70} height={70}/>
              <span className="text-lg underline">ContentGen AI</span>
              </Link>
            </div>
            <nav className="flex-1 space-y-1 px-4 py-6">
              <Link
                href={"/dashboard"}
                className={`flex items-center mb-3 gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white `}
                prefetch={false}
              >
                <HomeIcon className="h-5 w-5" />
                Home
              </Link>
              <Link
                 href="/dashboard/history"
                 className={`flex items-center mb-3 gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white ${path=='/dashboard/history' && 'bg-primary text-white' }`}
                prefetch={false}
              >
                {/* <ClockIcon className="h-5 w-5" /> */}
                <FileClock/>
                History
              </Link>
              <Link
                href="/dashboard/billing"
                className={`flex items-center mb-3 gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white ${path=='/dashboard/billing' && 'bg-primary text-white' }`}
                prefetch={false}
              >
                {/* <CreditCardIcon className="h-5 w-5" /> */}
                <WalletCards/>
                Billing
              </Link>
              <Link
                href="/dashboard/setting"
                className={`flex items-center mb-3 gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-white ${path=='/dashboard/setting' && 'bg-primary text-white' }`}
                prefetch={false}
              >
                {/* <SettingsIcon className="h-5 w-5" /> */}
                <Settings/>
                Settings
              </Link>
            </nav>
            <div className=' absolute bottom-10 left-0 w-full'>
              <UsageTrack/>
            </div>
          </SheetContent>
        </Sheet>
        <main className="flex-1 p-6 md:ml-64">
          {/* <h1 className="text-2xl font-bold">Welcome to Acme Inc</h1>
          <p className="mt-4 text-muted-foreground">This is the main content area of the page.</p> */}
          {/* Search Section */}
          <SearchSection onSearchInput={(value:string) =>setUserSerchInput(value) }/>
      
      {pathname !== '/dashboard' && (
      <div className="relative w-full max-w-6xl mx-auto pt-10">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://enews.hamariweb.com/tpl_assets/2024/01/AI-images.png"
                  width={600}
                  height={400}
                  alt="Slide 1"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Discover the Future</h3>
                <p className="text-muted-foreground">
                  Explore our innovative products and services that are revolutionizing the industry.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium  hover:text-primary"
                  prefetch={false}
                >
                  Learn More
                  
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/boy-programming-room-rendered-3d-style_870512-147.jpg"
                  width={600}
                  height={400}
                  alt="Slide 2"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Elevate Your Experience</h3>
                <p className="text-muted-foreground">
                  Our cutting-edge solutions are designed to enhance your everyday life.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium hover:text-primary"
                  prefetch={false}
                >
                  Explore Now
                  
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/029/848/759/large_2x/cute-artificial-intelligence-robot-with-notebook-ai-generated-free-photo.jpg"
                  width={600}
                  height={400}
                  alt="Slide 3"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Redefine the Possible</h3>
                <p className="text-muted-foreground">
                  Our innovative solutions are designed to push the boundaries of what's possible.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium hover:text-primary"
                  prefetch={false}
                >
                  Get Started
                  
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 transition-colors">
          {/* <ChevronLeftIcon className="w-6 h-6 text-primary" /> */}
          <ChevronLeftIcon/>
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 transition-colors">
          {/* <ChevronRightIcon className="w-6 h-6 text-primary" /> */}
          <ChevronRightIcon/>
        </CarouselNext>
      </Carousel>
    </div>
    )}

          {/* Template List Section */}
          {pathname === '/dashboard' && (
            <TemplateListSection userSearchInput={userSearchInput} />
          )}
          
        </main>        
      </div>
    
    )

  }

  // function ClockIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <circle cx="12" cy="12" r="10" />
  //       <polyline points="12 6 12 12 16 14" />
  //     </svg>
  //   )
  // }
  
  
  // function CreditCardIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <rect width="20" height="14" x="2" y="5" rx="2" />
  //       <line x1="2" x2="22" y1="10" y2="10" />
  //     </svg>
  //   )
  // }
  
  
  // function HomeIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  //       <polyline points="9 22 9 12 15 12 15 22" />
  //     </svg>
  //   )
  // }
  
  
  // function MenuIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <line x1="4" x2="20" y1="12" y2="12" />
  //       <line x1="4" x2="20" y1="6" y2="6" />
  //       <line x1="4" x2="20" y1="18" y2="18" />
  //     </svg>
  //   )
  // }
  
  
  // function MountainIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  //     </svg>
  //   )
  // }
  
  
  // function SettingsIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
  //       <circle cx="12" cy="12" r="3" />
  //     </svg>
  //   )
  // }
  
  
  // function XIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M18 6 6 18" />
  //       <path d="m6 6 12 12" />
  //     </svg>
  //   )
  // }


  // function ArrowRightIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M5 12h14" />
  //       <path d="m12 5 7 7-7 7" />
  //     </svg>
  //   )
  // }
  
  
  // function ChevronLeftIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="m15 18-6-6 6-6" />
  //     </svg>
  //   )
  // }
  
  
  // function ChevronRightIcon(props) {
  //   return (
  //     <svg
  //       {...props}
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="m9 18 6-6-6-6" />
  //     </svg>
  //   )
  // }
  
  

  
 

export default SideNav