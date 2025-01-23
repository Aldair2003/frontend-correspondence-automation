import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home_container">
      <h1 className="home_title">Automatización de Correspondencia</h1>
      <p className="home_subtitle">
        Gestiona eficientemente la correspondencia con nuestro sistema avanzado.
      </p>

      <div className="home_buttons">
        <button className="btn_primary">Enviar Correspondencia</button>
        <button className="btn_secondary">Revisar Estado</button>
      </div>

      <div className="home_features">
        <div className="feature_card">
          <h3>Rapidez</h3>
          <p>Automatiza procesos y reduce tiempos de espera.</p>
        </div>
        <div className="feature_card">
          <h3>Seguridad</h3>
          <p>Protección de datos con encriptación avanzada.</p>
        </div>
        <div className="feature_card">
          <h3>Seguimiento</h3>
          <p>Monitorea en tiempo real el estado de tus envíos.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
