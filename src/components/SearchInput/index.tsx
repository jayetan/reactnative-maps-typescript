import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';

import styles from './styles';
import GetLocations from '../../services/getLocations';
import { AppContext } from '../../store/context';
import { Types } from '../../store/reducers';

const SearchInput = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const { dispatch } = useContext(AppContext);

  const onChangeSearch = async (query: string) => {
    if (!query) {
      dispatch({ type: Types.Clear });
    }
    setSearchValue(query);
  };

  React.useEffect(() => {
    if (!searchValue) {
      return () => {};
    }

    const timeout = setTimeout(async () => {
      const locations = await GetLocations(searchValue);
      dispatch({ type: Types.Add, payload: locations });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  return (
    <Searchbar
      style={styles.search}
      placeholder="Search"
      onChangeText={(e) => onChangeSearch(e)}
      value={searchValue}
    />
  );
};

export default SearchInput;
