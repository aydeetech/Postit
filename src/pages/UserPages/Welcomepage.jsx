import React from "react";
import stories_img from "../../assets/stories_page.svg"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const Welcomepage = () => {
    const navigate = useNavigate()
    const token = Cookies.get('token')
    let decoded = null

    if (token) {
      decoded = jwtDecode(token)
      console.log(decoded);
    }
  return (
    <div className="h-[514px]">
      <div className="flex items-center justify-between gap-10 w-full h-full p-10" style={{maxWidth: "1440px", margin: "auto"}}>
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-black-500 text-7xl font-bold">Welcome {decoded?.username},</h2>
          <p className="text-xl leading-9 w-[538px] w-">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <div className="w-full flex gap-4">
            <button className="text-white-100 font-heading text-3xl font-bold bg-blue-500 w-[230px] h-[53px] rounded-lg" onClick={() => navigate("/mystories")} >My Stories</button>
            <button className="border-2 border-blue-500 text-blue-500 font-heading text-3xl font-bold w-[230px] h-[53px] rounded-lg" onClick={() => navigate("/stories")}>Go To Feed</button>
          </div>
        </div>

        <div className=" w-4/5">
            <img src={stories_img} alt="" className="mb-6" />
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
