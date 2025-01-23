import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Verification.css';

const Verification: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState('');

  const email = location.state?.email || 'correo@example.com';

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === '123456') {
      alert('Código verificado correctamente');
      navigate('/home');
    } else {
      alert('Código incorrecto');
    }
  };

  return (
    <div className="auth_background">
      <div className="form_container">
        <div className="logo_container"></div>
        <p className="title">Verificación de Código</p>
        <span className="subtitle">Se ha enviado un código a {email}</span>

        <form onSubmit={handleVerification}>
          <div className="input_container">
            <label className="input_label" htmlFor="code">Código de verificación</label>
            <input
              className="input_field"
              type="text"
              id="code"
              placeholder="Ingrese el código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="sign-in_btn">Verificar</button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
