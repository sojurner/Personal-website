import * as moment from 'moment';

export const getWeather = async (lat, lng) => {
  const url =
    `https://event-mapper-weather.herokuapp.com/api/v1/weather?lat=${lat}` +
    `&lng=${lng}` +
    `&date=${moment().format()}`;
  const response = await fetch(url);
  const result = await response.json();
  result.high = Math.round(result.high);
  result.low = Math.round(result.low);
  return result;
};

export const getGifs = async query => {
  const url = `https://weatherlee-server.herokuapp.com/api/giphy?q=${query}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
};

export const fetchPhotos = async (query, category) => {
  const url = `https://weatherlee-server.herokuapp.com/api/pixabay?q=${query}&category=${category}`;
  return scraper(await (await fetch(url)).json());
};

const scraper = data => {
  return data.hits.map(datum => {
    return {
      style: {
        backgroundImage: `url('${datum.webformatURL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: `400px`,
        height: '300px'
      }
    };
  });
};
