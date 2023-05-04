import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  gradintBackground: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#29246A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  whiteColor: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  arrow: {
    position: 'absolute',
    left: 20,
  },
});
