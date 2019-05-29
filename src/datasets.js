import fetch from 'isomorphic-fetch';
import window from 'global/window';
import { processCsvData } from 'kepler.gl/processors';

const baseUrl = process.env.BASE_URL || window.location.origin;

const datasets = {
  vivino: {
    type: 'text/csv',
    data_url: `${baseUrl}/assets/data/wines/data.csv`,
    label: 'Sanyam Kapoor\'s Wines',
    config_url: `${baseUrl}/assets/data/wines/keplergl.json`,
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

  const urlPromises = [
    fetch(meta.data_url, { headers: { 'content-type': meta.type } }),
    fetch(meta.config_url, { headers: { 'content-type': 'application/json' } }),
  ];

  return Promise.all(urlPromises).then(responses => (
    Promise.all(responses.map(res => res.text()))
  )).then((texts) => {
    const [dataString, configString] = texts; // eslint-disable-line no-unused-vars
    const config = window.JSON.parse(configString);

    return {
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
      ...config,
    };
  });
}
