import shadow from 'native-base/lib/typescript/theme/base/shadows';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

let styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    paddingTop: 35,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  contaner: {
    flex: 1,
    paddingHorizontal: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  button: {
    height: 30,
    width: width / 3.5,
    backgroundColor: '#47b711',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default styles;
