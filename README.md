# Wine Map

[![Build Status](https://travis-ci.com/activatedgeek/wine-map.svg?branch=master)](https://travis-ci.com/activatedgeek/wine-map)

A map of my wines built on top of [kepler.gl](https://kepler.gl) and [Mapbox](https://www.mapbox.com).
This is deployed at [wine.sanyamkapoor.com](https://wine.sanyamkapoor.com)

[![](https://i.imgur.com/yATcmrp.png)](https://wine.sanyamkapoor.com)

## Install

```
> yarn
```

## Environment Variables

These are the list of environment variables currently needed

* `MAPBOX_ACCESS_TOKEN`: required to load any data at all
* `NODE_ENV`: defaults to 'development'
* `BASE_URL`: defaults to `null`

## Development

```
> npm run dev
```

This creates a Webpack development server with hot reloading.

## Production

```
> npm run build
```

This creates an optimized Javascript bundle.

# License

Apache 2.0