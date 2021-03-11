import logo from './logo.svg';
import './App.css';
import { Plugins } from '@capacitor/core';
import { useState } from 'react';

const { Device, Modals } = Plugins;
function MyApp() {
  const showDeviceInfo = async () => {
    const info = await Device.getInfo();
    await Modals.alert({
      title: 'Info',
      message: `UUID: ${info.uuid};
        Model: ${info.model}`
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Served version 2.0
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={showDeviceInfo}>Show Device Info</button>
      </header>
    </div>
  );
}

export default MyApp;
