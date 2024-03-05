import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming you're using Expo for icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VideoCall from "../VideoCall/VideoCall";


const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

interface Item {
  title: string;
  icon: string;
}

const data: Item[] = [
  { title: "ACTIVITIES", icon: "weight-lifter" },
  { title: "VIDEO CALL", icon: "phone" },
  { title: "GARDEN LOFT", icon: "home-group-plus" },
  { title: "ENTERTAINMENT", icon: "movie-open-star" },
  { title: "GALLERY", icon: "camera-burst" },
  { title: "LIGHTS", icon: "lightbulb" },
];


const MyCarousel: React.FC = () => {
  const [showVideoCall, setShowVideoCall] = useState(false);

  const renderItem: ({
    item,
    index,
  }: {
    item: Item;
    index: number;
  }) => JSX.Element = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleCardPress(item.title)}>
      <View
        style={[
          styles.item,
          { backgroundColor: index === 3 ? "#f3b718" : "grey" },
        ]}
      >
        <MaterialCommunityIcons name={item.icon} size={32} color="white" />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleCardPress = (title: string) => {
    if (title === "VIDEO CALL") {
      setShowVideoCall(true);
    } else {
      setShowVideoCall(false);
    }
  };

  const renderArrow = (
    direction: "left" | "right",
    onPress: () => void
  ) => (
    <TouchableOpacity
      style={[
        styles.arrowContainer,
        direction === "left" ? styles.leftArrow : styles.rightArrow,
      ]}
      onPress={onPress}
    >
      <MaterialIcons
        name={direction === "left" ? "chevron-left" : "chevron-right"}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth * 0.85} 
        itemWidth={viewportWidth * 0.17} // Adjusted to show 5 cards at a time
        loop={true}
        activeSlideAlignment="center" // Center mode
        renderArrow={renderArrow}
        inactiveSlideScale={0.8} // Scale of inactive slides
        inactiveSlideOpacity={1} // Opacity of inactive slides
      />
      {showVideoCall && <VideoCall />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    width: viewportWidth * 0.18, // Adjusted to show 5 cards at a time
    height: viewportHeight * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "column",
    paddingHorizontal: 10,

  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
  arrowContainer: {
    position: "absolute",
    top: "50%",
    paddingHorizontal: 10,
    zIndex: 1,
  },
  leftArrow: {
    left: 10,
  },
  rightArrow: {
    right: 10,
  },
});

export default MyCarousel;
