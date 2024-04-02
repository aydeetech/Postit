import React from "react";
import userFeed from "../../data/Userfeed";
import { useQuery } from "@tanstack/react-query";
import { getUserBlogs } from "../../apiFetches/axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const UserStories = () => {
  const token = Cookies.get("token");
  const { data: stories, isLoading } = useQuery({
    queryFn: () => getUserBlogs(),
    queryKey: [{token}], 
    // cacheTime: 0,
    // staleTime: 0
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div
      className="p-12 flex flex-col gap-5"
      style={{ maxWidth: "1440px", margin: "auto" }}
    >
      <div className="flex justify-between">
        <h2 className="text-3xl font-heading font-bold">My Stories</h2>
        <Link to="/story/create">
          <button className=" p-3 bg-black-500 text-white-100 rounded-lg">
            Write Story
          </button>
        </Link>
      </div>

      <div className="space-x-12">
        <button>All</button>
        <button>Drafts</button>
        <button>Published</button>
      </div>
      <hr />

      <div className="space-y-5">
        {stories?.length < 1 ? (
          <div>You have no stories</div>
        ) : (
          stories?.map((story) => {
            return (
              <div
                className="flex items-center gap-12 justify-between"
                key={story._id}
              >
                <div className=" space-y-5 max-w-[1240.91px]">
                  <h2 className=" text-[28px] font-semibold ">{story.title}</h2>
                  <p className=" text-xl text-grey-100">
                    {story.body.substring(0, 150)}...
                  </p>
                  <p className=" text-grey-100 italic ">{story.blogStatus}</p>
                </div>

                <div className="flex gap-5">
                    <Link to={`/story/edit/${story._id}`}>
                    <button className="p-y-3 h-[52px] w-[153px] rounded-lg bg-blue-500 text-white-100 font-heading text-2xl">
                    Edit Post
                  </button>
                    </Link>
                  
                  <button className="p-y-3 h-[52px] w-[153px] rounded-lg border-2 border-blue-500 text-blue-500 text-2xl font-heading">
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default UserStories;
