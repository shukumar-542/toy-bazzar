import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
    const location = useLocation()
    console.log(location.state);

    useEffect(()=>{
        if(location.pathname === '/'){
            document.title = `ToyBazar |  Home`
        }
        else if(location.state === 'ToyDetails'){
            document.title = `ToyBazar | ${location.state}`
        }
        else{
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