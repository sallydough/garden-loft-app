import { StyleSheet , Text, View } from 'react-native';

import CarouselOne from '@/src/components/CarouselOne/CarouselOne';
import HelpButton from '@/src/components/HelpButton/HelpButton';
// import LoginSignUp from '@/src/components/CarouselTwo/LoginSignUp';
// import Activities from '@/src/components/CarouselTwo/Activities';



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HelpButton />
      <CarouselOne />
      {/* <Activities /> */}
      {/* <LoginSignUp/> */}

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
