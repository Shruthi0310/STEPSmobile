import React, { useState, useRef } from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

// import styles from './CarouselView.scss';
import Carousel, { Pagination } from "react-native-snap-carousel";

function cx(...classNames) {
  return classNames.map((className) => styles[className]).filter(Boolean);
}

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const DATA = [];
for (let i = 0; i < 5; i++) {
  DATA.push(i);
}

const CarouselView = () => {
  _renderItem = ({ item }) => {
    return (
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://i0.wp.com/envictus.sg/wp-content/uploads/2022/03/placeholder-3.png",
          }}
        />
      </View>
    );
  };

  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <SafeAreaView>
      <Carousel
        ref={carouselRef}
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <TouchableOpacity
        onPress={() => carouselRef.current.snapToPrev()}
        style={styles.backArrow}
      >
        <Ionicons name="chevron-back-circle" size={30} color={"#1A1919"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => carouselRef.current.snapToNext()}
        style={styles.forwardArrow}
      >
        <Ionicons name="chevron-forward-circle" size={30} color={"#1A1919"} />
      </TouchableOpacity>
      <Pagination
        dotsLength={DATA.length} // Total number of dots (same as data length)
        activeDotIndex={activeSlide} // Current active slide
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  forwardArrow: {
    position: "absolute",
    top: "50%",
    right: "5%",
  },
  backArrow: {
    position: "absolute",
    top: "50%",
    left: "5%",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CarouselView;
