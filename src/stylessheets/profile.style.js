import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#aa1',
    borderBottomLeftRadius: 60,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 10,
  },
  headerTXT: {
    fontWeight: 'bold',
    color: '#fff',
  },
  headerTXTDesc: {
    color: '#fff',
  },
  bodyTouchable: {
    alignSelf: 'center',
    backgroundColor: '#1a4',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 20,
  },
  bodyTXT: {
    color: '#efd',
    fontSize: 20,
  },
  followerContainer: {
    flexDirection: 'row',
  },
  touchableContainer: {
    backgroundColor: '#3498db',
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableTXT: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
});
