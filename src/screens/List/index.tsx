import React from 'react';
import { List, Card } from 'react-native-paper';
import { View, ScrollView } from 'react-native';

import Header from '../../components/Header';
import styles from './styles';

export const ListItem = () => {
  const items = Array(20).fill(100).map((_, i) => (
    <List.Item
      key={`item-${i + 1}`}
      title={`Sample ${i + 1}`}
      description={`Description ${1 + i}`}
      left={() => <Card.Cover source={{ uri: `https://picsum.photos/${100 + i}` }} style={styles.cover} />}
      right={() => <List.Icon icon="heart" />}
    />
  ));

  return (
    <View>
      <Header title="List" isSearchVisible={false} />
      <ScrollView>
        <List.Section style={styles.section}>
          {items}
        </List.Section>
      </ScrollView>
    </View>
  );
};

export default ListItem;
