import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#f1c40f',
    borderBottomLeftRadius: 60,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 100,
  },
  headerImageArtist: {
    height: 200,
    width: 200,
    margin: 10,
    alignSelf: 'center',
  },
  headerTXT: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatlist: {
    marginHorizontal: 10,
    maxHeight: 170,
  },
  itemListContainerGanjil: {
    backgroundColor: '#1aa',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginRight: 20,
    marginLeft: 10,
  },
  itemListContainerGenap: {
    backgroundColor: '#8e44ad',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListGaris: {
    backgroundColor: '#a11',
    width: 5,
    height: '80%',
  },
  itemListGarisLain: {
    backgroundColor: '#bf1',
    width: 5,
    height: '80%',
  },
  itemListTXT: {
    color: '#f1c40f',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  judulTXT: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  judulSpesialTXT: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
  },
  touchableContainer: {
    backgroundColor: '#3498db',
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableTXT: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
  blank: {
    marginVertical: 5,
  },
});
