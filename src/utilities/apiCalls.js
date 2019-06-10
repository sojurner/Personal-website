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

export const fetchPhotos = async queries => {
  const url = `https://weatherlee-server.herokuapp.com/api/pixabay?`;
  const interpolateQueries = (url, queries) =>
    Object.keys(queries).reduce((queriedUrl, param, index) => {
      if (!index) {
        queriedUrl = `${queriedUrl}${param}=${queries[param]}`;
      } else {
        queriedUrl = `${queriedUrl}&${param}=${queries[param]}`;
      }
      return queriedUrl;
    }, url);
  console.log(interpolateQueries(url, queries));
  return scraper(await (await fetch(interpolateQueries(url, queries))).json());
};

const scraper = data => {
  let photos = data.hits.map(datum => {
    return {
      pageURL: datum.pageURL,
      style: {
        backgroundImage: `url('${datum.webformatURL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '300px'
      }
    };
  });
  return { totalHits: data.totalHits, photos };
};
