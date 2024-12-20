import React, { useState } from 'react';
import { interpolateTemperature } from '../utils/temperatureCalculator';

const TemperatureWidget = () => {
  const [inputVoltage, setInputVoltage] = useState('');
  const [temperatures, setTemperatures] = useState({ kelvin: '', celsius: '', fahrenheit: '' });
  const [error, setError] = useState('');

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const kelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * 9/5 + 32;
  };

  const handleVoltageChange = (e) => {
    let value = e.target.value;
    
    // Remove any leading zeros after decimal point
    value = value.replace(/^0+(?=\d)/, '');
    
    // If there's a decimal point, enforce exactly 6 decimal places
    if (value.includes('.')) {
      const [whole, decimal] = value.split('.');
      if (decimal.length > 6) {
        value = `${whole}.${decimal.slice(0, 6)}`;
      }
    }
    
    setInputVoltage(value);

    if (!value) {
      setTemperatures({ kelvin: '', celsius: '', fahrenheit: '' });
      setError('');
      return;
    }

    const kelvin = interpolateTemperature(value);
    
    if (kelvin === null) {
      setError('Voltage out of range or invalid');
      setTemperatures({ kelvin: '', celsius: '', fahrenheit: '' });
      return;
    }

    const celsius = kelvinToCelsius(kelvin);
    const fahrenheit = kelvinToFahrenheit(kelvin);

    setTemperatures({
      kelvin: kelvin.toFixed(3),
      celsius: celsius.toFixed(3),
      fahrenheit: fahrenheit.toFixed(3)
    });
    setError('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        CryoTechnics SD-179 Temperature Calculator
      </h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter Voltage
        </label>
        <input
          type="number"
          value={inputVoltage}
          onChange={handleVoltageChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter voltage value..."
          step="0.000001"
          onBlur={(e) => {
            const value = parseFloat(e.target.value);
            if (!isNaN(value)) {
              setInputVoltage(value.toFixed(6));
            }
          }}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>

      <div className="space-y-3">
        <div className="p-3 bg-gray-50 rounded">
          <label className="block text-sm font-medium text-gray-700">Kelvin</label>
          <div className="text-lg font-semibold text-blue-600">
            {temperatures.kelvin ? `${temperatures.kelvin}K` : '-'}
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded">
          <label className="block text-sm font-medium text-gray-700">Celsius</label>
          <div className="text-lg font-semibold text-blue-600">
            {temperatures.celsius ? `${temperatures.celsius}°C` : '-'}
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded">
          <label className="block text-sm font-medium text-gray-700">Fahrenheit</label>
          <div className="text-lg font-semibold text-blue-600">
            {temperatures.fahrenheit ? `${temperatures.fahrenheit}°F` : '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureWidget;
