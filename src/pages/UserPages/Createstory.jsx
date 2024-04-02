import { useMutation } from '@tanstack/react-query'
import React from 'react'
import {useForm, Controller} from "react-hook-form"
import { createBlog } from '../../apiFetches/axios'
import { useNavigate } from 'react-router-dom'


const Createstory = () => {
  const navigateTo = useNavigate()
  const {register,handleSubmit, control} = useForm()
  const {mutateAsync, data: success} = useMutation({
    mutationFn: createBlog
   })

  const onSubmit = async (data) => {
   const  formData = new FormData()
   formData.append("title", data.title)
   formData.append("tags", data.tags)
   formData.append("body",data.body)
  //  formData.append("bo",data.body)
   formData.append("image", data.image[0])

   try {
    mutateAsync(formData)
    if (success) {
      navigateTo("/mystories")
    }
   } catch (error) {
    console.log(error);
   }
   
  

  }
  return (
    <div className='container p-10 space-y-5 mt-14'>
      <div className='flex justify-between items-center'>
      <h2 className='font-heading font-bold text-4xl'>Create Story</h2>
      <button className=" p-3 bg-black-500 text-white-100 rounded-lg">
      Save as Draft
          </button>
      </div>
       

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="file" {...register("image")} required />
            <input type="text" {...register("title")} className=' h-14 w-full rounded-lg border-grey-100 border-2 font-heading text-black-500 placeholder:text-black-500 font-bold text-xl px-6' placeholder="Title" />
            <Controller 
            name='tags'
            // defaultValue="others"
            control={control}
            render={({field}) => (
              <>
              <select  {...field} name="" id="" className=' h-16 rounded-lg border-grey-100 border-2 px-6 font-heading text-black-500 text-xl font-bold'>
                <option value="">Tags</option>
                <option value="technology">Technology</option>
                <option value="nature">Nature</option>
                <option  value="lifestyle">Lifestyle</option>
            </select>
              </>
  )}
            />
            
            <textarea name="" {...register("body")} className=' h-96 w-full max-h-screen rounded-lg border-grey-100 border-2 resize-none font-heading text-black-500 placeholder:text-black-500 font-bold text-xl p-6' placeholder="Write Story..." >

            </textarea>
            <button className='md:w-[438.55px] w-full rounded-lg mx-auto h-[67px] bg-blue-500 text-white-100 font-heading font-bold text-xl'>Publish Story</button>
                    </form>
    </div>
  )
}

export default Createstory