import { getRecentBlogs } from "../../apiFetches/axios"
import { useQuery } from "@tanstack/react-query"

const RecentStories = () => {
    const {data: recent, isLoading} = useQuery({
        queryFn: () => getRecentBlogs(),
        queryKey: ["recentBlogs"]
    })

    if (isLoading) {
        return <div>Loading ...</div>
    }
  return (
    <div className="my-10">
        <div className=" w-11/12 mx-auto border-2 flex md:flex-row flex-col md:gap-4 gap-2 justify-between border-grey-100 rounded-sm p-5 ">
            {
                recent?.map((r) => {
                    return <div className="flex md:flex-col xl:flex-row flex-row justify-center items-center gap-7 w-96" key={r._id}>
                        <img src={r.image} alt="" className=" w-36 h-full object-cover rounded-md" />

                        <div className="flex w-full xl:items-start md:items-center items-start flex-col gap-4 md:p-0 p-2">
                            <span className="px-4 h-7 rounded-md flex md:justify-center items-center text-white-100 bg-blue-500">{r.tags}</span>
                            <p className=" max-w-[217px] xl:text-left md:text-center text-left">{r.title}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default RecentStories