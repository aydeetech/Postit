import React from "react";
import { useParams } from "react-router-dom";
import userFeed from "../../data/Userfeed";
import user from "../../assets/user.svg";
import facebook from "../../assets/share_fb.svg";
import twitter from "../../assets/share_twitter.svg";
import whatsapp from "../../assets/share_whatsapp.svg";



const SingleStoryPage = () => {
  
  
  const { storyId } = useParams();
  const singleStory = userFeed.find((feed) => feed._id === Number(storyId));
  const paragraph = singleStory?.description.split("\n");
  
  return (
    <div style={{ maxWidth: "1440px", margin: "auto" }}>
      <div className="px-6 pt-12 pb-24 flex flex-col gap-5">
        <span className="px-4 h-7 rounded-md  text-white-100 self-start bg-blue-500">
          {singleStory?.tag}
        </span>
        <h2 className="font-heading font-bold text-6xl max-w-[956px]">
          {singleStory?.title}
        </h2>
        <div className="flex items-center gap-3">
          <img src={user} alt="" className=" w-6 h-6 object-cover" />
          <p className=" text-grey-100 text-xs">
            By <span className="text-black-500">{singleStory?.author} </span> -{" "}
            {singleStory?.date}{" "}
          </p>
        </div>
        <hr className="bg-grey-100" />
        <div className="w-full">
          <img
            src={singleStory?.image}
            alt=""
            className="w-full h-[537px] object-cover cur"
          />
        </div>

        {paragraph?.map((p, i) => {
          return (
            <p
              key={i}
              className="text-grey-100 text-2xl leading-8 text-justify"
            >
              {" "}
              {p}{" "}
            </p>
          );
        })}

        <div className="flex gap-3 items-center">
          <p className=" text-2xl">Share post;</p>

          <div className="flex gap-4">
            <span><img src={twitter} alt="" /></span>
            <span><img src={facebook} alt="" /></span>
            <span><img src={whatsapp} alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStoryPage;
