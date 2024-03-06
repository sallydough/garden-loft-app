// import React, { useState,useRef } from "react";
// import {
//   View,
//   Text, ScrollView,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity, Linking,
// } from "react-native";
// import Carousel from "react-native-snap-carousel";
// import { MaterialIcons } from "@expo/vector-icons"; // Assuming you're using Expo for icons
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
// import VideoCall from "../VideoCall/VideoCall";


// const { width: viewportWidth, height: viewportHeight } =
//   Dimensions.get("window");

// interface Item {
//   title: string;
//   icon: string;
// }

// const data: Item[] = [
//   { title: "ACTIVITIES", icon: "weight-lifter" },
//   { title: "VIDEO CALL", icon: "phone" },
//   { title: "GARDEN LOFT", icon: "home-group-plus" },
//   { title: "ENTERTAINMENT", icon: "movie-open-star" },
//   { title: "GALLERY", icon: "camera-burst" },
//   { title: "LIGHTS", icon: "lightbulb" },
// ];


// const MyCarousel: React.FC = () => {
//   const [showVideoCall, setShowVideoCall] = useState(false);

//   const renderItem: ({
//     item,
//     index, 
//     isActive
//   }: {
//     item: Item;
//     index: number;
//     isActive: boolean
//   }) => JSX.Element = ({ item, index }) => (
//     <TouchableOpacity onPress={() => handleCardPress(item.title)}>
//       <View
//         style={[
//           styles.item,
//           { backgroundColor: index === 3 ? "#f3b718" : "#909090" },
//         ]}
//       >
//         <MaterialCommunityIcons name={item.icon} size={82} color="#f3b718" />
//         <Text style={styles.title}>{item.title}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const handleCardPress = (title: string) => {
//     if (title === "VIDEO CALL") {
//       setShowVideoCall(true);
//     } else {
//       setShowVideoCall(false);
//     }
//   };

//   // const renderArrow= (
//   //   direction: "left" | "right",
//   //   onPress: () => void
//   // ) => (
//   //   <TouchableOpacity
//   //     style={[
//   //       styles.arrowContainer,
//   //       direction === "left" ? styles.leftArrow : styles.rightArrow,
//   //     ]}
//   //     onPress={onPress}
//   //   >
//   //     <MaterialIcons
//   //       name={direction === "left" ? "chevron-left" : "chevron-right"}
//   //       size={24}
//   //       color="black"
//   //     />
//   //   </TouchableOpacity>
//   // );

//   const scrollViewRef = useRef<ScrollView>(null);

//   const scrollToNext = () => {
//     if (scrollViewRef.current) {
//       const currentIndex = scrollViewRef.current.currentIndex || 0;
//       const nextIndex = currentIndex + 1;
//       scrollViewRef.current.snapToItem(nextIndex, true, true);
//     }
//   };
  
//   const scrollToPrevious = () => {
//     if (scrollViewRef.current) {
//       const currentIndex = scrollViewRef.current.currentIndex || 0;
//       const prevIndex = currentIndex - 1;
//       scrollViewRef.current.snapToItem(prevIndex, true, true);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Carousel
//         layout={"default"}
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={viewportWidth * 0.85} 
//         itemWidth={viewportWidth * 0.17} // Adjusted to show 5 cards at a time
//         loop={true}
//         activeSlideAlignment="center" // Center mode
//         ref={(c) => { scrollViewRef.current = c; }}
//         inactiveSlideScale={0.8} // Scale of inactive slides
//         inactiveSlideOpacity={1} // Opacity of inactive slides
//       />
//            <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
//         <FontAwesome name="angle-left" size={100} color="rgb(45, 62, 95)" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
//         <FontAwesome name="angle-right" size={100} color="rgb(45, 62, 95)" />
//       </TouchableOpacity>
//       {showVideoCall && <VideoCall />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: 70
//   },
//   item: {
//     width: viewportWidth * 0.18, // Adjusted to show 5 cards at a time
//     height: viewportHeight * 0.25,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 60,
//     flexDirection: "column",
//     gap: 30,
//     paddingHorizontal: 10,

//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginLeft: 10,
//     color: "#f3b718",
//   },
//   arrowLeft: {
//     position: 'absolute',
//     top: '12%',
//     left: 0,
//     transform: [{ translateY: -10 }],
//   },
//   arrowRight: {
//     position: 'absolute',
//     top: '12%',
//     right: -10,
//     transform: [{ translateY: -10 }],
//   },
// });

// export default MyCarousel;

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import VideoCall from "../VideoCall/VideoCall";
import Activities from "../CarouselTwo/Activities";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

interface Item {
  title: string;
  icon: string;
  component?: JSX.Element;
}

const data: Item[] = [
  { title: "ACTIVITIES", icon: "weight-lifter", component: <Activities /> },
  { title: "VIDEO CALL", icon: "phone", component: <VideoCall />  },
  { title: "GARDEN LOFT", icon: "home-group-plus" },
  { title: "ENTERTAINMENT", icon: "movie-open-star" },
  { title: "GALLERY", icon: "camera-burst" },
  { title: "LIGHTS", icon: "lightbulb" },
];

const Home: React.FC = () => {
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollViewRef = useRef<Carousel<Item>>(null);

  const handleSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => (
    <TouchableOpacity onPress={() => handleCardPress(item, index)}>
      <View
        style={[
          styles.item,
          {
            backgroundColor: index === activeIndex ? "#f3b718" : "#909090",
          },
        ]}
      >
        <MaterialCommunityIcons name={item.icon} size={82} color="#f3b718" />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleCardPress = (item: Item, index: number) => {
    if (item.component) {
      // Render component if available
      setShowVideoCall(false);
    } else {
      setShowVideoCall(item.title === "VIDEO CALL");
    }
    scrollViewRef.current?.snapToItem(index);
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth * 0.85}
        itemWidth={viewportWidth * 0.17}
        loop={true}
        activeSlideAlignment="center"
        ref={scrollViewRef}
        inactiveSlideOpacity={0.5}
        onSnapToItem={(index) => handleSnapToItem(index)} // Handle snapping logic
      />
      {data[activeIndex].component && data[activeIndex].component}
      <TouchableOpacity style={styles.arrowLeft} onPress={() => scrollViewRef.current?.snapToPrev()}>
        <FontAwesome name="angle-left" size={100} color="rgb(45, 62, 95)" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={() => scrollViewRef.current?.snapToNext()}>
        <FontAwesome name="angle-right" size={100} color="rgb(45, 62, 95)" />
      </TouchableOpacity>
      {showVideoCall && <VideoCall />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  item: {
    width: viewportWidth * 0.18,
    height: viewportHeight * 0.25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    flexDirection: "column",
    gap: 30,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#f3b718",
  },
  arrowLeft: {
    position: "absolute",
    top: "12%",
    left: 0,
    transform: [{ translateY: -10 }],
  },
  arrowRight: {
    position: "absolute",
    top: "12%",
    right: -10,
    transform: [{ translateY: -10 }],
  },
});

export default Home;
