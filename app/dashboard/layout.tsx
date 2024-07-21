"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';

import { usePathname } from 'next/navigation'
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    const [totalUsage , setTotalUsage] = useState<Number>(0);
    const [userSubscription , setUserSubscription] = useState<boolean>(false);
    const [UpdateCreditUsage , setUpdateCreditUsage] = useState<any>()

  return (
    <TotalUsageContext.Provider value={{totalUsage , setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription , setUserSubscription}}>
        <UpdateCreditUsageContext.Provider value={{UpdateCreditUsage , setUpdateCreditUsage}}>
    <div className='bg-slate-100 h-screen'> 
         {/*className=' md:w-64 hidden md:block fixed'  */}
         
        <div className="flex flex-col min-h-screen w-full">
            <Header/>
            <SideNav/>      
        </div>
        <div className='  md:ml-64'>
        {children}

        </div>
    </div>
    </UpdateCreditUsageContext.Provider>
    </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
    
    
  )
}

export default layout