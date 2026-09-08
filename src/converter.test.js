import { describe, expect, it } from 'vitest';
import { celsiusToFahrenheit, fahrenheitToCelsius, celsiusToKelvin, kelvinToCelsius } from './converter.js';

describe('conversões de temperatura', () => {
  it('converte 0 °C para 32 °F', () => expect(celsiusToFahrenheit(0)).toBe(32));
  it('converte 100 °C para 212 °F', () => expect(celsiusToFahrenheit(100)).toBe(212));
  it('converte 32 °F para 0 °C', () => expect(fahrenheitToCelsius(32)).toBe(0));
  it('converte 212 °F para 100 °C', () => expect(fahrenheitToCelsius(212)).toBe(100));
  it('converte 0 °C para 273.15 K', () => expect(celsiusToKelvin(0)).toBe(273.15));
  it('converte 100 °C para 373.15 K', () => expect(celsiusToKelvin(100)).toBe(373.15));
  it('converte 273.15 K para 0 °C', () => expect(kelvinToCelsius(273.15)).toBe(0));
  it('converte 373.15 K para 100 °C', () => expect(kelvinToCelsius(373.15)).toBe(100));
});
