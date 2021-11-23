import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import Style from '../stylessheets';
import {useSelector} from 'react-redux';

const {HomeStyle} = Style;

function HomeDetailPages() {
  const TrackReducer = useSelector(state => state.TrackReducer);
  return (
    <View style={HomeStyle.container}>
      <View>
        <Image
          source={{
            uri: TrackReducer.topTrack.images.background,
          }}
          style={HomeStyle.headerImageArtist}
        />
        <Text style={HomeStyle.judulTXT}>Track Detail : </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Judul : ' + TrackReducer.topTrack.title}
        </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Penyanyi : ' + TrackReducer.topTrack.subtitle}
        </Text>
        <View style={HomeStyle.blank} />
        <TouchableOpacity
          style={HomeStyle.touchableContainer}
          onPress={() =>
            Linking.openURL(
              'https://www.shazam.com/track/40333609/river-flows-in-you',
            )
          }>
          <Text style={HomeStyle.touchableTXT}>Dengarkan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeDetailPages;
