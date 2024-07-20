import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import Directorio from "../atoms/Directorio";
import ImageHeader from "../atoms/ImageHeader";
import "../../assets/style/estiloHeder.css";
import"../../assets/style/estiloNav.css";

function WrapperHeder() {
         const [visibleTop, setVisibleTop] = useState(false);
    return (
        <>
 
        <div className="card flex justify-content-center">
            <Sidebar className='h-30rem' visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <div className="navbar-nav ml-auto">
                            <Directorio
                            type="nav-item nav-link active"
                            msg="Home"
                            direc="/inicioMain"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="contac"
                            direc="/FormRegistro"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="Ofertas"
                            direc="/Ofertas"
                            />  
                            <Directorio
                            type="nav-item nav-link"
                            msg="Router"
                            direc="/Rutas"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="Busqueda Ubicacion"
                            direc="/Busqueda"
                            />     
                            <Directorio
                            type="nav-item nav-link"
                            msg="Profile"
                            direc="/Profile"
                            />      
                            <Directorio
                            type="nav-item nav-link"
                            msg="Admin Profile"
                            direc="/ProfileAdim"
                            />   
                                            
                        </div>
            </Sidebar>
        </div>
        <div id="nav">
                <div className="">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                    <button type="button" onClick={() => setVisibleTop(true)} className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Directorio
                            type="nav-item nav-link active"
                            msg="Home"
                            direc="/inicioMain"
                            />                                       
                        </div>
                    </div>
                </nav>
            </div>
        </div>
      
        </>
        
    )
}
export default WrapperHeder;