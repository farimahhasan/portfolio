import About from "./components/About"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

const routes = [
    
    {
        path: '/about', element: <About/>
    },
    {
        path: '/portfolio' , element: <Portfolio/>
    },
    {
        path: '/contact', element: <Contact/>
    },
    // {
    //     path: "*" , element: <NotFound />
    // }
]
export default routes