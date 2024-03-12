import userFeed from "../../data/Userfeed";
import user from "../../assets/user.svg";
import arrow from "../../assets/blue_arrow.svg";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);

    setIsLoading(false);
  }, []);

  return (
    <div style={{ maxWidth: "1600px", margin: "auto" }}>
      <div className="w-11/12 mx-auto mt-16 mb-28 pl-8">
        <div className="grid grid-cols-3 gap-y-12 ">
          {userFeed.map((feed) => {
            const { _id, title, image, author, date, tag, description } = feed;
            return (
              <div key={_id} className="w-[381px] flex flex-col gap-4">
                {isLoading ? (
                  <div className="relative">
                    <span className="px-4 h-7 rounded-md  text-white-100 bg-blue-500 absolute start-4 bottom-4">
                      {tag}
                    </span>

                    <img
                      src={image}
                      alt=""
                      className="w-[379px] h-[296px] object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <Skeleton height={296}></Skeleton>
                )}
                {isLoading ? (
                  <h2 className=" text-[22px] font-semibold">{title}</h2>
                ) : (
                  <Skeleton height={26}></Skeleton>
                )}
                {isLoading ? null : (
                  <Skeleton width={`50%`} height={26}></Skeleton>
                )}
                <div className="flex items-center gap-3">
                  {isLoading ? (
                    <img src={user} alt="" className=" w-6 h-6 object-cover" />
                  ) : (
                    <Skeleton
                      width={`1.5rem`}
                      height={`1.5rem`}
                      circle
                    ></Skeleton>
                  )}
                  {isLoading ? (
                    <p className=" text-grey-100 text-xs">
                      By <span className="text-black-500">{author} </span> -{" "}
                      {date}{" "}
                    </p>
                  ) : (
                    <Skeleton width={120}></Skeleton>
                  )}
                </div>
                {isLoading ? (
                  <div>
                    <p className="text-grey-100 leading-8">
                      {description.substring(0, 210)}
                    </p>
                    <p className="text-blue-500 flex gap-2 items-center">
                      <img src={arrow} alt="" />
                      <Link to={`/stories/${_id}`}>Read More...</Link>
                    </p>{" "}
                  </div>
                ) : (
                  <Skeleton count={5} height={20}></Skeleton>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex gap-8 justify-center">
          <button className="w-[33px] h-[33px] rounded-sm  bg-white-200 justify-center items-center hover:bg-blue-500 focus:bg-blue-500 focus:text-white-100 font-bold">
            &lt;
          </button>
          <button className="w-[33px] h-[33px] rounded-sm  bg-white-200 justify-center items-center hover:bg-blue-500 focus:bg-blue-500 focus:text-white-100">
            1
          </button>
          <button className="w-[33px] h-[33px] rounded-sm  bg-white-200 justify-center items-center hover:bg-blue-500 focus:bg-blue-500 focus:text-white-100">
            2
          </button>
          <button className="w-[33px] h-[33px] rounded-sm  bg-white-200 justify-center items-center hover:bg-blue-500 focus:bg-blue-500 focus:text-white-100 font-bold">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
