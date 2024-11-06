import { RouterProvider } from 'react-router-dom';
//import SecurityRouter from "./navigation/NaviRoutesSecurity"; // Importar el módulo de seguridad
// import EducationRouter from "./navigation/NaviRoutesEducation"; // Importar el módulo de educación
 import CommerceRouter from "./navigation/NaviRoutesCommerce"; // Importar el módulo de comercio
import Footer from './share/footer/components/Footer'; // Asegúrate de que la ruta sea correcta

function AppAllModules() {
    //FIC: En este ejemplo solo estamos habilitando 
    //el modulo de Seguridad para su ejecución.
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

export default AppAllModules;
