import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Verification.css';

const Verification: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState('');
  const [notification, setNotification] = useState('');
  const [isError, setIsError] = useState(false);

  const email = location.state?.email || 'correo@example.com';

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6 || !/^\d+$/.test(code)) {
      setNotification('El código debe ser de 6 dígitos numéricos.');
      setIsError(true);
      return;
    }
    if (code === '123456') {
      setNotification('¡Código verificado correctamente!');
      setIsError(false);
      setTimeout(() => navigate('/home'), 1500);
    } else {
      setNotification('Código incorrecto. Inténtelo de nuevo.');
      setIsError(true);
    }
  };

  const handleResendCode = () => {
    setNotification(`Se ha reenviado un nuevo código a ${email}`);
    setIsError(false);
  };

  return (
    <div className="verification_page">
      <div className="form_container">
        <div className="logo_container"></div>
        <p className="title">Verificación de Código</p>
        <span className="subtitle">
          Se ha enviado un código a <strong>{email}</strong>
        </span>

        <form onSubmit={handleVerification}>
          <div className="input_container">
            <label className="input_label" htmlFor="code">
              Código de verificación
            </label>
            <input
              className="input_field"
              type="text"
              id="code"
              placeholder="Ingrese el código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={6}
              required
            />
          </div>
          <button type="submit" className="sign-in_btn">
            Verificar
          </button>
        </form>

        <p className="resend_text">
          ¿No recibiste el código?{' '}
          <span className="resend_link" onClick={handleResendCode}>
            Reenviar
          </span>
        </p>

        {notification && (
          <div
            className={`notification ${isError ? 'error' : ''}`}
            style={{ display: 'block' }}
          >
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default Verification;
