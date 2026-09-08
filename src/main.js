import './style.css';
import { celsiusToFahrenheit, fahrenheitToCelsius, celsiusToKelvin, kelvinToCelsius } from './converter.js';

const form = document.querySelector('#converter-form');
const input = document.querySelector('#temperature');
const conversion = document.querySelector('#conversion');
const inputUnit = document.querySelector('#input-unit');
const result = document.querySelector('#result');
const resultDetail = document.querySelector('#result-detail');
const resultPanel = document.querySelector('#result-panel');

const conversions = {
  'celsius-fahrenheit': { convert: celsiusToFahrenheit, from: '°C', to: '°F' },
  'fahrenheit-celsius': { convert: fahrenheitToCelsius, from: '°F', to: '°C' },
  'celsius-kelvin': { convert: celsiusToKelvin, from: '°C', to: 'K' },
  'kelvin-celsius': { convert: kelvinToCelsius, from: 'K', to: '°C' },
};

function formatNumber(value) {
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value);
}

conversion.addEventListener('change', () => {
  inputUnit.textContent = conversions[conversion.value].from;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = Number(input.value);
  const selected = conversions[conversion.value];

  if (input.value.trim() === '' || !Number.isFinite(value)) {
    result.textContent = 'Valor inválido';
    resultDetail.textContent = 'Informe um número válido para converter.';
    resultPanel.classList.add('has-error');
    return;
  }

  const converted = selected.convert(value);
  result.textContent = `${formatNumber(converted)} ${selected.to}`;
  resultDetail.textContent = `${formatNumber(value)} ${selected.from} equivalem a ${formatNumber(converted)} ${selected.to}`;
  resultPanel.classList.remove('has-error');
});
