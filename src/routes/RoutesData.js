import About from "../components/About/About";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Contact from "../components/Contact/Contact";

const RouteData = {
    login: {
        path: "/",
        component: Login,
        menuText:"Login",
        isPrivate: false
    },
    signup: {
        path: "/signup",
        component: Signup,
        menuText:"SignUp",
        isPrivate: false
    },
    about: {
        path: "/about",
        component: About,
        menuText:"About Us",
        isPrivate: false
    },
    contact: {
        path: "/contact",
        component: Contact,
        menuText:"Contact Us",
        isPrivate: false
    },
}

export default RouteData;