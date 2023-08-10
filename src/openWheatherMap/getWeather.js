import axios from "axios";

const apiKey = "3eed3397ab18194a5592644841ca6da2";

export const getWeather = async (postalCode) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${postalCode},jp&APPID=${apiKey}`;

  try {
    const weatherData = await axios.get(apiUrl);
    return weatherData.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
