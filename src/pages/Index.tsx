import React, { useState } from 'react';

interface WeatherData {
  location: string;
  humidity: string;
  pressure: string;
  windSpeed: string;
}

const WeatherDisplay = ({ data }: { data: WeatherData }) => (
  <div className="weather-result">
    <h2>Clima para {data.location}</h2>
    <p>💧 Umidade Relativa: {data.humidity} %</p>
    <p>📈 Pressão Atmosférica: {data.pressure} hPa</p>
    <p>💨 Velocidade do Vento: {data.windSpeed} km/h</p>
  </div>
);

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: WeatherData = {
      location: formData.get('location') as string,
      humidity: formData.get('humidity') as string,
      pressure: formData.get('pressure') as string,
      windSpeed: formData.get('windSpeed') as string,
    };

    setWeatherData(data);
  };

  return (
    <div className="weather-page">
      <div className="weather-container">
        <div className="weather-card">
          <h1 className="weather-title">Previsor de Tempo</h1>

          <form className="weather-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="humidity">Umidade Relativa (%):</label>
              <input
                type="number"
                id="humidity"
                name="humidity"
                className="form-input"
                min="0"
                max="100"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pressure">Pressão Atmosférica (hPa):</label>
              <input
                type="number"
                id="pressure"
                name="pressure"
                className="form-input"
                min="800"
                max="1100"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="windSpeed">Velocidade do Vento (km/h):</label>
              <input
                type="number"
                id="windSpeed"
                name="windSpeed"
                className="form-input"
                min="0"
                required
              />
            </div>

            <button type="submit" className="prediction-button">
              Prever
            </button>
          </form>
        </div>
      </div>

      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default Index;
