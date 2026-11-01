
import { useEffect, useState } from "react";

function CatalogoAutos() {

  const [listaAutos, setAutos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Pagina apirest, cantidad 12 autos
    fetch("https://www.local-wheels.com/api/public/cars?limit=12")
        .then(response => {
            if (!response.ok) {
            throw new Error("No se pudieron obtener los vehículos");
            }

            return response.json();
        })
        .then(data => {
            setAutos(data.items);//guardar en listaAutos
            setCargando(false);
        })
        .catch(error => {
            setError(error.message);
            setCargando(false);
        });

    }, []);

    if (cargando) {
        return <p className="text-center">Cargando ...</p>;
    }

    //no se cargo correctamente
    if (error) {
        return <p className="text-center text-danger">{error}</p>;
    }

    return (
        //mostrar los 12 avehiculos
        <section className="container py-5">

            <h2 className="text-center fw-bold mb-4">
                Nuestros vehículos
            </h2>

            <div className="row g-4">
                {/* usar la lista obtenida */}
                {listaAutos.map(auto => (
                    //Cargar cada un de los vehiculos
                    <div className="col-12 col-md-6 col-lg-4" key={auto.id}>
                        <div className="card h-100 shadow-sm">
                            <img src={auto.imageUrl} className="card-img-top" alt={auto.title} style={{ height: "220px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {auto.title}
                                </h5>
                                <p className="card-text">
                                    Año: {auto.productionYear}
                                </p>
                                <p className="card-text">
                                    Combustible: {auto.fuelType}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
  );
}

export default CatalogoAutos;
