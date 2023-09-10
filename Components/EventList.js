import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet} from 'react-native';
import axios from 'axios';

import EventCard from './EventCard';

const EventList = () => {
  const [events, setEvents] = useState([]);

  const mongodbUrl = process.env.REACT_APP_MONGODB_URL;
  const apiEndpoint = `${mongodbUrl}/api/events`;

  useEffect(() => {
    axios.get(apiEndpoint)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <View>
      <Text>{events.length > 0 ? events[0].organisation : 'Loading...'}</Text>
      {/* <FlatList
        data={events}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <EventCard event={item} />}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20, // Font size
    fontWeight: 'bold', // Font weight (e.g., 'bold', 'normal')
    color: 'blue', // Text color
    textAlign: 'center', // Text alignment ('left', 'center', 'right')
    // You can add more style properties as needed
  },
});

export default EventList;
