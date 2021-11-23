import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {CostStyle} = Style;

function CostPages() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    artist: '',
    title: '',
  });

  async function fetchData() {
    if (data.artist !== '' && data.title !== '') {
      await axios
        .get('https://api.lyrics.ovh/v1/' + data.artist + '/' + data.title)
        .then(res => {
          console.log(res.data);
          dispatch({
            type: 'FILL_LIRIK',
            inputValue: res.data.lyrics,
          });
          navigation.navigate('CostDetailPage');
        })
        .catch(e => Alert.alert('Gagal!', e));
    } else {
      Alert.alert('Warning!', 'Di isi dulu kolom artis dan judul');
    }
  }

  return (
    <View style={CostStyle.container}>
      <View style={CostStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={CostStyle.headerImage}
        />
        <Text style={CostStyle.headerTXT}>Afifa Humaira - 21120119140141</Text>
      </View>
      <Text style={CostStyle.judulTXT}>Artis :</Text>
      <TextInput
        style={CostStyle.textInput}
        placeholder="Artist"
        onChangeText={value =>
          setData({
            ...data,
            ['artist']: value,
          })
        }
      />
      <Text style={CostStyle.judulTXT}>Judul :</Text>
      <TextInput
        style={CostStyle.textInput}
        placeholder="Judul"
        onChangeText={value =>
          setData({
            ...data,
            ['title']: value,
          })
        }
      />
      <TouchableOpacity
        onPress={() => {
          fetchData();
        }}
        style={CostStyle.touchableContainer}>
        <Text style={CostStyle.touchableTXT}>Cari Lirik</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CostPages;
