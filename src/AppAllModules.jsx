import { RouterProvider } from "react-router-dom";
//import  SecurityRouter from "./navigation/NaviRoutesSecurity";
//import  EducationRouter from "./navigation/NaviRoutesEducation";
import  CommerceRouter from "./navigation/NaviRoutesCommerce";
import Footer from "./share/footer/components/Footer";
import { createBrowserRouter } from "react-router-dom";
export default function AppAllModules() {
    return (
        <>
            <div id='div-app'>
                <RouterProvider router={CommerceRouter} />
                <div id='div-footer'>
                    <Footer />
                </div>
            </div>
        </> 
    );
}