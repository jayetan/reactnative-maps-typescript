import * as React from 'react';
import { View, ScrollView } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

import styles from './styles';
import Header from '../../components/Header';
import LocationModal from '../../components/LocationModal';
import { AppContext } from '../../store/context';

interface IDelta {
  latitudeDelta: number;
  longitudeDelta: number;
}

const MyMap = () => {
  const { state } = React.useContext(AppContext);
  const { displayName, lon, lat } = state.selectedLocation;
  const latLongDelta: IDelta = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const initialRegion: Region = {
    latitude: lat,
    longitude: lon,
    ...latLongDelta,
  };
  const [region, setRegion] = React.useState(initialRegion);

  React.useEffect(() => {
    setRegion({
      latitude: lat,
      longitude: lon,
      ...latLongDelta,
    });
  }, [state.selectedLocation]);

  return (
    <>
      <Header title="Map" isSearchVisible />
      <View style={styles.container}>
        <LocationModal />
        <ScrollView
          contentContainerStyle={styles.scrollview}
        >
          <MapView
            style={styles.map}
            scrollEnabled
            zoomEnabled
            pitchEnabled
            rotateEnabled
            region={region}
            initialRegion={region}
          >
            <Marker
              title={displayName}
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
            />
          </MapView>
        </ScrollView>
      </View>
    </>
  );
};

export default MyMap;
