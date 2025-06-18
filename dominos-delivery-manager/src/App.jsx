
import React, { useState } from 'react';
import './App.css';

const driversToday = [
  { id: 1, name: "John Doe", phone: "+1234567890", online: true },
  { id: 2, name: "Alice Smith", phone: "+1987654321", online: false },
];

function App() {
  const [drivers, setDrivers] = useState(driversToday);

  const notifyDriver = (driver, type) => {
    alert(`${type === 'sms' ? 'Text' : 'Call'} sent to ${driver.name} at ${driver.phone}`);
  };

  const toggleOnlineStatus = (id) => {
    setDrivers(prev =>
      prev.map(d =>
        d.id === id ? { ...d, online: !d.online } : d
      )
    );
  };

  const removeDriver = (id) => {
    setDrivers(prev => prev.filter(d => d.id !== id));
  };

  return (
    <div className="App">
      <h1>Domino's Driver Manager</h1>
      {drivers.map(driver => (
        <div key={driver.id} className="card">
          <div>
            <p><strong>{driver.name}</strong></p>
            <p>{driver.phone}</p>
            <p className={driver.online ? 'green' : 'red'}>
              {driver.online ? 'Online' : 'Offline'}
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => notifyDriver(driver, 'sms')}>Text</button>
            <button onClick={() => notifyDriver(driver, 'call')}>Call</button>
            <button onClick={() => toggleOnlineStatus(driver.id)}>
              {driver.online ? 'Sign Out' : 'Sign In'}
            </button>
            <button onClick={() => removeDriver(driver.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
