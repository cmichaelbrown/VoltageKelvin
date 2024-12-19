import React from 'react';
import { createRoot } from 'react-dom/client';
import TemperatureWidget from './components/TemperatureWidget';
import './styles/main.css';

// Function to initialize the widget
window.initVoltageKelvinWidget = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<TemperatureWidget />);
  }
};

// Auto-initialize if the default container exists
document.addEventListener('DOMContentLoaded', () => {
  const defaultContainer = document.getElementById('voltage-kelvin-widget');
  if (defaultContainer) {
    window.initVoltageKelvinWidget('voltage-kelvin-widget');
  }
});
