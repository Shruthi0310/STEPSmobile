import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventCard from './Components/EventCard';
import Tags from './Components/Tags';
import Footnote from './Components/Footnote';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <EventCard></EventCard>
      <Footnote></Footnote>
    </View>
  );
}
