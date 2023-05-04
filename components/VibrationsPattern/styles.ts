import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(55, 50, 137, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 16,
    height: 140,
    width: (Dimensions.get('window').width - 2 * (8 + 16) - 1) / 3,
  },
  whiteColor: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 22,
  },
  selectedColor: {
    color: 'rgba(55, 50, 137, 1)',
  },
  selectedColorBackground: {
    backgroundColor: 'rgba(255, 170, 170, 1)',
  },
});
