import React from "react";
import mapboxgl from 'mapbox-gl';
import { centroid, bbox } from '@turf/turf'
import coords from '@mapbox/geojson-coords'
import axios from 'axios'
class Map extends React.Component {
  constructor(props) {
    super(props);
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2V0YXBhazIwMTkiLCJhIjoiY2szdzJhdGx3MDVpaDNpcGltZ3luNDUyMSJ9.lwsV4FsgU1SfbS6QRFlO_A';
    this.state = {
      lng: 113.69315, // Initial state for mapbox
      lat: -7.87643, // Initial state for mapbox
      zoom: 10, // Initial state for mapbox
    };
  }

  componentDidMount() {
    let { mountainId, trackId } = this.props.match.params
    this.setState({ mountainId, trackId })

    const trackRequest = axios.get(process.env.PUBLIC_URL + `/map-data/${mountainId}/${trackId}/track.json`)
    const pointsRequest = axios.get(process.env.PUBLIC_URL + `/map-data/${mountainId}/${trackId}/points.json`)
    axios.all([trackRequest, pointsRequest]).then(axios.spread((...responses) => {
      const trackGeoJson = responses[0].data
      const pointsGeoJson = responses[1].data

      const centerPoint = coords(centroid(trackGeoJson))[0];

      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPoint,
        zoom: this.state.zoom
      });
      this._insertMapLayers(map, trackGeoJson, pointsGeoJson)
      this._centerMapOnTrack(map, trackGeoJson)
    })).catch(errors => {
      console.error(errors)
    })


  }
  
  _insertMapLayers(map, trackGeoJson, pointsGeoJson) {
    map.on('load', function () {
      map.addSource('route', {
        'type': 'geojson',
        'data': trackGeoJson
      });
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'square'
        },
        'paint': {
          'line-color': '#e25c64',
          'line-width': 8
        }
      });
      map.addSource('points', {
        'type': 'geojson',
        'data': pointsGeoJson
      });
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          // get the icon name from the source's "icon" property
          // concatenate the name to get an icon from the style's sprite sheet
          'icon-image': ['concat', ['get', 'icon'], '-15'],
          // get the title name from the source's "title" property
          'text-field': ['get', 'title'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      });
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(new mapboxgl.ScaleControl({
        maxWidth: 240,
        unit: 'metric'
      }));
    });
  }

  _centerMapOnTrack(map, trackGeoJson) {
    const b = bbox(trackGeoJson);
    const boundingBox = [[b[0], b[1]], [b[2], b[3]]]
    map.fitBounds(boundingBox, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 }
    });
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    )
  }
}

export default Map;
