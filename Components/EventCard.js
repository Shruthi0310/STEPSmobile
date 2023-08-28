import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Button,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image
} from 'react-native';

import Tags from './Tags'
import styles from './EventCard.scss';

function cx(...classNames) {
  return classNames.map(className => styles[className]).filter(Boolean);
}


const EventCard = () => {
  return (
    <SafeAreaView>
      <View style={cx('container')}>
        <View style={cx('eventcard-wrapper')}>
          <Image style={cx('image')} source={{
            uri: 'https://i0.wp.com/envictus.sg/wp-content/uploads/2022/03/placeholder-3.png',
          }}/>
            <View style={cx('details')}>
            <Text style={cx('title')}>Event Title</Text>
            <View style={cx('desc-wrap')}>
              <Icon name="calendar" ></Icon>
              <Text style={cx('desc')}>Thu, Feb 29, 2024 at 4.30 pm</Text>
            </View>
            <View style={cx('desc-wrap')}>
              <Icon name="user" ></Icon>
              <Text style={cx('desc')}>National University of Singapore, SOC</Text>
            </View>
            <View style={cx('desc-wrap')}>
              <Icon name="map" ></Icon>
              <Text style={cx('desc')}>UTown Auditorium</Text>
            </View>
            <View style={cx('tags')}>
              <Tags></Tags>
            </View>
          </View>
        </View>
          
        
        
      </View>
      
    </SafeAreaView>
  );
};


export default EventCard;