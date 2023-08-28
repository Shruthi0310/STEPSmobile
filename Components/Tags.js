import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image
} from 'react-native';

import styles from './Tags.scss';

function cx(...classNames) {
  return classNames.map(className => styles[className]).filter(Boolean);
}


const Tags = () => {
  return (
    // <View style={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}>
    <View style={cx('container')}>
      <Text style={cx('text')}>Short Text</Text>
    </View>
  );
};


export default Tags;