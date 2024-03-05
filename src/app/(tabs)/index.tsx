import { StyleSheet , Text, View } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import CarouselOne from '@/src/components/CarouselOne/CarouselOne';
import CarouselTwo from '@/src/components/CarouselTwo/CarouselTwo';
import HelpButton from '@/src/components/HelpButton/CarouselTwo';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HelpButton />
      <CarouselOne />
      <CarouselTwo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCF8E3',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
