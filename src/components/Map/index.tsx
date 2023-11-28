import { useEffect, useState } from 'react';
import ReactMapGL, {
  Marker,
  NavigationControl,
  Popup, ViewState, ViewStateChangeEvent,
} from 'react-map-gl';

import marker from '@assets/images/marker.svg';
import { CURRENCY_NAMES, BANKS_DATA } from '@constants/index';
import { IBank } from '@customTypes/index';
import { generateRandomBanks } from '@utils/index';
import {
  Icon, MapSection, MarkerBtn, NotFoundMessage,
  PopUpTitle, PopUpWrapper,
} from './styled';

export interface IMap{
  value: string;
}
export const initialCoordinatesMap = {
  latitude: 53.9022,
  longitude: 27.5619,
  zoom: 11,
  pitch: 0,
  bearing: 0,
  padding: {
    top: 0, bottom: 0, left: 0, right: 0,
  },
};

export function MapComponent({ value }: IMap) {
  const [listOfMarkers, setListOfMarkers] = useState<IBank[]>([]);
  const [viewState, setViewState] = useState<ViewState>(initialCoordinatesMap);
  const [notFound, setNotFound] = useState(false);
  const [selected, setSelected] = useState<IBank|null>(null);

  const handleZoom = (event: ViewStateChangeEvent) => {
    setViewState(event.viewState);
  };

  const handleClick = (bank: IBank) => {
    setSelected(bank);
  };

  const handleClose = () => {
    setSelected(null);
  };

  useEffect(() => {
    const banks = CURRENCY_NAMES.includes(value) ?
      generateRandomBanks(BANKS_DATA.banks) : BANKS_DATA.banks;
    setListOfMarkers(banks);
  }, [value]);
  useEffect(() => {
    if (!CURRENCY_NAMES.includes(value) && value !== '') {
      setNotFound(true);
      const id = setTimeout(() => setNotFound(false), 1000);

      return () => clearTimeout(id);
    }

    return undefined;
  }, [value]);

  return (
    <MapSection>
      <ReactMapGL
        onMove={handleZoom}
        {...viewState}
        initialViewState={viewState}
        mapboxAccessToken={process.env.MAP_TOKEN ?? ''}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {listOfMarkers.length > 0 && listOfMarkers.map((bank) => (
          <Marker key={bank.id} latitude={bank.latitude} longitude={bank.longitude}>
            <MarkerBtn onClick={() => handleClick(bank)}>
              <Icon src={marker} alt="marker for bank" />
            </MarkerBtn>
          </Marker>
        ))}
        {selected && (
          <Popup
            latitude={selected.latitude}
            longitude={selected.longitude}
            onClose={handleClose}
            closeOnClick={false}
          >
            <PopUpWrapper>
              <PopUpTitle>
                {selected.name}
              </PopUpTitle>
            </PopUpWrapper>
          </Popup>
        )}
        <NavigationControl />
      </ReactMapGL>
      {notFound && (
      <NotFoundMessage>
        Nothing was found
      </NotFoundMessage>
      )}
    </MapSection>
  );
}
