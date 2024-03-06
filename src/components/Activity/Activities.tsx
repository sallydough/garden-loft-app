import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Activities = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef<Carousel<any>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        'https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09'
      );
      if (!response.data.success) {
        throw new Error('Failed to retrieve signed-up activities.');
      }
      setEvents(response.data.data.signup);
      setLoading(false);

      // Navigate to Zoom when data is fetched
      const eventToNavigate = response.data.data.signup[0]; // Assuming you want to navigate to the first event
      navigateToZoomLink(eventToNavigate);
    } catch (error) {
      console.error('Error fetching signed-up activities:', error.message);
      setError('Failed to retrieve signed-up activities. Please try again later.');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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

  const navigateToZoomLink = (event) => {
    setSelectedEvent(event);
    navigation.navigate('ZoomScreen', { zoomLink: event.zoomLink });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToZoomLink(item)} style={styles.card}>
      <Text>{item.item}</Text>
      {/* Display other properties if needed */}
    </TouchableOpacity>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={events}
        renderItem={renderItem}
        sliderWidth={viewportWidth * 0.85}
        itemWidth={viewportWidth * 0.3}
        loop={true}
        activeSlideAlignment="center"
        ref={scrollViewRef}
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={1}
      />

      <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
        <FontAwesome name="angle-left" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
        <FontAwesome name="angle-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 100,
  },
  card: {
    width: 120,
    height: 80,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: -12 }],
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: [{ translateY: -12 }],
  },
});

export default Activities;
