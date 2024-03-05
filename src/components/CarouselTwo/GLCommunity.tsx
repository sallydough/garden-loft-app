import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

interface Item {
  title: string;
  icon: string;
}

const data: Item[] = [
  { title: 'CONTACTS', icon: 'home' },
  { title: 'ACTIVITIES', icon: 'work' },
  { title: 'LIGHTS', icon: 'school' },
  { title: 'ENTERTAINMENT', icon: 'star' },
  { title: 'GALLERY', icon: 'favorite' },
  { title: 'GARDEN LOFT', icon: 'account-circle' },
];

const Item: React.FC<{ item: Item; index: number }> = ({ item, index }) => (
  <View style={[styles.item, { backgroundColor: index === 3 ? '#f3b718' : '#f09030' }]}>
    <MaterialIcons name={item.icon} size={32} color="white" />
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const GLCommunity: React.FC = () => {
  const renderItem: ({ item, index }: { item: Item; index: number }) => JSX.Element = ({ item, index }) => (
    <Item item={item} index={index} />
  );

  const renderArrow = (direction: 'left' | 'right', onPress: () => void) => (
    <TouchableOpacity style={[styles.arrowContainer, direction === 'left' ? styles.leftArrow : styles.rightArrow]} onPress={onPress}>
      <MaterialCommunityIcons name={direction === 'left' ? 'chevron-left' : 'chevron-right'} size={50} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth * 0.9}
        itemWidth={viewportWidth * 0.3} // Adjusted to show 3 cards at a time
        loop={true}
        activeSlideAlignment="center" // Center mode
        renderArrow={renderArrow}
        inactiveSlideScale={0.8} // Scale of inactive slides
        inactiveSlideOpacity={1} // Opacity of inactive slides
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative', // Ensure the arrows are positioned relative to this container
  },
  item: {
    width: viewportWidth * 0.3, // Adjusted to show 3 cards at a time
    height: viewportHeight * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  leftArrow: {
    left: 10, // Adjusted to be more visible on a tablet
    color: "black",
  },
  rightArrow: {
    right: 10, // Adjusted to be more visible on a tablet
  },
});

export default GLCommunity;




