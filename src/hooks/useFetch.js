import { useState } from 'react';
import axios from 'axios';

const useFetch = (apiKey) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    axios.get(apiURL)
      .then((res) => {
        console.log('response', res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log('err', err);
        setError(err);
      });
  };

  return { data, error, getWeatherDetails };
};

export default useFetch;
