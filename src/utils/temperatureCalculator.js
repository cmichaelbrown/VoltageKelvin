// Voltage and Temperature Data
export const voltageData = [
    0.490110, 0.500440, 0.511370, 0.523020, 0.535550, 0.549200, 0.564350, 
    0.579740, 0.593330, 0.604610, 0.615870, 0.627100, 0.629350, 0.631590, 
    0.633840, 0.636090, 0.638340, 0.660740, 0.682980, 0.705210, 0.727230, 
    0.749040, 0.770660, 0.792080, 0.813400, 0.834420, 0.855200, 0.875670, 
    0.895790, 0.915700, 0.935110, 0.954120, 0.972650, 0.981710, 0.990650, 
    0.999450, 1.00815, 1.01673, 1.02526, 1.02696, 1.02865, 1.03035, 1.03204, 
    1.03372, 1.03541, 1.03709, 1.03877, 1.04045, 1.04212, 1.04382, 1.04551, 
    1.04719, 1.04887, 1.05054, 1.05219, 1.05385, 1.05549, 1.05712, 1.05875, 
    1.06040, 1.06204, 1.06367, 1.06527, 1.06687, 1.06845, 1.07002, 1.07158, 
    1.07312, 1.07466, 1.07611, 1.07757, 1.07904, 1.08050, 1.08198, 1.08345, 
    1.08493, 1.08641, 1.08790, 1.08939, 1.09068, 1.09202, 1.09339, 1.09480, 
    1.09626, 1.09777, 1.09935, 1.10098, 1.10270, 1.10449, 1.10628, 1.10827, 
    1.11056, 1.11356, 1.11712, 1.12446, 1.13284, 1.15551, 1.17663, 1.19647, 
    1.21465, 1.23311, 1.25257, 1.27437, 1.29781, 1.32420, 1.35289, 1.38467, 
    1.42234, 1.46442, 1.51296, 1.57022, 1.62664, 1.69017, 1.75035, 1.80204, 
    1.84550, 1.87500
];

export const temperatureData = [
    330.000, 325.000, 320.000, 315.000, 310.000, 305.000, 300.000, 
    295.000, 290.000, 285.000, 280.000, 275.000, 274.000, 273.000, 
    272.000, 271.000, 270.000, 260.000, 250.000, 240.000, 230.000, 
    220.000, 210.000, 200.000, 190.000, 180.000, 170.000, 160.000, 
    150.000, 140.000, 130.000, 120.000, 110.000, 105.000, 100.000, 
    95.000, 90.000, 85.000, 80.000, 79.000, 78.000, 77.000, 76.000, 
    75.000, 74.000, 73.000, 72.000, 71.000, 70.000, 69.000, 68.000, 
    67.000, 66.000, 65.000, 64.000, 63.000, 62.000, 61.000, 60.000, 
    59.000, 58.000, 57.000, 56.000, 55.000, 54.000, 53.000, 52.000, 
    51.000, 50.000, 49.000, 48.000, 47.000, 46.000, 45.000, 44.000, 
    43.000, 42.000, 41.000, 40.000, 39.000, 38.000, 37.000, 36.000, 
    35.000, 34.000, 33.000, 32.000, 31.000, 30.000, 29.000, 28.000, 
    27.000, 26.000, 25.000, 24.000, 23.000, 22.000, 21.000, 20.000, 
    19.000, 18.000, 17.000, 16.000, 15.000, 14.000, 13.000, 12.000, 
    11.000, 10.000, 9.000, 8.000, 7.000, 6.000, 5.000, 4.000, 3.000, 
    2.000
];

// Interpolation Function
export function interpolateTemperature(voltageInput) {
    // Convert input to number and validate
    const voltage = parseFloat(voltageInput);
    
    // Input validation
    if (isNaN(voltage)) {
        return null;
    }

    // Check voltage range
    const minVoltage = voltageData[0];
    const maxVoltage = voltageData[voltageData.length - 1];
    if (voltage < minVoltage || voltage > maxVoltage) {
        return null;
    }

    // Special case for maximum voltage
    if (voltage === maxVoltage) {
        return temperatureData[temperatureData.length - 1];
    }

    // Find the index of the first voltage greater than our input
    let index = voltageData.findIndex(v => v > voltage);
    
    // Handle edge cases
    if (index <= 0) {
        index = 1; // Use first three points
    } else if (index >= voltageData.length - 1) {
        index = voltageData.length - 2; // Use last three points
    }

    // Get three points for parabolic interpolation
    const v1 = voltageData[index - 1];
    const v2 = voltageData[index];
    const v3 = voltageData[index + 1];
    const t1 = temperatureData[index - 1];
    const t2 = temperatureData[index];
    const t3 = temperatureData[index + 1];

    try {
        // Calculate interpolation parameters
        const d3 = (v3 - v1) / (v2 - v1);
        const a2 = t2 - t1;
        const a3 = ((t3 - t1) / d3 - a2) / (d3 - 1);
        const d = (voltage - v1) / (v2 - v1);

        // Calculate interpolated temperature
        const temperature = d * (a3 * (d - 1) + a2) + t1;
        
        // Round to 3 decimal places
        return Math.round(temperature * 1000) / 1000;
    } catch (error) {
        return null;
    }
}
