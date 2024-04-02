import { useEffect, useState } from "react"
import close from "../assets/close.svg"
import { useGlobalContext } from "../hooks/useGlobalContext"
import { useForm } from "react-hook-form" 
import axios from "axios"
import { ThreeCircles } from "react-loader-spinner"
import Cookies from "js-cookie"

const SignUp = () => {
  const {setShowSignUp, setShowLogin, userEmail} = useGlobalContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const {register, handleSubmit, setValue, formState: {errors}} = useForm()
  const Api_Url = "http://localhost:3000/api/v1/register"

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const res = await axios.post(`${Api_Url}`, data)

      if (res.data.success) {
        Cookies.set("token", res.data.token)
        setShowSignUp(false)
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false)
      setError(error.message)

      setTimeout(() => {
        setError("")
      }, 3000);
    }
  }

  useEffect(() => {
    setValue("email", userEmail)
  },[userEmail, setValue])


  const handleSwitch = () => {
    setShowSignUp(false)
    setShowLogin(true)
  }
  return (
    <div className=" h-screen bg-white-200 bg-opacity-80 fixed top-0 right-0 w-full z-50">
        <div className="h-full flex flex-col bg-white-100 shadow-lg max-w-[653px] p-5 mx-auto">
            <span className=" self-end me-5" onClick={() => setShowSignUp(false)}><img src={close} alt="" /></span>

            <form className="flex flex-col self-center mt-12 gap-6" onSubmit={handleSubmit(onSubmit)}>
            <h2 className=" text-black-500 text-2xl text-center mb-4 font-heading font-bold">
              Join Post<span className=" text-blue-500">it</span>.
            </h2>

            <p>Enter your email address to create an account on Post<span className=" text-blue-500">it</span>.</p>
            {error && <div className=" text-[#FF0000] w-100 text-center">{error}</div>}
            <label className="self-center font-heading text-lg">Username</label>
            <input type="text" {...register("username", {
              required: "Username is required"
            })} className=" border-x-0 border-t-0 border-b-2 w-100 border-b-black-300 outline-none text-center" />
            {errors.username && <div className="text-[#FF0000] text-sm text-center font-semibold -mt-4">{errors.username.message}</div>}
            <label className="self-center font-heading text-lg">Your Email Address</label>
            <input type="email" {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Give a valid email address"}
            })} className=" border-x-0 border-t-0 border-b-2 w-100 border-b-black-300 outline-none text-center"  />
            {errors.email && <div className="text-[#FF0000] text-sm text-center font-semibold -m-2">{errors.email.message}</div>}
            <label className="self-center font-heading text-lg">Password</label>
            <input type="password" {...register("password", {
              required: "Password is required",
            })} className=" border-x-0 border-t-0 border-b-2 outline-none w-100 border-b-black-300 om utline-none text-center"  />
            {errors.password && <div className="text-[#FF0000] text-sm text-center font-semibold -m-2">{errors.password.message}</div>}
            <button className="text-white-100 w-full flex justify-center items-center bg-blue-500 font-heading h-12 text-2xl rounded-lg font-bold">{isLoading ? <ThreeCircles
  visible={true}
  height="35"
  width="100"
  color="#ffff"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> : "Continue"}</button>

            <p className="font-bold text-center">Already have an account? <span className="text-blue-500 font-heading text-xl cursor-pointer" onClick={handleSwitch}> Sign In</span></p>
            </form>
        </div>
    </div>
  )
}

export default SignUp