import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import "./App.css"
import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Welcomepage from "./pages/UserPages/Welcomepage";
import Storyfeedpage from "./pages/UserPages/Storyfeedpage";
import SingleStoryPage from "./pages/UserPages/SingleStoryPage";
import UserStories from "./pages/UserPages/UserStories";
import Createstory from "./pages/UserPages/Createstory";
import Editstory from "./pages/UserPages/Editstory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ServicePage from "./pages/service/ServicePage";
// import ContactUsPage from "./pages/contact/ContactUsPage";
// import AboutPage from "./pages/about/AboutPage";
// import ErrorPage from "./pages/404/ErrorPage";


const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
      <Route index path="/" element={<Homepage />} />
      {/* <Route path="/signup" element={<SignUp />}/> */}
      <Route path="/welcome" element= {<Welcomepage />} />
      <Route path="/stories" element={<Storyfeedpage />} />
      <Route path="/stories" element={<Storyfeedpage />} />
      <Route path="/stories/:storyId" element={<SingleStoryPage />} />
      <Route path="/mystories" element={<UserStories />} />
      <Route path="/story/create" element={<Createstory />} />
      <Route path="/story/edit/:blogId" element={<Editstory />} />
        {/* <Route index path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contactus" element={<ContactUsPage />} /> */}
      </Route>

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </>
  )
);

function App() {
 

  return <QueryClientProvider client={queryClient}><RouterProvider router={router} /></QueryClientProvider> ;
}

export default App;
