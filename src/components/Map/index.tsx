import mapboxgl, { Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';

import { MapSection } from './styled.ts';

export interface IMap{
  value: string;
}
export const initialCoordinatesMap = {
  latitude: 53.9022,
  longitude: 27.5619,
  zoom: 11,
};
const token = 'pk.eyJ1IjoidmlubnlwdWgiLCJhIjoiY2xveTFrM2x5MWs3cDJsczFjeWFocG53eCJ9.AfWV7gUo7NQa17w1ohSijA';
mapboxgl.accessToken = token;
export function MapComponent({ value }: IMap) {
  console.log(value);
  const mapContainer = useRef<HTMLElement | null>(null);
  const map = useRef<Map | null>();
  const [lng, setLng] = useState(initialCoordinatesMap.longitude);
  const [lat, setLat] = useState(initialCoordinatesMap.latitude);
  const [zoom, setZoom] = useState(initialCoordinatesMap.zoom);
  useEffect(() => {
    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom,
      });

      map.current.on('move', () => {
        if (map.current) {
          setLng(parseFloat(map.current.getCenter().lng.toFixed(4)));
          setLat(parseFloat(map.current.getCenter().lat.toFixed(4)));
          setZoom(parseFloat(map.current.getZoom().toFixed(2)));
        }
      });
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MapSection ref={mapContainer} />
  );
}
