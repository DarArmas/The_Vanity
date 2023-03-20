import React from "react";

import {
  LocationOnOutlined,
  AccessTimeOutlined,
  LocalPhoneOutlined,
} from "@mui/icons-material";

function Map() {
  const imagen = [
    {
      id: 1,

      fuente:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.115822934087!2d-103.55363504933595!3d25.501183483676023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869020acd011796f%3A0xce597406f979577f!2sUniversidad%20Tecnol%C3%B3gica%20de%20la%20Laguna%20Durango!5e0!3m2!1ses-419!2smx!4v1679331252422!5m2!1ses-419!2smx",

      title: "Google Maps",
    },
  ];

  return imagen.map((item) => {
    return (
      <div key={item.id} className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={item.fuente}
          title={item.title}
          style={{ Border: +"0", width: "100%", height: "400px" }}
        ></iframe>
      </div>
    );
  });
}

export const Location = () => {
  return (
    <div className="container" style={{ textAlign: "left" }}>
      <div className="row">
        <div className="col-md-8 ">
          <h2 style={{ color: "#473889" }}>Encuentranos</h2>

          <Map />
        </div>

        <div class="col-md-4">
          <div
            class="card text-white my-5 rounded-4"
            style={{
              maxWidth: "100%",
              color: "white",
              backgroundColor: "#776FC3",
            }}
          >
            <div class="card-header">
              <h4>Conoce nuestra sucursal</h4>
            </div>

            <div class="card-body">
              <div className="row">
                <div className="col-md-2">
                  <LocationOnOutlined />
                </div>

                <div className="col-md-10">
                  <p class="card-text" style={{ textAlign: "left" }}>
                    Direccion: Carretera Torreón Km 7.5, Ejido las cuevas, 35185
                    Cd Lerdo, Dgo.
                  </p>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">
                  <AccessTimeOutlined />
                </div>

                <div className="col-md-10">
                  <p class="card-text" style={{ textAlign: "left" }}>
                    Horario: Lunes a Sabado 7:00 - 19:00.
                  </p>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">
                  <LocalPhoneOutlined />
                </div>

                <div className="col-md-10">
                  <p class="card-text" style={{ textAlign: "left" }}>
                    Telefono: <br />
                    871 228 0212
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
