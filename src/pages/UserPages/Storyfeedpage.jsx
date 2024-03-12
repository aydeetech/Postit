import React from 'react'
import stories_img from "../../assets/stories_page.svg"
import Feed from '../../components/Feed/Feed'

const Storyfeedpage = () => {
  return (
    <div>
        <div className="h-[514px] bg-white-200">
      <div className="flex items-center justify-between gap-10 w-full h-full p-10" style={{maxWidth: "1440px", margin: "auto"}}>
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-black-500 text-7xl font-bold">You’ve got a story, Post<span className="text-blue-500">it</span>.</h2>
          <p className="text-xl leading-9 w-[538px]">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          
        </div>

        <div className=" w-4/5">
            <img src={stories_img} alt="" className="mb-6" />
        </div>
      </div>
    </div>
    <Feed />
    </div>
  )
}

export default Storyfeedpage