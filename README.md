# Wine Map

A map of my wines built on top of [kepler.gl](https://kepler.gl) and [Mapbox](https://www.mapbox.com).

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