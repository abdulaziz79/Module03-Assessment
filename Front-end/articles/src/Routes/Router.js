import {createBrowserRouter} from "react-router-dom"
import Overview from "../pages/overview"
import SingleCard from "../pages/SingleCard/SingleCard"

const router =createBrowserRouter([
    {
        path:'/',
        element:<Overview />
    },
    {
        path:'/singlecard',
        element:<SingleCard />
    }
])  

export default router