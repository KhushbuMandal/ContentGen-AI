
import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
  name : string,
  desc : string,
  icon:string,
  category: string,
  slug:string,
  aiPrompt: string,
  form? : FORM[]
}

export interface FORM{
  label:string,
  field: string,
  name:string,
  required?: boolean
}

function TemplateListSection({userSearchInput}:any) {

  const [templateList , setTemplateList] = useState(Templates);

  useEffect(()=>{
    //console.log(userSearchInput);

    if (userSearchInput){
      const filterData = Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
      setTemplateList(filterData);
    }else {
      setTemplateList(Templates);
    }
  },[userSearchInput])

  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mt-5 bg-slate-100'>
      {/* Templates->templateList */}
      {templateList.map((item:TEMPLATE , index:number) => (
        <TemplateCard {...item} />
      ))}
    </div>
  )
}

export default TemplateListSection