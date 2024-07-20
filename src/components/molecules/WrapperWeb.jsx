import React, { useState } from 'react';
import "../../assets/style/ConexionIP.css";

function WrapperWeb() {
  const [networkName, setNetworkName] = useState('');
  const [hostName, setHostName] = useState('');
  const [port, setPort] = useState('');
  const [connectionType, setConnectionType] = useState('SSH');

  const handleNetworkNameChange = (event) => {
    setNetworkName(event.target.value);
  };

  const handleHostNameChange = (event) => {
    setHostName(event.target.value);
  };

  const handlePortChange = (event) => {
    setPort(event.target.value);
  };

  const handleConnectionTypeChange = (event) => {
    setConnectionType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Network Name:', networkName);
    console.log('Host Name:', hostName);
    console.log('Port:', port);
    console.log('Connection Type:', connectionType);
  };

  return (
    <div className='containerConex'>
    <form onSubmit={handleSubmit} className="connection-form">
      <h2>Conexion Mediante Web</h2>
      <div className="form-group">
        <label htmlFor="networkName">Nombre usuario:</label>
        <input
          type="text"
          className="form-control"
          id="networkName"
          value={networkName}
          onChange={handleNetworkNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="hostName">Contraseña usuario:</label>
        <input
          type="text"
          className="form-control"
          id="hostName"
          value={hostName}
          onChange={handleHostNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="connectionType">Tipo conexion:</label>
        <select
          className="form-control"
          id="connectionType"
          value={connectionType}
          onChange={handleConnectionTypeChange}
        >
          <option value="SSH">Alumno</option>
          <option value="Serial">Maestro pts</option>
          <option value="Other">Maestro</option>
          <option value="Telnet">Director</option>
          <option value="Telnet">Administrador</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Open
      </button>
      <button type="button" className="btn btn-secondary">
        Cancel
      </button>
    </form>
    </div>

  );
}




export default WrapperWeb;