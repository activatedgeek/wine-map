import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ReactReduxContext, connect } from 'react-redux';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import KeplerGl from 'kepler.gl';

import { addDataToMap } from 'kepler.gl/actions';

import getDataset from './datasets';

class App extends PureComponent {
  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      const { dispatch } = this.props;
      getDataset('taxi-nyc').then((config) => {
        dispatch(addDataToMap(config));
      });
    }
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          minHeight: '70vh',
        }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <ReactReduxContext.Consumer>
              {({ store }) => (
                <KeplerGl
                  mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
                  id="map"
                  width={width}
                  height={height}
                  store={store}
                />
              )}
            </ReactReduxContext.Consumer>
          )}
        </AutoSizer>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(App);
