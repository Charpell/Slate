import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '@constants';

import { Cast, HeaderHome } from '@components';

const MyList = () => (
  <View style={gStyle.container}>
    <HeaderHome show />

    <View style={gStyle.spacer96} />

    <View style={gStyle.pH4}>
      <Text style={gStyle.heading}>MyList</Text>
    </View>

    <Cast />
  </View>
);

export default MyList;