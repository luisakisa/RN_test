import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  selectedContainer: {
    backgroundColor: 'white',
    borderColor: '#72DDFF',
    borderWidth: 2,
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.2) ',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    marginHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    height: 72,
    borderRadius: 20,
    maxWidth: 359,
    maxHeight: 82,
  },
  boxDays: {
    marginTop: 2,
    backgroundColor: '#432AA9',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: 500,
  },
  columnRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingLeft: 15,
  },
  columnLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 2,
  },
  price: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 2,
  },
  trial: {
    fontSize: 15,
    fontWeight: '400',
  },
  colorWhite: {
    color: 'white',
  },
  colorBlack: {
    color: 'black',
  },
});
