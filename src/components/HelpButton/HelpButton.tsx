// // import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, Button } from 'react-native';
// // import { MaterialCommunityIcons } from "@expo/vector-icons";
// // // import { TwilioVoice } from 'react-native-twilio-programmable-voice'; // Import Twilio Voice SDK
// // import * as Linking from 'expo-linking';
// // import React, { useState, useRef,useEffect } from "react";
// // import { FIREBASE_AUTH, FIRESTORE_DB } from '@/FirebaseConfig';
// // import {collection, getDocs} from 'firebase/firestore';
// // import { doc, getDoc } from 'firebase/firestore';
// // // import BackgroundImage from '../CarouselTwo/BackgroundImage';

// // const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");
// // const windowWidth = Dimensions.get("window").width;
// // const windowHeight = Dimensions.get("window").height;

// // const HelpButton: React.FC = (() => {
// //   //fetch data info into welcome 'name'
// //   const [userInfo, setUserInfo] = useState<any |undefined>(null);

// //     //fetch data from firestore and display
// //     // const getData = async () => {
// //     //   const querySnapshot = await getDocs(collection(FIRESTORE_DB, "users"));
// //     //   querySnapshot.forEach((doc) => {
// //     //     // console.log(doc.id, " =>", doc.data());
// //     //     setUserInfo(doc.data());
// //     //   })};
    
// //     //   useEffect(() => {
// //     //     getData();
// //     //   },[]);

// //     const getCurrentUserData = async () => {
// //       const user = FIREBASE_AUTH.currentUser;
// //       if (user) {
// //         const userRef = doc(FIRESTORE_DB, "users", user.uid);
// //         const userSnap = await getDoc(userRef);
// //         if (userSnap.exists()) {
// //           console.log("User data:", userSnap.data());
// //           setUserInfo(userSnap.data()); // Assuming 'email' is a field in your document
// //         } else {
// //           console.log("No such document!");
// //         }
// //       }
// //     };
  
// //     useEffect(() => {
// //       getCurrentUserData();
// //     }, []); 
  
// //     // const BackgroundImage = () => {
// //     //   return (
// //     //     <View style={styles.fullScreen}>
// //     //       <Image
// //     //         source={require("../../../assets/images/garden-loft-logo-line.png")}
// //     //         // resizeMode="cover"
// //     //         style={styles.backgroundImage}
// //     //       />
// //     //     </View>
// //     //   );
// //     // };

// //     const image = require("../../../assets/images/garden loft-logo-outline-yellow.png")
    

// //   const handleCallSupport = async () => {
// //     try {
// //       // Replace with your Twilio access token
// //       const accessToken = 'YOUR_TWILIO_ACCESS_TOKEN';

// //       // Call Twilio Voice SDK to make the call
// //       // await TwilioVoice.connect({ To: '+14035102393', accessToken });

// //     } catch (error) {
// //       console.error('Error making call:', error);
// //       // Handle errors gracefully (e.g., display an error message to the user)
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* <Image source={require('../../../assets/images/garden-loft-logo2.png')} style={{ width: 155, height: 72 }} />
// //       <TouchableOpacity onPress={handleCallSupport} style={{ backgroundColor: '#59ACCE', padding: 5, paddingLeft: 10, borderRadius: 7, flexDirection: "row", }}> */}
// //       {/* <Image source={require('../../../assets/images/garden-loft-logo-outline.png')} style={{ width: 155, height: 72 }} /> */}
// //       <View style={styles.container2}>
// //       <ImageBackground source={image}  resizeMode={"cover"} style={styles.image}>
// //       {/* <BackgroundImage /> */}
// //       <Text style={styles.Welcome}>Hello {userInfo?.name}</Text>
// //       </ImageBackground>
// //       </View>
// //       {/* <TouchableOpacity onPress={handleCallSupport} style={{ backgroundColor: '#59ACCE', padding: 5, paddingLeft: 10, borderRadius: 15, flexDirection: "row", }}>
       
// //         <Text style={{ color: '#2E3E5E',  fontSize: 28, padding: 9, }}>Call Emergency</Text>
// //         <MaterialCommunityIcons name="hospital-box-outline" marginRight={7} paddingTop= {3} size={50} color="#f3b718" />
// //       </TouchableOpacity> */}
// //       <TouchableOpacity onPress={handleCallSupport} style={{ backgroundColor: '#59ACCE', padding: 4, paddingLeft: 10, borderRadius: 25, flexDirection: "row", alignItems: "center",   shadowColor: '#000',
// //      shadowOffset: {
// //        width: 8,
// //        height: 7,
// //      },
// //      shadowOpacity: 0.25,
// //      shadowRadius: 6, elevation: 8, }}>
// //       <Text style={styles.EmergencyButton}>Call Emergency</Text>
// //       <MaterialCommunityIcons name="hospital-box-outline" style={{ marginRight: 7, paddingTop: 3 }} size={50} color="#f3b718" />
// //     </TouchableOpacity>
// //       {/* <TouchableOpacity style={styles.logOut} onPress={() => FIREBASE_AUTH.signOut() }><Text style={styles.logOut}>Log Out</Text></TouchableOpacity> */}
     
// //     </View>
// //   );
// // });

// // const styles = StyleSheet.create({
// //   container: {
// //     width: viewportWidth * 0.95,
// //     justifyContent: "space-between",
// //     flexDirection: "row",
// //     marginTop: 15,
// //   },

// //   EmergencyButton: {
// //     color: '#2E3E5E',
// //      fontSize: 28, 
// //      padding: 9,
// //      shadowColor: '#000',
// //      shadowOffset: {
// //        width: 12,
// //        height: 7,
// //      },
// //      shadowOpacity: 0.8,
// //      shadowRadius: 26,
// //      elevation: 10,

// //   },
  
// //   Welcome: {
// //     // backgroundColor: '#59ACCE', 
// //     color: '#2E3E5E', 
// //     fontSize: 30, 
// //     paddingTop: '9%', 
// //     // paddingLeft: 20, 
// //     borderRadius: 7},
    
// //     fullScreen: {
// //       position: "absolute",
// //       // paddingLeft: "10%",
  
// //       // paddingBottom: "10%",
// //       // width: "10%",
// //       // height: "10%",
// //       opacity: 0.8, // Adjust opacity here
// //     },
// //     image: {
// //      flex: 1,
// //     //  justifyContent: "center",
// //     //  alignContent: "center",
// //      width: "105%",
// //      height: "110%",
// //      opacity: 0.9,
// //      paddingTop: '9%'
// //     },
  
// // });

// // export default HelpButton;
// import React, { useState, useEffect } from "react";
// import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { FIREBASE_AUTH, FIRESTORE_DB } from '@/FirebaseConfig'; // Verify this import path
// import { doc, getDoc } from 'firebase/firestore';
// import * as Linking from 'expo-linking'; // Correct import for Linking

// const { width: viewportWidth } = Dimensions.get("window");

// const HelpButton: React.FC = () => {
//   const [userInfo, setUserInfo] = useState<any | undefined>(null);

//   useEffect(() => {
//     const getCurrentUserData = async () => {
//       const user = FIREBASE_AUTH.currentUser;
//       if (user) {
//         const userRef = doc(FIRESTORE_DB, "users", user.uid);
//         try {
//           const userSnap = await getDoc(userRef);
//           if (userSnap.exists()) {
//             console.log("User data:", userSnap.data());
//             setUserInfo(userSnap.data());
//           } else {
//             console.log("No such document!");
//           }
//         } catch (error) {
//           console.error("Failed to fetch user data:", error);
//         }
//       }
//     };

//     getCurrentUserData();
//   }, []);

//   const handleCallSupport = () => {
//     if (!userInfo?.emergencyNumber) {
//       alert("No emergency number set for the user.");
//       return;
//     }

//     const link = `tel:${userInfo.emergencyNumber}`;
//     Linking.openURL(link).catch(err => {
//       console.error('An error occurred while trying to make the call:', err);
//       alert('Failed to make the call');
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground resizeMode="cover" style={styles.image}>
//         <Text style={styles.Welcome}>Hello {userInfo?.name}</Text>
//       </ImageBackground>
//       <TouchableOpacity onPress={handleCallSupport} style={styles.callButton}>
//         <Text style={styles.EmergencyButton}>Call Emergency</Text>
//         <MaterialCommunityIcons name="hospital-box-outline" style={styles.iconStyle} size={50} color="#f3b718" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 15,
//   },
//   callButton: {
//     backgroundColor: '#59ACCE',
//     padding: 10,
//     borderRadius: 25,
//     flexDirection: "row",
//     alignItems: "center",
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   EmergencyButton: {
//     color: '#2E3E5E',
//     fontSize: 18,
//     marginRight: 10,
//   },
//   iconStyle: {
//     marginRight: 5,
//   },
//   Welcome: {
//     color: '#2E3E5E', 
//     fontSize: 24, 
//     padding: 20,
//   },
//   image: {
//     width: viewportWidth,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     opacity: 0.9,
//   },
// });

// export default HelpButton;

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FIREBASE_AUTH, FIRESTORE_DB } from '@/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import * as Linking from 'expo-linking';

const { width: viewportWidth } = Dimensions.get("window");

const HelpButton = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getCurrentUserData = async () => {
      const user = FIREBASE_AUTH.currentUser;
      if (user) {
        const userRef = doc(FIRESTORE_DB, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          console.log("User data:", userSnap.data());
          setUserInfo(userSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };
    getCurrentUserData();
  }, []);


  const image = require("../../../assets/images/garden loft-logo-outline-yellow.png")

  const handleCallSupport = () => {
    if (!userInfo?.emergencyNumber) {
      alert("No emergency number set for the user.");
      return;
    }

    const link = `tel:${userInfo.emergencyNumber}`;
    Linking.openURL(link).catch(err => {
      console.error('An error occurred while trying to make the call:', err);
      alert('Failed to make the call');
    });
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../../../assets/images/garden-loft-logo2.png')} style={{ width: 155, height: 72 }} />
      <TouchableOpacity onPress={handleCallSupport} style={{ backgroundColor: '#59ACCE', padding: 5, paddingLeft: 10, borderRadius: 7, flexDirection: "row", }}> */}
      {/* <Image source={require('../../../assets/images/garden-loft-logo-outline.png')} style={{ width: 155, height: 72 }} /> */}
      <View style={styles.container2}>
      <ImageBackground source={image}  resizeMode={"contain"} style={styles.image}>
      {/* <BackgroundImage /> */}
      <Text style={styles.Welcome}>Hello {userInfo?.name}</Text>
      </ImageBackground>
      </View>
      {/* <TouchableOpacity onPress={handleCallSupport} style={{ backgroundColor: '#59ACCE', padding: 5, paddingLeft: 10, borderRadius: 15, flexDirection: "row", }}>
       
        <Text style={{ color: '#2E3E5E',  fontSize: 28, padding: 9, }}>Call Emergency</Text>
        <MaterialCommunityIcons name="hospital-box-outline" marginRight={7} paddingTop= {3} size={50} color="#f3b718" />
      </TouchableOpacity> */}
       <View style={styles.containerButton}>
      <TouchableOpacity onPress={handleCallSupport} style={{ backgroundColor: '#59ACCE', padding: 4, paddingLeft: 10, borderRadius: 15, flexDirection: "row", alignItems: "center",   shadowColor: '#000',
     shadowOffset: {
       width: 8,
       height: 7,
     },
     shadowOpacity: 0.25,
     shadowRadius: 6, elevation: 8, }}>
      <Text style={styles.EmergencyButton}>Call Emergency</Text>
      <MaterialCommunityIcons name="hospital-box-outline" style={{ marginRight: 7, paddingTop: 3 }} size={50} color="#f3b718" />
    </TouchableOpacity>
    </View>
      {/* <TouchableOpacity style={styles.logOut} onPress={() => FIREBASE_AUTH.signOut() }><Text style={styles.logOut}>Log Out</Text></TouchableOpacity> */}
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: viewportWidth * 0.95,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
    paddingTop: 12,
  },

  EmergencyButton: {
    color: '#2E3E5E',
     fontSize: 28, 
     padding: 9,
     shadowColor: '#000',
     shadowOffset: {
       width: 12,
       height: 7,
     },
     shadowOpacity: 0.8,
     shadowRadius: 26,
     elevation: 10,

  },
  
  Welcome: {
    // backgroundColor: '#59ACCE', 
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: "center",
    // color: '#2E3E5E', 
    color: "rgb(45, 62, 95)",
    fontSize: 30, 
    paddingTop: '3%', 
    marginStart: 25, 
    width: "100%",
    // backgroundColor: "red",
    borderRadius: 7},
    
    fullScreen: {
      position: "absolute",
      // paddingLeft: "10%",
  
      // paddingBottom: "10%",
      // width: "10%",
      // height: "10%",
      opacity: 0.8, // Adjust opacity here
    },
    image: {
     flex: 1,
     justifyContent: "center",
     alignContent: "center",
     width: "105%",

     height: "100%",

     opacity: 0.95,
    //  padding: '3%',
    // backgroundColor: "grey" ,
    shadowColor: 'goldenRod',
    shadowOffset: {

      width: 5,
      height: 1,

    },
    shadowOpacity: 0.4,
    shadowRadius: 26,
    elevation: 10,

    },

    // containerButton: {
    //  ,
    // }
  
});

export default HelpButton;

