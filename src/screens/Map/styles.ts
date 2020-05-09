import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    top: 10,
    zIndex: 1,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
  },
  map: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export default styles;
