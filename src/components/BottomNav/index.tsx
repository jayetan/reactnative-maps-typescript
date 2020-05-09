import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import MyMap from '../../screens/Map';
import { ListItem } from '../../screens/List';

const BottomNav = () => {
  const defaultState = {
    index: 0,
    routes: [
      { key: 'map', title: 'Map', icon: 'map' },
      { key: 'list', title: 'List', icon: 'format-list-bulleted' },
    ],
  };

  const [state, setState] = React.useState(defaultState);

  const renderScene = BottomNavigation.SceneMap({
    map: MyMap,
    list: ListItem,
  });

  const handleIndexChange = (index: number) => setState({ ...state, index });

  return (
    <BottomNavigation
      navigationState={state}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
