import React from "react";
import listaServicios from "../componentes/Servicios";
import "./Servicios.css";

function Servicios (){

    return(
        <>
            <section className="container py-5">

                <div className="text-center mb-5">
                    <h1 className="fw-bold">
                        Nuestros Servicios
                    </h1>

                    <p className="text-muted">
                        En AutoSalta ofrecemos diferentes servicios para acompañarte en la compra de tu automóvil.
                    </p>
                </div>

                <div className="row g-4">
                    {/* obtener la lista de servcios del componente */}
                    {listaServicios.map(servicio => (
                        <div className="col-12 col-md-6 col-lg-4" key={servicio.id}>
                            <div className="card h-100 shadow-sm">
                                <img src={servicio.imagen}className="card-img-top imagen-servicio" alt={servicio.titulo}/>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">
                                        {servicio.titulo}
                                    </h5>

                                    <p className="card-text text-muted">
                                        {servicio.descripcion}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Servicios;