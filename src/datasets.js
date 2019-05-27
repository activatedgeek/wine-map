import fetch from 'isomorphic-fetch';
import window from 'global/window';
import { processCsvData } from 'kepler.gl/processors';

const baseUrl = process.env.BASE_URL || window.location.origin;

const datasets = {
  'taxi-nyc': {
    type: 'text/csv',
    url: `${baseUrl}/assets/data/nyc-trips.csv`,
    label: 'Taxi Trips in New York City',
  },
};


function processData(dataString, type) {
  if (type === 'text/csv') {
    return processCsvData(dataString);
  }
  return null;
}


export default function getDataset(id) {
  const meta = datasets[id];
  return fetch(meta.url,
    {
      headers: { 'content-type': meta.type },
    }).then(response => response.text()).then(dataString => ({
    datasets: {
      info: {
        id,
        label: meta.label,
      },
      data: processData(dataString, meta.type),
    },
    option: {
      centerMap: true,
      readOnly: false,
    },
    config: {
      mapStyle: { styleType: 'dark' },
    },
  }));
}
