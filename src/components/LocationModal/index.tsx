import * as React from 'react';
import {
  Modal,
  Portal,
  Provider,
  List,
  Card,
} from 'react-native-paper';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { AppContext } from '../../store/context';
import { LocationType, Types } from '../../store/reducers';

const LocationModal = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const [locations, setLocations] = React.useState(state.locations);
  const display = locations.length > 0 ? 'flex' : 'none';
  const visible = locations.length > 0;

  const setDefaultLocation = (newLocation: LocationType) => {
    const { displayName, lat, lon } = newLocation;
    dispatch({ type: Types.Select, payload: { displayName, lat, lon } });
    dispatch({ type: Types.Clear });
  };

  const items = locations.map((location) => {
    const { lat, lon, displayName } = location;

    return (
      <List.Item
        onPress={() => setDefaultLocation(location)}
        key={`${lat}-${lon}`}
        title={displayName}
        description={`Lat: ${lat} Lng: ${lon}`}
        left={() => <List.Icon icon="pin" />}
        right={() => <List.Icon icon="chevron-right" />}
        style={styles.item}
      />
    );
  });

  React.useEffect(() => {
    setLocations(state.locations);
  }, [state.locations]);

  return (
    <View style={{ ...styles.view, display }}>
      <Provider>
        <Portal>
          <Modal visible={visible}>
            <Card style={styles.card}>
              <ScrollView>
                <List.Section style={styles.section}>
                  {items}
                </List.Section>
              </ScrollView>
            </Card>
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
};

export default LocationModal;
