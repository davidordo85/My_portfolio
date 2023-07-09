const apiKey = process.env.API_KEY;

const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=La linea&aqi=no`;

export default {
  getWeatherData: async () => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      throw new Error(`HTTP Error: ${response}`);
    }
  },
};
