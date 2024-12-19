import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import voltageData from '../../volt_temp_lookup.json';

const TemperatureWidget = () => {
  const [selectedVoltage, setSelectedVoltage] = useState(null);
  const [temperatures, setTemperatures] = useState({ kelvin: '', celsius: '', fahrenheit: '' });
  const [error, setError] = useState('');

  // Format voltage data for react-select
  const voltageOptions = voltageData.map(item => ({
    value: item.Volts,
    label: `${item.Volts}V`,
    temperatures: {
      kelvin: item.Kelvin,
      celsius: item.Celsius,
      fahrenheit: item.Fahrenheit
    }
  }));

  const handleVoltageChange = (selectedOption) => {
    setSelectedVoltage(selectedOption);
    if (selectedOption) {
      setTemperatures(selectedOption.temperatures);
      setError('');
    } else {
      setTemperatures({ kelvin: '', celsius: '', fahrenheit: '' });
      setError('Please select a valid voltage value');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        CryoTechnics SD-179 Temperature Calculator
      </h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Voltage
        </label>
        <Select
          value={selectedVoltage}
          onChange={handleVoltageChange}
          options={voltageOptions}
          className="w-full"
          placeholder="Type or select a voltage..."
          isClearable
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
