# CryoTechnics SD-179 Temperature Calculator Widget

A simple, embeddable widget for converting voltage values to temperature readings for the CryoTechnics SD-179 silicon diode thermometer. Perfect for research labs, educational institutions, or anyone working with CryoTechnics SD-179 sensors.

## Features

- Precise voltage-to-temperature conversion for SD-179 sensors
- Temperature display in Kelvin (K), Celsius (°C), and Fahrenheit (°F)
- Responsive design that works on all devices
- Clean, minimal interface
- Flexible layout options (vertical or horizontal)
- Lightweight and fast-loading
- No dependencies or external APIs required

## Quick Start

Add this line to your page's `<head>` section:
```html
<script src="https://pub-81b2b10f65fb478788ff6fba10577bb0.r2.dev/voltage-kelvin-widget.min.js"></script>
```

Then, add this where you want the widget to appear:

For vertical layout (default):
```html
<div id="voltage-kelvin-widget"></div>
```

For horizontal layout:
```html
<div id="voltage-kelvin-widget" data-horizontal="true"></div>
```

That's it! The widget will automatically initialize and be ready to use.

## Usage Instructions

1. Enter a voltage value between 0.49011V and 1.875V
2. The widget will instantly display the corresponding temperature in:
   - Kelvin (K)
   - Celsius (°C)
   - Fahrenheit (°F)
3. If you enter a value outside the valid range, you'll see an error message

## Customization

### Layout Options
- **Vertical Layout**: Default layout with temperature values stacked vertically
- **Horizontal Layout**: Compact layout with temperature values arranged horizontally
  - Enable by adding `data-horizontal="true"` to the widget container

### Custom Container ID
You can use a custom container ID instead of the default one:

```html
<div id="my-custom-container"></div>
<script>
    window.initVoltageKelvinWidget('my-custom-container');
</script>
```

## Browser Support
The widget works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Need Help?
Visit our [documentation page](https://your-docs-url) for more examples and detailed information.

## License
MIT License - feel free to use in your projects!
