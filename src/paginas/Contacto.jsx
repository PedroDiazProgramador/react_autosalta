import React from "react";


import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const formulario = useRef(null);
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState(""); //mensaje que se muestra al finalizar el envio

  const enviarCorreo = async (e) => {
    e.preventDefault();

    setEnviando(true); //esta enviando el correo
    setResultado("");

    try {
      //congiguracion de credenciales  
      await emailjs.sendForm( "service_kl1gpro","template_9wofvk", formulario.current,
        {
          publicKey: "lojkDIGcFoYRegeQ_"
        }
      );
      //cuando se envia correctamente
      setResultado("Mensaje enviado correctamente.");
      formulario.current.reset(); //reinicia el formulario, borra los datos

    } catch (error) {
      console.error(error);
      setResultado("Error al enviar el mensaje."); // lo que se mostrara cuando hay un problema y no se envia
    } finally {
      setEnviando(false);//termino de enviar el correo
    }
  };

  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Contactanos</h1>        
      </div>

      <div className="row g-4">

        {/* Datos de contacto */}
        <div className="col-12">
          <div className="card shadow-sm h-100">
            <div className="card-body p-4">
              <h4 className="mb-4">Datos de contacto</h4>
                <div>
                    <h6 className="mt-2">Direccion: </h6>
                    Calle Mar blanco 420 - Barrio San Remo - Salta Capital
                </div>
                
                <h6 className="mt-4">Telefono: </h6>
                3874853322
                <h6 className="mt-4">Horario de atencion: </h6>
                Lunes a Viernes: 09:00 a 18:00 Sábados: 09:00 a 13:00
            </div>
          </div>
        </div>
        {/* Fin Datos de contacto */}
        {/* ------------------------------------------ */}

        {/* Formulario */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body p-4">
              <h4 className="mb-4">Envianos un mensaje</h4>
              <form ref={formulario} onSubmit={enviarCorreo}>

                <div className="mb-3">
                  <label className="form-label">
                    Nombre completo
                  </label>
                  <input type="text" name="user_name" className="form-control" required maxLength={100}/>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Correo electrónico
                  </label>
                  <input type="email" name="user_email" className="form-control" required maxLength={150} />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Mensaje
                  </label>
                  <textarea name="message"  className="form-control" rows="5" required maxLength={3000} ></textarea>
                </div>

                {/* Cuando esta enviaando se deshabilita  */}
                <button type="submit" className="btn btn-primary" disabled={enviando} >
                    {/* cambia el texto para mostrar si esta enviando en ese momento */}
                  {enviando ? "Enviando..." : "Enviar mensaje"} 
                </button>

              </form>

            {/* Muestra un mensaje caundo se envia si fue correcto o no se envio */}
              {resultado && (
                <div className="alert alert-info mt-3" role="status">
                  {resultado}
                </div>
              )}

            </div>
          </div>
        </div>
        {/* Fin Formulario */}
        {/* ------------------------------------------ */}

        {/* Google maps */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body p-4">

                <h4 className="mb-4">Nuestra ubicación</h4>

                <iframe
                    title="Ubicación de AutoSalta"
                    src="https://www.google.com/maps?q=-24.830893,-65.421248&z=17&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                >
                    
                </iframe>
                <p className="text-muted mt-3">
                    Salta Capital, Argentina
                </p> 
            </div>
          </div>
        </div>
        {/* Fin Google maps */}
        {/* ---------------------------------------------------------- */}

      </div>
    </section>
  );
}

export default Contacto;
