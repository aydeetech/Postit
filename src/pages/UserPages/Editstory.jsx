
import { useParams,useNavigate } from 'react-router-dom'
import {useForm, Controller} from "react-hook-form"
import { useEffect } from 'react'
import { useQuery,useMutation } from '@tanstack/react-query'
import { editBlog, getABlog } from '../../apiFetches/axios'

const Editstory = () => {
  const {blogId} = useParams()
  const {register,handleSubmit, control, setValue} = useForm()

  // console.log(blogId);

  const {data: blog} = useQuery({
    queryFn: () => getABlog(blogId),
    queryKey: ["blogData",{blogId}]
  })

  const {mutateAsync,isSuccess,data: response} = useMutation({
    mutationFn: editBlog,
  
   })

   if (isSuccess) {
    console.log(response);
  }

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData()
    formData.append("title", "testing edit function")
    formData.append("tags", data?.tags)
    formData.append("body",data?.body)
    // Check if user uploaded an image
  // Only include the image if a new one is selected:
  if (data.image[0]) {
    formData.append("image", data.image[0]);
  } else {
    // If no new image is provided, use the existing image URL from the data
    formData.append("image", blog?.image);
  }

 

    await mutateAsync(blogId,formData)
    
  
    
   
 
   }

   useEffect(() => {
    setValue("title", blog?.title)
    setValue("tags", blog?.tags)
    setValue("body", blog?.body)
   },[blogId])


  return (
    <div className='container p-10 space-y-5 mt-14'>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="file" {...register("image")} name="" id="" />
            <div className='flex h-14 w-full items-center rounded-lg border-grey-100 border-2'>
                <label htmlFor="" className='pl-6 font-heading bg-transparent text-black-500 font-bold text-xl'>Title:</label>
            <input type="text"  className='w-full h-full rounded-lg  font-heading text-black-500 bg-transparent placeholder:text-black-500 outline-none font-bold text-xl px-6' />
            </div>
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
            <textarea name="" {...register("body")}  className=' h-96 w-full max-h-screen rounded-lg border-grey-100 border-2 resize-none font-heading text-black-500 placeholder:text-black-500 font-bold text-xl p-6' placeholder="Write Story..." >

            </textarea>
            <button className='md:w-[438.55px] w-full rounded-lg mx-auto h-[67px] bg-blue-500 text-white-100 font-heading font-bold text-xl'>Update Story</button>
                    </form>
    </div>
  )
}

export default Editstory