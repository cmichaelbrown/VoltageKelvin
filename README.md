# CryoTechnics SD-179 Temperature Calculator Widget

An embeddable widget for converting voltage values to temperature readings for the CryoTechnics SD-179 silicon diode thermometer.

## Features

- Clean, minimal, and responsive design
- Autocomplete voltage selection
- Temperature display in Kelvin, Celsius, and Fahrenheit
- No interpolation - exact voltage matches only
- Easy embedding via script tag

## Installation

1. Include the widget script in your HTML:
```html
<script src="https://your-cdn-url/voltage-kelvin-widget.min.js"></script>
```

2. Add a container div where you want the widget to appear:
```html
<div id="voltage-kelvin-widget"></div>
```

The widget will automatically initialize if it finds the default container ID "voltage-kelvin-widget".

## Custom Integration

You can also manually initialize the widget with a custom container ID:

```html
<div id="custom-container"></div>
<script>
    window.initVoltageKelvinWidget('custom-container');
</script>
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## License

MIT License
