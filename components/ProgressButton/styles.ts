import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#432AA9',
    marginHorizontal: 8,
    borderRadius: 34,
    paddingVertical: 16,
    borderWidth: 8,
    borderColor: '#785CEB',
    overflow: 'hidden',
    alignSelf:'stretch'
  },
  gradient: {
    flex: 1,
    alignSelf: 'stretch',
  },
  gradientAnimatedStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  imgStyle: {
    margin: 7,
    marginLeft: 8,
  },
  textUp: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  textLow: {
    color: 'white',
    opacity: 0.64,
    fontSize: 15,
    paddingTop: 4,
  },
  content: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer:{
    flexGrow:1
  },
});
