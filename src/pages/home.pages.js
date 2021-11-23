import React from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {
  faMapMarkedAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {HomeStyle} = Style;

function HomePages() {
  const [data, setData] = React.useState({});
  const [panjangArray, setPanjangArray] = React.useState([
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
    {
      id: '10',
    },
  ]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://billboard-api2.p.rapidapi.com/hot-100', {
          params: {range: '1-10', date: '2019-05-11'},
          headers: {
            'x-rapidapi-host': 'billboard-api2.p.rapidapi.com',
            'x-rapidapi-key':
              '3a64e43cbbmsh3bb7347d31f0653p1abf3bjsn04469ed3e7e6',
          },
        })
        .then(res => {
          setData(res.data.content);
        })
        .catch(e => Alert.alert('Gagal!', e));
    }
    fetchData();
  }, []);

  const ListItemNamaCity = dataPassing => {
    // console.log(data['1']);
    return (
      <TouchableOpacity
        style={
          dataPassing.data.id % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }
        // onPress={() =>
        //   setPilihan({
        //     ...pilihan,
        //     ['city_id']: dataPassing.dataNama,
        //   })
        // }
      >
        <View>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color="#fff" />
        </View>
        {/* <Text style={HomeStyle.itemListTXT}>{data['1']}</Text> */}
      </TouchableOpacity>
    );
  };

  console.log(data);
  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>Shafiyah Huyai - 21120119120004</Text>
      </View>
      <Text style={HomeStyle.judulTXT}>Provinsi</Text>
      {/* {data === {}
        ? null
        : panjangArray.map((item, i) => {
            return <ListItemNamaCity key={i} data={item} />;
          })} */}
      {/* <TouchableOpacity
        onPress={() => {
          dispatch({
            type: 'FILL_PROVCITY',
            inputValue: pilihan,
          });
          navigation.navigate('HomeDetailPage');
        }}
        style={HomeStyle.touchableContainer}>
        <Text style={HomeStyle.touchableTXT}>Lihat Detail</Text>
      </TouchableOpacity> */}
    </View>
  );
}

export default HomePages;
