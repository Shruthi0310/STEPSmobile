import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image
} from 'react-native';

import styles from './Footnote.scss';

function cx(...classNames) {
  return classNames.map(className => styles[className]).filter(Boolean);
}


const Footnote = () => {
  return (
    <SafeAreaView>
      <View style={cx('container', 'flex', 'flex-col')} className={cx('flex', 'flex-col')}>
        <Text style={cx('text')}>About us</Text>
        <Text style={cx('text')}>Community Guidelines</Text>
        <Text style={cx('text')}>Privacy Policy</Text>
        <Text  style={cx('text-copyright')}>@2023 UVENTS</Text>
      </View>
    </SafeAreaView>
  );
};


export default Footnote;