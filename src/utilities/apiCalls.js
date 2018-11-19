import * as moment from 'moment';

export const getWeather = async (lat, lng) => {
  const url =
    `https://event-mapper-weather.herokuapp.com/api/v1/weather?lat=${lat}` +
    `&lng=${lng}` +
    `&date=${moment().format()}`;
  const response = await fetch(url);
  const result = await response.json();
  result['high'] = Math.round(result['high']);
  result['low'] = Math.round(result['low']);
  return result;
};

export const getGifs = async query => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${
    process.env.REACT_APP_GIPHY_API_KEY
  }&limit=200`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
