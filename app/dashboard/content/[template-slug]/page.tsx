'use client'
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import {Moment} from 'moment'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
// import { useRouter } from 'next/navigation'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
import { redirect, useRouter } from 'next/navigation'


interface PROPS{

  params:{
    'template-slug':string
  }

}

function CreateNewContent(props:PROPS) {

 //use it under useEffect console.log(props.params['template-slug'])
 const selectedTemplate:TEMPLATE | undefined=Templates?.find((item)=>item.slug==props.params["template-slug"]);

 const [loading , setLoading] = useState(false);
 const [aiOutput , setAiOutput] = useState<string>('');
 const {user} = useUser();
//  const router = useRouter;
  // const router = useRouter();
 const {totalUsage , setTotalUsage}=useContext(TotalUsageContext);
 const {userSubscription , setUserSubscription}=useContext(UserSubscriptionContext);
 const {updateCreditUsage , setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);

 /**
  * Used to Generate Content from AI
  * @param formData 
  * @returns 
  */


  const GenerateAIContent=async(formData:any) => {

    if (totalUsage >= 50000 && !userSubscription){
      console.log("Please Upgrade")
      // router.push('/dashboard/billing')
      redirect('/dashboard/billing')
      return null;
    }

    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;

    const FinalPrompt= JSON.stringify(formData)+","+SelectedPrompt;

    const result = await chatSession.sendMessage(FinalPrompt);

    console.log(result.response.text());
    setAiOutput(result?.response.text());

    await SaveInDb(formData , selectedTemplate?.slug , result?.response.text());
    setLoading(false);

    setUpdateCreditUsage(Date.now());
  }

  const SaveInDb = async(formData:any , slug:any,aiResp:string) => {
    const result = await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/YYYY'),
    });
    console.log(result);
  }

  return (
    <div className='md:p-10  bg-slate-100 h-screen'> 
      <Link href={"/dashboard"}>
        <Button className='m-5'> <ArrowLeft/>Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 bg-slate-100'>
        {/* Form Section */}
        <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(v:any)=>GenerateAIContent(v)}
        loading={loading}/>

        <div className='col-span-2'>
          {/* output Section */}
          <OutputSection aiOutput={aiOutput}/>
        </div>
        
      </div>
    </div>
  )
}

export default CreateNewContent


