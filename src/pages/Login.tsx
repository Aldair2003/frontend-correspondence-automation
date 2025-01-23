import React, { useState } from 'react';
import '../styles/Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="login_page">
      <div className="form_container">
        <div className="logo_container"></div>
        <p className="title">Inicio de sesión</p>
        <span className="subtitle">Automatización de Correspondencia</span>

        <div className="input_container">
          <label className="input_label" htmlFor="email">Email</label>
          <FaUser className="icon" />
          <input
            className="input_field"
            type="text"
            id="email"
            placeholder="Ingrese su correo electrónico"
          />
        </div>

        <div className="input_container">
          <label className="input_label" htmlFor="password">Contraseña</label>
          <FaLock className="icon" />
          <input
            className="input_field"
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
          />
        </div>

        <button className="sign-in_btn">Ingresar</button>

        <div className="extra_links">
          <span onClick={() => setShowModal(true)} className="forgot-password">
            ¿Olvidó su contraseña?
          </span>
          <Link to="/register" className="register-link">Registrarse</Link>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal_content">
              <p>Para recuperar su contraseña, diríjase a TICs.</p>
              <button onClick={() => setShowModal(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
