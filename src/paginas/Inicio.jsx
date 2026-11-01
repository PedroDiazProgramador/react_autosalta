import React from "react";
import { Link } from "react-router";
import bannerInicio from "../imagenes/baner-inicio.png";
import "./Inicio.css";
import CatalogoAutos from "../componentes/CatalogoAutos";


function Inicio (){

    return(
        <>
            {/* Banner principal */}
            <section
                className="banner-inicio d-flex align-items-center justify-content-center text-center"
                style={{
                    backgroundImage: `url(${bannerInicio})`
                }}
            >
                <div className="container text-white">
                    <h1 className="display-4 fw-bold">
                        Encontrá tu próximo auto
                    </h1>

                    <p className="lead">
                        Calidad, confianza y atención personalizada.
                    </p>
                </div>
            </section>

            {/* Primera parte */}
            <section className="container text-center py-5">
                <h2 className="fw-bold mb-3">
                Bienvenido a AutoSalta
                </h2>

                <p className="text-muted">
                Somos una concesionaria dedicada a ofrecer vehículos de calidad, brindando asesoramiento
                y atención personalizada para que encuentres  el automóvil que mejor se adapte a tus necesidades.
                </p>
            </section>

            {/* segunda parte - tarjetas */}
            <section className="container pb-5">
                <div className="row g-4">

                <div className="col-md-4">
                    <div className="card h-100 text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Variedad</h5>
                        <p className="card-text">
                        Encontrá diferentes modelos y marcas
                        de automóviles.
                        </p>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Confianza</h5>
                        <p className="card-text">
                        Te acompañamos para que puedas
                        elegir tu próximo vehículo.
                        </p>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">
                        Asesoramiento
                        </h5>
                        <p className="card-text">
                        Brindamos atención personalizada
                        durante todo el proceso.
                        </p>
                    </div>
                    </div>
                </div>

                </div>

                {/* Agergar el componente de catalogo */}
                <CatalogoAutos />
            </section>
        </>
    );
}

export default Inicio;