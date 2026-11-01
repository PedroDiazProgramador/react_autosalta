import React from "react";
import { NavLink } from "react-router";


function Encabezado (){

    return(
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">

                    <NavLink className="navbar-brand fw-bold" to="/">
                        AutoSalta
                    </NavLink>

                    <div className="d-flex gap-3 ms-auto">
                        <NavLink className="nav-link text-white" to="/">
                            Inicio
                        </NavLink>

                        <NavLink className="nav-link text-white" to="/servicios">
                            Servicios
                        </NavLink>

                        <NavLink className="nav-link text-white" to="/contacto">
                            Contacto
                        </NavLink>
                    </div>

                </div>
            </nav>
        </>

    );
}

export default Encabezado;