import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Style from '../stylessheets';
import {useSelector} from 'react-redux';
import Texthtml from 'react-native-html-to-text';

const {CostStyle} = Style;

function CostDetailPages() {
  const LirikReducer = useSelector(state => state.LirikReducer);
  return (
    <View style={[CostStyle.container, {backgroundColor: '#f1c40f'}]}>
      <ScrollView>
        <Text style={[CostStyle.judulTXT, {alignSelf: 'center'}]}>
          Lirik Lagu
        </Text>
        <Texthtml
          html={LirikReducer.data}
          style={{textAlign: 'center', marginTop: 10}}
        />
      </ScrollView>
    </View>
  );
}

export default CostDetailPages;
