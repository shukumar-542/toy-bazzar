import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
    const location = useLocation()
    // console.log(location);

    useEffect(()=>{
        if(location.pathname === '/'){
            document.title = `ToyBazar |  Home`
        }else{
            document.title = `ToyBazar ${location.pathname.replace("/", " | ")}`
        }
    },[location])
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;