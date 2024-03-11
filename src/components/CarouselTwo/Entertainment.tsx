import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import Carousel from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Entertainment: React.FC = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Golden Girls', phoneNumber: '1234567890', prompt:'Watch Golden Girls?' },
    { id: 2, name: 'Jeopardy', phoneNumber: '0987654321', prompt:'Watch Jeopardy?' },
    { id: 3, name: 'Hollywood Squares', phoneNumber: '9876543210', prompt:'Watch Hollywood Squares?' },
    { id: 4, name: 'The Price Is Right', phoneNumber: '0123456789', prompt:'Watch The Price Is Right?' },
    { id: 5, name: 'Wheel Of Fortune', phoneNumber: '6789012345', prompt:'Watch Wheel Of Fortune?' },
  ]);

  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleCall = (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url);
  };

  const handleSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.cardContainer,{
        backgroundColor: index === activeIndex + 3 ? "#f3b718" : "#f09030",
      },]}
      onPress={() => handleCall(item.phoneNumber)}>
      <MaterialCommunityIcons name="television-play" size={94} color="white" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={contacts}
        renderItem={renderItem}
        sliderWidth={Math.round(viewportWidth * 0.90)}
        itemWidth={Math.round(viewportWidth * 0.3)}
        loop={true}
        useScrollView={true}
        activeSlideAlignment="center"
        ref={scrollViewRef}
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={1}
        onSnapToItem={(index) => handleSnapToItem(index)} // Handle snapping logic
      />

       {/* Prompt */}
       <Text style={styles.prompt}>{contacts[activeIndex].prompt && contacts[activeIndex].prompt}</Text>

      <TouchableOpacity style={styles.arrowLeft} onPress={() => scrollViewRef.current?.snapToPrev()}>
        <FontAwesome name="angle-left" size={124} color="rgb(45, 62, 95)" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={() => scrollViewRef.current?.snapToNext()}>
        <FontAwesome name="angle-right" size={124} color="rgb(45, 62, 95)" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 290,
    alignItems: 'center',
  },
  cardContainer: {
    width: viewportWidth * 0.3, // Adjusted to show 3 cards at a time
    height: viewportHeight * 0.3,
    backgroundColor: '#f09030',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'column',
    gap: 25,
  },
  cardText: {
    fontSize: 36,
    color: '#393939',
    fontWeight: '700',
  },
  prompt: {
    fontSize: 30,
    marginBottom: 15,
  },
  arrowLeft: {
    position: 'absolute',
    top: '40%',
    left: -17,
    transform: [{ translateY: -50 }],
  },
  arrowRight: {
    position: 'absolute',
    top: '40%',
    right: -25,
    transform: [{ translateY: -50 }],
  },
});

export default Entertainment;
