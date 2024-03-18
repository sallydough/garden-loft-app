
// import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import React from 'react';
// import * as Linking from 'expo-linking'; // Assuming Expo environment

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

// const HelpButton: React.FC = () => {
//   const handleCallSupport = async () => {
//     try {
//       const phoneNumber = '+14035102393'; // Replace with your actual phone number
//       const supported = await Linking.canOpenURL(`tel:${phoneNumber}`); // Check if URL can be handled

//       if (supported) {
//         await Linking.openURL(phoneNumber);
//       } else {
//         console.error('Failed to open phone number:', phoneNumber);
//         // Handle the case where the URL cannot be opened (e.g., display an error message to the user)
//       }
//     } catch (error) {
//       console.error('Error opening phone number:', error);
//       // Handle errors gracefully (e.g., display an error message to the user)
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../../assets/images/garden-loft-logo2.png')} style={{ width: 155, height: 72 }} />
//       <TouchableOpacity onPress={handleCallSupport} style={{ backgroundColor: '#59ACCE', padding: 5, paddingLeft: 10, borderRadius: 7, flexDirection: "row", }}>
//         <MaterialCommunityIcons name="phone-classic" size={52} color="#f3b718" />
//         <Text style={{ color: '#2E3E5E', fontSize: 30, padding: 10, }}>Call Support</Text>
//       </TouchableOpacity>
//       <Text style={{ color: '#2E3E5E', fontSize: 32, padding: 10 }}>Welcome </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: viewportWidth * 0.95,
//     justifyContent: "space-between",
//     flexDirection: "row",
//     marginTop: 15,
//   },
// });

// export default HelpButton;


import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { TwilioVoice } from 'react-native-twilio-programmable-voice'; // Import Twilio Voice SDK
import * as Linking from 'expo-linking';
import { FIREBASE_AUTH } from '@/FirebaseConfig';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");


const HelpButton: React.FC = (() => {
  const handleCallSupport = async () => {
    try {
      // Replace with your Twilio access token
      const accessToken = 'YOUR_TWILIO_ACCESS_TOKEN';

      // Call Twilio Voice SDK to make the call
      await TwilioVoice.connect({ To: '+14035102393', accessToken });

    } catch (error) {
      console.error('Error making call:', error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/garden-loft-logo2.png')} style={{ width: 155, height: 72 }} />
      <TouchableOpacity onPress={handleCallSupport} style={{ backgroundColor: '#59ACCE', padding: 5, paddingLeft: 10, borderRadius: 7, flexDirection: "row", }}>
        <MaterialCommunityIcons name="phone-classic" size={52} color="#f3b718" />
        <Text style={{ color: '#2E3E5E', fontSize: 30, padding: 10, }}>Call Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logOut} onPress={() => FIREBASE_AUTH.signOut() }><Text style={styles.logOut}>Log Out</Text></TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: viewportWidth * 0.95,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
  },
  logOut: {
    // backgroundColor: '#59ACCE', 
    color: '#2E3E5E', 
    fontSize: 30, 
    padding: 10, 
    borderRadius: 7}
});

export default HelpButton;
