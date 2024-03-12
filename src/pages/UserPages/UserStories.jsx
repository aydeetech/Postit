import React from 'react'
import userFeed from "../../data/Userfeed"
const UserStories = () => {
  return (
    <div className='p-12 flex flex-col gap-5' style={{maxWidth: "1440px", margin: "auto"}}>
        <div className='flex justify-between'>
            <h2 className='text-3xl font-heading font-bold'>My Stories</h2>

            <button className=' p-3 bg-black-500 text-white-100 rounded-lg'>Write Story</button>
        </div>

        <div className='space-x-12'>
            <button>All</button>
            <button>Drafts</button>
            <button>Published</button>
        </div>
        <hr />

        <div>
            {
                userFeed.map((story) => {
                    return <div key={story._id}>
                        <h2>{story.title}</h2>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default UserStories