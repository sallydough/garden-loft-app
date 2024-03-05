import React, { useState,useRef } from "react";
import {
  View,
  Text, ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity, Linking,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons"; // Assuming you're using Expo for icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
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

  // const renderArrow = (
  //   direction: "left" | "right",
  //   onPress: () => void
  // ) => (
  //   <TouchableOpacity
  //     style={[
  //       styles.arrowContainer,
  //       direction === "left" ? styles.leftArrow : styles.rightArrow,
  //     ]}
  //     onPress={onPress}
  //   >
  //     <MaterialIcons
  //       name={direction === "left" ? "chevron-left" : "chevron-right"}
  //       size={24}
  //       color="black"
  //     />
  //   </TouchableOpacity>
  // );

  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToNext = () => {
    if (scrollViewRef.current) {
      const currentIndex = scrollViewRef.current.currentIndex || 0;
      const nextIndex = currentIndex + 1;
      scrollViewRef.current.snapToItem(nextIndex, true, true);
    }
  };
  
  const scrollToPrevious = () => {
    if (scrollViewRef.current) {
      const currentIndex = scrollViewRef.current.currentIndex || 0;
      const prevIndex = currentIndex - 1;
      scrollViewRef.current.snapToItem(prevIndex, true, true);
    }
  };

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
        ref={(c) => { scrollViewRef.current = c; }}
        inactiveSlideScale={0.8} // Scale of inactive slides
        inactiveSlideOpacity={1} // Opacity of inactive slides
      />
           <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
        <FontAwesome name="angle-left" size={74} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
        <FontAwesome name="angle-right" size={74} color="black" />
      </TouchableOpacity>
      {showVideoCall && <VideoCall />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70
  },
  item: {
    width: viewportWidth * 0.18, // Adjusted to show 5 cards at a time
    height: viewportHeight * 0.25,
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
  arrowLeft: {
    position: 'absolute',
    top: '15%',
    left: 0,
    transform: [{ translateY: -10 }],
  },
  arrowRight: {
    position: 'absolute',
    top: '15%',
    right: -10,
    transform: [{ translateY: -10 }],
  },
});

export default MyCarousel;
