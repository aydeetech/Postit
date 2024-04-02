
import close from "../assets/close.svg"
import { useGlobalContext } from "../hooks/useGlobalContext"
import {useForm} from "react-hook-form"
import Cookies from "js-cookie"
import axios from "axios"
import { ThreeCircles } from "react-loader-spinner"
import { useState } from "react"

const Login = () => {
  const {setShowLogin, setShowSignUp} = useGlobalContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const {register, handleSubmit, formState: {errors}} = useForm()
  const Api_Url = "http://localhost:3000/api/v1/login"

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

  const handleSwitch = () => {
    setShowLogin(false)
    setShowSignUp(true)
  }
  return (
    <div className=" h-screen bg-white-200 bg-opacity-80 fixed top-0 right-0 w-full z-50">
    <div className="h-full flex flex-col bg-white-100 shadow-lg max-w-[653px] p-5 mx-auto">
        <span className=" self-end me-5" onClick={() => setShowLogin(false)}><img src={close} alt="" /></span>

        <form className="flex flex-col self-center mt-32 gap-6  w-[415px]" onSubmit={handleSubmit(onSubmit)}>
        <h2 className=" text-black-500 text-4xl text-center mb-4 font-heading font-bold">
          Welcome Back
        </h2>

        {error && <div className=" text-[#FF0000] w-100 text-center">{error}</div>}
        <label className="self-center font-heading text-lg">Your Email Address</label>
        <input type="email" {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Give a valid email address"}
            })} className=" border-x-0 border-t-0 border-b-2 w-100 border-b-black-300 outline-none text-center"  />
            {errors.email && <div className="text-[#FF0000] text-sm text-center font-semibold -mt-2">{errors.email.message}</div>}
        <label className="self-center font-heading text-lg">Password</label>
        <input type="password" {...register("password", {
              required: "Password is required",
            })} className=" border-x-0 border-t-0 border-b-2 w-100 border-b-black-300 outline-none text-center"  />
            {errors.password && <div className="text-[#FF0000] text-sm text-center font-semibold -m-2">{errors.password.message}</div>}
        <button className="text-white-100 w-full bg-blue-500 font-heading h-12 text-2xl rounded-lg font-bold">{isLoading ? <ThreeCircles
  visible={true}
  height="35"
  width="100"
  color="#ffff"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> : "Continue"}</button>

        <p className="font-bold text-center">No account? <span className="text-blue-500 font-heading text-xl cursor-pointer" onClick={handleSwitch}> Sign Up</span></p>
        </form>
    </div>
</div>
  )
}

export default Login