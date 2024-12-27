import React from 'react';
import { createRoot } from 'react-dom/client';
import TemperatureWidget from './components/TemperatureWidget';
import './styles/main.css';

const initWidget = (containerId, options = {}) => {
  const container = document.getElementById(containerId);
  if (container) {
    // Check for data attribute
    const isHorizontal = options.isHorizontal ?? container.dataset.horizontal === 'true';
    const root = createRoot(container);
    root.render(<TemperatureWidget isHorizontal={isHorizontal} />);
  }
};

// Auto-initialize if the default container exists
if (typeof window !== 'undefined') {
  window.initVoltageKelvinWidget = initWidget;
  
  document.addEventListener('DOMContentLoaded', () => {
    const defaultContainer = document.getElementById('voltage-kelvin-widget');
    if (defaultContainer) {
      initWidget('voltage-kelvin-widget');
    }
  });
}

export default initWidget;
