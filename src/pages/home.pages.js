import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {HomeStyle} = Style;

function HomePages() {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks', {
          params: {id: '40008598', locale: 'en-US'},
          headers: {
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            'x-rapidapi-key':
              '3a64e43cbbmsh3bb7347d31f0653p1abf3bjsn04469ed3e7e6',
          },
        })
        .then(res => {
          console.log(res.data);
          setData(res.data.tracks);
        })
        .catch(e => Alert.alert('Gagal!', e));
    }
    fetchData();
  }, []);

  const ListItemNamaCity = dataPassing => {
    return (
      <TouchableOpacity
        style={
          dataPassing.index % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }
        onPress={() => {
          dispatch({
            type: 'FILL_TRACK',
            inputValue: dataPassing.data,
          });
          navigation.navigate('HomeDetailPage');
        }}>
        <View>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color="#fff" />
        </View>
        <Text style={HomeStyle.itemListTXT}>{dataPassing.data.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>
          Afifah Humaira - 211201191XXXXXXX
        </Text>
      </View>
      <Text style={[HomeStyle.judulTXT, {alignSelf: 'center'}]}>
        List Artist Top Tracks
      </Text>
      <ScrollView>
        {data.map((item, i) => {
          return <ListItemNamaCity key={i} data={item} index={i} />;
        })}
      </ScrollView>
    </View>
  );
}

export default HomePages;
