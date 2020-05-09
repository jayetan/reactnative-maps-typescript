import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

import SearchInput from '../SearchInput';

interface IProps {
  title: string;
  isSearchVisible: boolean;
}

const Header = ({ title, isSearchVisible }: IProps) => (
  <View>
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
    {isSearchVisible ? <SearchInput /> : null}
  </View>
);

export default Header;
