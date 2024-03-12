import { useState } from "react";
import Button from "../components/button/Button";
import GetStarted from "../components/getstarted/GetStarted";
import RecentStories from "../components/recentstories/RecentStories";
import Login from "./Login";
import SignUp from "./SignUp";
import {useGlobalContext} from "../hooks/useGlobalContext"


const Homepage = () => {
    const {showLogin, showSignUp} = useGlobalContext()
  return (
    <div style={{maxWidth: "1600px", margin: "auto"}}>
      <div className="home_bg text-black lg:p-24 p-12 relative  h-[616px] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col justify-center gap-6 h-full w-96 xl:w-[595px]">
          <h2 className="font-heading font-bold text-8xl md:text-left text-center">Stay Curious.</h2>
          <p className=" text-xl leading-9 md:text-left text-center">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <div className="md:self-start self-center">
          <Button />
          </div>
        </div>
      </div>
      <RecentStories />
      <GetStarted />
      {showSignUp && <SignUp /> }
      {showLogin && <Login />}
    </div>
  );
};

export default Homepage;
