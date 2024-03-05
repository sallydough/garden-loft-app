import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

interface Item {
  title: string;
  icon: string;
}

const data: Item[] = [
  { title: 'Card 1', icon: 'home' },
  { title: 'Card 2', icon: 'work' },
  { title: 'Card 3', icon: 'school' },
  { title: 'Card 4', icon: 'star' },
  { title: 'Card 5', icon: 'favorite' },
  { title: 'Card 6', icon: 'account-circle' },
];

const Item: React.FC<{ item: Item; index: number }> = ({ item, index }) => (
  <View style={[styles.item, { backgroundColor: index === 3 ? '#f3b718' : 'grey' }]}>
    <MaterialIcons name={item.icon} size={32} color="white" />
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const MyCarousel: React.FC = () => {
  const renderItem: ({ item, index }: { item: Item; index: number }) => JSX.Element = ({ item, index }) => (
    <Item item={item} index={index} />
  );

  const renderArrow = (direction: 'left' | 'right', onPress: () => void) => (
    <TouchableOpacity style={[styles.arrowContainer, direction === 'left' ? styles.leftArrow : styles.rightArrow]} onPress={onPress}>
      <MaterialIcons name={direction === 'left' ? 'chevron-left' : 'chevron-right'} size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth }
        itemWidth={viewportWidth * 0.2} // Adjusted to show 5 cards at a time
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
  },
  item: {
    width: viewportWidth * 0.2, // Adjusted to show 5 cards at a time
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
    left: 10,
  },
  rightArrow: {
    right: 10,
  },
});

export default MyCarousel;




