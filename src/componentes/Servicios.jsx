
import imgVenta from "../imagenes/venta-autos.jpg";
import imgAlquiler from "../imagenes/alquiler.jpg";
import imgUsado from "../imagenes/recibir-usado.jpg";
import imgServicioTecnico from "../imagenes/servicio-tecnico.jpg";

const listaServicios = [
  {
    id: 1,
    titulo: "Venta de vehículos nuevos y usados",
    descripcion: "Ofrecemos una amplia variedad de automóviles para que encuentres el que mejor para vos.",
    imagen: imgVenta
  },
  {
    id: 2,
    titulo: "Alquiler",
    descripcion: "Podes alquilar un vehiculo por dia, semana.",
    imagen: imgAlquiler
  },
  {
    id: 3,
    titulo: "Recimimos tu usado",
    descripcion: "Podes entregar tu usado como parte de pago para que puedas renovar tu vehiculo.",
    imagen: imgUsado
  },
  {
    id: 4,
    titulo: "Servicio técnico",
    descripcion: "Brindamos servicios de revisión y mantenimiento para que tu vehículo este siempre en buenas condiciones.",
    imagen: imgServicioTecnico
  },  
];

export default listaServicios;
