
import close from "../assets/close.svg"
import { useGlobalContext } from "../hooks/useGlobalContext"

const Login = () => {
  const {setShowLogin, setShowSignUp} = useGlobalContext()

  const handleSwitch = () => {
    setShowLogin(false)
    setShowSignUp(true)
  }
  return (
    <div className=" h-screen bg-white-200 bg-opacity-80 fixed top-0 right-0 w-full z-50">
    <div className="h-full flex flex-col bg-white-100 shadow-lg max-w-[653px] p-5 mx-auto">
        <span className=" self-end me-5" onClick={() => setShowLogin(false)}><img src={close} alt="" /></span>

        <form className="flex flex-col self-center mt-32 gap-6  w-[415px]">
        <h2 className=" text-black-500 text-4xl text-center mb-4 font-heading font-bold">
          Welcome Back
        </h2>

        
        <label className="self-center font-heading text-lg">Your Email Address</label>
        <input type="email" className=" border-x-0 border-t-0 border-b-2 w-100 border-b-black-300 outline-none text-center"  />
        <label className="self-center font-heading text-lg">Password</label>
        <input type="password" className=" border-x-0 border-t-0 border-b-2 w-100 border-b-black-300 outline-none text-center"  />
        <button className="text-white-100 w-full bg-blue-500 font-heading h-12 text-2xl rounded-lg font-bold">Continue</button>

        <p className="font-bold text-center">No account? <span className="text-blue-500 font-heading text-xl cursor-pointer" onClick={handleSwitch}> Sign Up</span></p>
        </form>
    </div>
</div>
  )
}

export default Login