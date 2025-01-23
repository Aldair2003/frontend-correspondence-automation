import React, { useState } from 'react';
import '../styles/Register.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Usuario registrado: ${formData.name}`);
    navigate('/verification', { state: { email: formData.email } });
  };

  return (
    <div className="register_page">
      <div className="form_container">
        <div className="logo_container"></div>
        <p className="title">Registro</p>
        <span className="subtitle">Automatización de Correspondencia</span>

        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <label className="input_label" htmlFor="name">Nombre</label>
            <FaUser className="icon" />
            <input
              className="input_field"
              type="text"
              id="name"
              placeholder="Ingrese su nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_container">
            <label className="input_label" htmlFor="email">Correo electrónico</label>
            <FaEnvelope className="icon" />
            <input
              className="input_field"
              type="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
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
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="sign-in_btn">Registrarse</button>

          <div className="back_to_login">
          <a href="/">¿Ya tienes cuenta? Inicia sesión</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
