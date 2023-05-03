import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  gradintBackground: {
    flex: 3,
    paddingVertical: 48,
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#29246A',
    paddingTop: 60,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#29246A',
  },
  whiteColor: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 56,
  },
  arrow: {
    marginLeft: 20,
  },
});
