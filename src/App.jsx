import  {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import LoginPage from "./pages/User/LoginPage.jsx";
// import RegistrationPage from "./pages/User/RegistrationPage.jsx";
// import SendOTPPage from "./pages/User/SendOTPPage.jsx";
// import VerifyOTPPage from "./pages/User/VerifyOTPPage.jsx";
// import CreatePasswordPage from "./pages/User/CreatePasswordPage.jsx";
// import Page404 from "./pages/NotFound/Page404.jsx";
// import {getToken} from "./helper/SessionHelper.js";
// import HomePage from "./pages/Home/Home.jsx";
import Demo from './pages/Demo'
import HomeOne from './pages/HomeOne'
import HomeTwo from './pages/HomeTwo'
import Service from './pages/Service'
import ServiceDetails from "./pages/ServiceDetails";
import BlogGridRightSidebar from './pages/BlogGridRightSidebar';
import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar';
import BlogGridWithoutSidebar from './pages/BlogGridWithoutSidebar';
import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
import BlogListRightSidebar from './pages/BlogListRightSidebar';
import BlogDetailsPage from "./pages/BlogDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";
import {getToken} from "./helpers/SessionHelper.js"


const App = () => {
    if(getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        
                    </Routes>
                </BrowserRouter>
            </Fragment>
        );
    }

else
    {
        return (
            <Fragment>
                <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Demo/>}/>
                        <Route path="/home-one" element={<HomeOne/>}/>
                        <Route path="/home-two" element={<HomeTwo/>}/>
                        <Route path="/services" element={<Service/>}/>
                        <Route path="/service/:serviceID" element={<ServiceDetails/>}/>
                        <Route path="/blog-grid-right-sidebar" element={<BlogGridRightSidebar/>}/>
                        <Route path="/blog-grid-left-sidebar" element={<BlogGridLeftSidebar/>}/>
                        <Route path="/blog-grid-without-sidebar" element={<BlogGridWithoutSidebar/>}/>
                        <Route path="/blog-list-left-sidebar" element={<BlogListLeftSidebar/>}/>
                        <Route path="/blog-list-right-sidebar" element={<BlogListRightSidebar/>}/>
                        <Route path="/blog/:blogID" element={<BlogDetailsPage/>}/>
                        <Route path="/team" element={<Team/>}/>
                        <Route path="/team-member/:teamID" element={<TeamDetails/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </ScrollToTop>
                </BrowserRouter>
            </Fragment>
        );
    }
};

export default App;