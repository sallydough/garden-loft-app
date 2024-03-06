import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import Carousel from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Activities2: React.FC = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'ROM Seated Exercise', phoneNumber: '1234567890' },
    { id: 2, name: 'Zumba', phoneNumber: '0987654321' },
    { id: 3, name: 'Pictionary', phoneNumber: '9876543210' },
    { id: 4, name: 'Scattegories', phoneNumber: '0123456789' },
    { id: 5, name: 'Art History', phoneNumber: '6789012345' },
  ]);

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
  

  const handleCall = (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.cardContainer}
      onPress={() => handleCall(item.phoneNumber)}>
      {/* <MaterialCommunityIcons name="camera-burst" size={94} color="white" /> */}
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <Carousel
       layout={'default'}
       data={contacts}
       renderItem={renderItem}
       sliderWidth={viewportWidth * 0.90}
       itemWidth={viewportWidth * 0.3}
       loop={true}
       activeSlideAlignment="center"
       ref={(c) => { scrollViewRef.current = c; }}
       inactiveSlideScale={0.8}
       inactiveSlideOpacity={1}
      />

      <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
        <FontAwesome name="angle-left" size={124} color="rgb(45, 62, 95)" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
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
    textAlign: 'center'
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

export default Activities2;
