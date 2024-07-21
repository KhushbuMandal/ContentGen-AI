'use client'

import React, { useContext, useState } from 'react';
import axios from 'axios'
import { error } from 'console';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
//import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

const Billing = () => {
  const [loading, setLoading] = useState(false)
  const {user} = useUser()
  const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext);

  const CreateSubscription = () => {
    setLoading(true)
    axios.post('/api/create-subscription', {}).then(resp => {
      console.log(resp.data)
      OnPayment(resp.data.id)
    }, (error) => {
      setLoading(false)
    })
  }

  const OnPayment = (subId: string) => {
    const options = {
      "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription_id":subId,
      "name":'ContentGen AI',
      description:'Monthly Subsciption',
      handler:async(resp:any) => {
        //console.log(resp)
        if(resp){
          SaveSubscription(resp?.razorpay_payment_id)
        }
        setLoading(false)
      }
    }

    // @ts-ignore
    const rzp = window.Razorpay(options)
    rzp.open()
  }

  const SaveSubscription = async (paymentId:string) => {
    const result = await db.insert(UserSubscription).values({
      email:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      active:true,
      paymentId:paymentId,
      joinDate:moment().format('DD/MM/yyyy')
    })
    console.log(result)
    if(result){
      window.location.reload()
    }
  } 

  return (
     <div>
      <script src='https://checkout.razorpay.com/v1/checkout.js'></script>
      <div className="flex flex-col  items-center p-8 bg-slate-100">
      <h1 className="text-3xl font-bold mb-8">Upgrade With Monthly Plan</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8 ">
        <div className="bg-white rounded-lg shadow-lg p-8 w-80 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <p className="text-4xl font-bold mb-4">0$ <span className="text-lg font-normal">/month</span></p>
          <ul className="text-left mb-4">
            <li className="mb-2"><span className="text-blue-500">✓</span> 50,000 Words/Month</li>
            <li className="mb-2"><span className="text-blue-500">✓</span> 50+ Content Templates</li>
            <li className="mb-2"><span className="text-blue-500">✓</span> Unlimited Download & Copy</li>
            <li><span className="text-blue-500">✓</span> 1 Month of History</li>
          </ul>
          <button
          className="flex gap-2 items-center bg-blue-500 text-white rounded-full px-10 py-2 mt-3 hover:bg-blue-700 hover:scale-105">
             Your Active Plan
          </button> 
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 w-80 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4">Monthly</h2>
          <p className="text-4xl font-bold mb-4">9.99$ <span className="text-lg font-normal">/month</span></p>
          <ul className="text-left mb-4">
            <li className="mb-2"><span className="text-blue-500">✓</span> 5,00,000 Words/Month</li>
            <li className="mb-2"><span className="text-blue-500">✓</span> 50+ Template Access</li>
            <li className="mb-2"><span className="text-blue-500">✓</span> Unlimited Download & Copy</li>
            <li><span className="text-blue-500">✓</span> 1 Year of History</li>
          </ul>
          <button onClick={() => CreateSubscription()} 
          disabled={loading}
          className="flex gap-2 items-center bg-blue-500 text-white rounded-full px-10 py-2 mt-3 hover:bg-blue-700 hover:scale-105">
            {loading && <Loader2Icon className='animate-spin' />}
             {userSubscription ? 'Active Plan' : 'Get Started'}
          </button> 
        </div>
      </div>
    </div>
     </div>
  );
};

export default Billing;
//grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8