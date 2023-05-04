import {Dimensions, StyleSheet} from 'react-native';

const paddingHorizontalContainer = 8;
const paddingVerticalContainer = 16;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(55, 50, 137)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: paddingVerticalContainer,
    paddingHorizontal: paddingHorizontalContainer,
    borderRadius: 16,
    height: 140,
    width:
      (Dimensions.get('window').width -
        2 * (paddingHorizontalContainer + paddingVerticalContainer) -
        1) /
      3,
  },
  whiteColor: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 22,
  },
  selectedColor: {
    color: 'rgb(55, 50, 137)',
  },
  selectedColorBackground: {
    backgroundColor: 'rgb(255, 170, 170)',
  },
});
