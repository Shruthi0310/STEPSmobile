import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import EventCard from "./Components/EventCard";
import Footnote from "./Components/Footnote";
import CarouselView from "./Components/CarouselView";

export default function App() {
  return (
    <View>
      <ScrollView>
        <StatusBar style="auto" />
        <CarouselView></CarouselView>
        <EventCard></EventCard>
        <Footnote></Footnote>
      </ScrollView>
    </View>
  );
}
