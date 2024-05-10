


// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
// import { collection, addDoc } from 'firebase/firestore';
// import { FIRESTORE_DB } from "../../../FirebaseConfig";

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// const GLCommunity = () => {
//   const [contacts, setContacts] = useState([
//     { id: 1, name: 'Elizabeth', phoneNumber: '1234567890', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Elizabeth?' },
//     { id: 2, name: 'Shari', phoneNumber: '0987654321', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Shari?' },
//     { id: 3, name: 'Pat', phoneNumber: '9876543210', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Pat?' },
//     { id: 4, name: 'John', phoneNumber: '0123456789', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add John?' },
//     { id: 5, name: 'Matthew', phoneNumber: '6789012345', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Matthew?' },
//   ]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollViewRef = useRef(null);

//   const handleAddContact = async (contact) => {
//     try {
//       await addDoc(collection(FIRESTORE_DB, "contacts"), {
//         name: contact.name,
//         phoneNumber: contact.phoneNumber,
//         imageUrl: contact.imageUrl
//       });
//       console.log('Contact added successfully');
//     } catch (error) {
//       console.error("Error adding contact: ", error);
//     }
//   };

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       key={item.id}
//       style={[styles.cardContainer, {
//         backgroundColor: index === activeIndex ? "#f3b718" : "#f09030",
//       }]}
//       onPress={() => handleAddContact(item)}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.image} />
//       <Text style={styles.cardText}>{item.name}</Text>
//       <MaterialCommunityIcons name="account-plus" size={24} color="white" style={styles.iconStyle} />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         layout={'default'}
//         data={contacts}
//         renderItem={renderItem}
//         sliderWidth={Math.round(viewportWidth * 0.90)}
//         itemWidth={Math.round(viewportWidth * 0.3)}
//         loop={true}
//         useScrollView={true}
//         activeSlideAlignment="center"
//         ref={scrollViewRef}
//         inactiveSlideScale={0.8}
//         inactiveSlideOpacity={1}
//         onSnapToItem={(index) => setActiveIndex(index)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     alignItems: 'center',
//     height: 290,
//   },
//   cardContainer: {
//     width: viewportWidth * 0.3,
//     height: viewportHeight * 0.3,
//     backgroundColor: '#f09030',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   cardText: {
//     fontSize: 36,
//     color: '#393939',
//     fontWeight: '700',
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginBottom: 10,
//   },
//   iconStyle: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10
//   },
// });

// export default GLCommunity;



// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { FontAwesome } from '@expo/vector-icons'; // Assuming FontAwesome is installed
// import { collection, addDoc } from 'firebase/firestore';
// import { FIRESTORE_DB } from "../../../FirebaseConfig";
// import cors from "cors";

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
// // const image= require(../../../assets/images/garden loft-logo-outline-yellow.png);
// const image = require('../../../assets/images/pexels-anna-nekrashevich-8993561.jpg');
// const GLCommunity = () => {
//   const [contacts, setContacts] = useState([
//     { id: 1, name: 'Elizabeth', phoneNumber: '1234567890', imageUrl: image},
//     { id: 2, name: 'Shari', phoneNumber: '0987654321',imageUrl: image, prompt: 'Add Shari?' },
//     { id: 3, name: 'Pat', phoneNumber: '9876543210', imageUrl: image, prompt: 'Add Pat?' },
//     { id: 4, name: 'John', phoneNumber: '0123456789', imageUrl: image, prompt: 'Add John?' },
//     { id: 5, name: 'Matthew', phoneNumber: '6789012345', imageUrl: image, prompt: 'Add Matthew?' },
//   ]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollViewRef = useRef(null);

//   const handleAddContact = async (contact) => {
//     try {
//       await addDoc(collection(FIRESTORE_DB, "contacts"), {
//         name: contact.name,
//         phoneNumber: contact.phoneNumber,
//         imageUrl: contact.imageUrl
//       });
//       console.log('Contact added successfully');
//     } catch (error) {
//       console.error("Error adding contact: ", error);
//     }
//   };

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       key={item.id}
//       style={[styles.cardContainer, {
//         backgroundColor: index === activeIndex ? "#f3b718" : "#f09030",
//       }]}
//       onPress={() => handleAddContact(item)}
//     >
//        <Image source={item.imageUrl} style={styles.image}  onError={(e) => console.error("Failed to load image", e.nativeEvent.error)} />
//        {/* <Image
//       source={{ uri: item.imageUrl }}
//       style={styles.image}
//       onError={(e) => console.error("Failed to load image", e.nativeEvent.error)} // Added error handling
//     /> */}
//       <Text style={styles.cardText}>{item.name}</Text>
//       <FontAwesome name="plus-circle" size={24} color="white" style={styles.iconStyle} />
//     </TouchableOpacity>
//   );

//   const scrollToNext = () => {
//     if (scrollViewRef.current) {
//       const nextIndex = activeIndex + 1 < contacts.length ? activeIndex + 1 : 0;
//       scrollViewRef.current.snapToItem(nextIndex);
//     }
//   };

//   const scrollToPrevious = () => {
//     if (scrollViewRef.current) {
//       const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : contacts.length - 1;
//       scrollViewRef.current.snapToItem(prevIndex);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Carousel
//         layout={'default'}
//         data={contacts}
//         renderItem={renderItem}
//         sliderWidth={Math.round(viewportWidth * 0.90)}
//         itemWidth={Math.round(viewportWidth * 0.3)}
//         loop={true}
//         useScrollView={true}
//         activeSlideAlignment="center"
//         ref={scrollViewRef}
//         inactiveSlideScale={0.8}
//         inactiveSlideOpacity={1}
//         onSnapToItem={(index) => setActiveIndex(index)}
//       />
//       <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
//         <FontAwesome name="angle-left" size={124} color="rgb(45, 62, 95)" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
//         <FontAwesome name="angle-right" size={124} color="rgb(45, 62, 95)" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     alignItems: 'center',
//     height: 290,
//   },
//   cardContainer: {
//     width: viewportWidth * 0.3,
//     height: viewportHeight * 0.3,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//     marginHorizontal: 5,
//   },
//   cardText: {
//     fontSize: 50,
//     color: 'black',
//     fontWeight: '700',
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginBottom: 10,
//   },
//   iconStyle: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10
//   },
//   arrowLeft: {
//     position: "absolute",
//     top: "40%",
//     left: -17,
//     transform: [{ translateY: -50 }],
//   },
//   arrowRight: {
//     position: "absolute",
//     top: "40%",
//     right: -25,
//     transform: [{ translateY: -50 }],
//   },
// });

// export default GLCommunity;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Alert, PermissionsAndroid, Platform } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from "../../../FirebaseConfig";
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const defaultImage = require('../../../assets/images/pexels-anna-nekrashevich-8993561.jpg');

// const requestStoragePermission = async () => {
//   if (Platform.OS === 'android') {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       {
//         title: "App Storage Permission",
//         message: "App needs access to your storage to download Photos.",
//       }
//     );
//     return granted === PermissionsAndroid.RESULTS.GRANTED;
//   } else {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//     return status === 'granted';
//   }
// };

const GLCommunity = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Elizabeth', phoneNumber: '1234567890', imageUrl: defaultImage },
    { id: 2, name: 'Shari', phoneNumber: '0987654321', imageUrl: defaultImage },
    { id: 3, name: 'Pat', phoneNumber: '9876543210', imageUrl: defaultImage },
    { id: 4, name: 'John', phoneNumber: '0123456789', imageUrl: defaultImage },
    { id: 5, name: 'Matthew', phoneNumber: '6789012345', imageUrl: defaultImage },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    checkContactsInDatabase();
  }, []);

  const checkContactsInDatabase = async () => {
    const contactsQuery = query(collection(FIRESTORE_DB, "contacts"));
    const querySnapshot = await getDocs(contactsQuery);
    const dbContacts = querySnapshot.docs.map(doc => doc.data().name);

    const updatedContacts = contacts.map(contact => ({
      ...contact,
      isAdded: dbContacts.includes(contact.name),
    }));

    setContacts(updatedContacts);
  };

  const handleAddContact = async (contact) => {
    if (contact.isAdded) {
      Alert.alert("Contact already added.");
      return;
    }

    try {
      await addDoc(collection(FIRESTORE_DB, "contacts"), {
        name: contact.name,
        phoneNumber: contact.phoneNumber,
        imageUrl: contact.imageUrl
      });
      Alert.alert('Contact added successfully');
      checkContactsInDatabase();
    } catch (error) {
      console.error("Error adding contact: ", error);
      Alert.alert("Error adding contact.");
    }
  };
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

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.cardContainer, {
        backgroundColor: index === activeIndex ? "#f3b718" : "#f09030",
      }]}
      onPress={() => handleAddContact(item)}
    >
      <Image source={defaultImage} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
      <FontAwesome
        name={item.isAdded ? "check-circle" : "plus-circle"}
        size={24}
        color={item.isAdded ? "green" : "white"}
        style={styles.iconStyle}
      />
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
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
        <FontAwesome name="angle-left" size={150} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
        <FontAwesome name="angle-right" size={150} color="black" />
      </TouchableOpacity>
    </View>
  );
};




//   return (
//     <View style={styles.container}>
//       <Carousel
//         layout={'default'}
//         data={contacts}
//         renderItem={renderItem}
//         sliderWidth={Math.round(viewportWidth * 0.90)}
//         itemWidth={Math.round(viewportWidth * 0.3)}
//         loop={true}
//         useScrollView={true}
//         activeSlideAlignment="center"
//         ref={scrollViewRef}
//         inactiveSlideScale={0.8}
//         inactiveSlideOpacity={1}
//         onSnapToItem={(index) => setActiveIndex(index)}
//       />
//       <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
//         <FontAwesome name="angle-left" size={150} color="black" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
//         <FontAwesome name="angle-right" size={150} color="black" />
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
      container: {
        position: 'relative',
        alignItems: 'center',
        height: 290,
      },
      cardContainer: {
        width: viewportWidth * 0.3,
        height: viewportHeight * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: 5,
      },
      cardText: {
        fontSize: 50,
        color: 'black',
        fontWeight: '700',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },
      iconStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
      },
      arrowLeft: {
        position: "absolute",
        top: "40%",
        left: -17,
        transform: [{ translateY: -50 }],
      },
      arrowRight: {
        position: "absolute",
        top: "40%",
        right: -25,
        transform: [{ translateY: -50 }],
      },
    });

export default GLCommunity;



// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { FontAwesome } from '@expo/vector-icons';
// import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
// import { FIRESTORE_DB } from "../../../FirebaseConfig";
// import { launchImageLibrary } from 'react-native-image-picker';
// import storage from '@react-native-firebase/storage';
// import { PermissionsAndroid, Platform } from 'react-native';


// const requestStoragePermission = async () => {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: "App Storage Permission",
//           message: "App needs access to your storage to download Photos.",
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   } else {
//     return true;
//   }
// };




// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
// const image =  require('../../../assets/images/pexels-anna-nekrashevich-8993561.jpg');
// const GLCommunity = () => {
//   const [contacts, setContacts] = useState([
//     { id: 1, name: 'Elizabeth', phoneNumber: '1234567890', imageUrl:image, prompt: 'Add Elizabeth?' },
//     { id: 2, name: 'Shari', phoneNumber: '0987654321',imageUrl: image, prompt: 'Add Shari?' },
//         { id: 3, name: 'Pat', phoneNumber: '9876543210', imageUrl: image, prompt: 'Add Pat?' },
//         { id: 4, name: 'John', phoneNumber: '0123456789', imageUrl: image, prompt: 'Add John?' },
//         { id: 5, name: 'Matthew', phoneNumber: '6789012345', imageUrl: image, prompt: 'Add Matthew?' },
//   ]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollViewRef = useRef(null);

//   useEffect(() => {
//     checkContactsInDatabase();
//   }, []);

//   const checkContactsInDatabase = async () => {
//     const contactsQuery = query(collection(FIRESTORE_DB, "contacts"));
//     const querySnapshot = await getDocs(contactsQuery);
//     const dbContacts = querySnapshot.docs.map(doc => doc.data().name);

//     const updatedContacts = contacts.map(contact => ({
//       ...contact,
//       isAdded: dbContacts.includes(contact.name)
//     }));

//     setContacts(updatedContacts);
//   };

//   const handleAddContact = async (contact) => {
//     if (contact.isAdded) {
//       Alert.alert("Contact already added.");
//       return;
//     }

//     try {
//       await addDoc(collection(FIRESTORE_DB, "contacts"), contact);
//       Alert.alert('Contact added successfully');
//       checkContactsInDatabase();
//     } catch (error) {
//       console.error("Error adding contact: ", error);
//     }
//   };

//   const handleEditImage = async (contact) => {
//     const hasPermission = await requestStoragePermission();
//     if (!hasPermission) {
//       return;
//     }
  
//     const result = await launchImageLibrary({ mediaType: 'photo' });
  
 
//     if (result.didCancel) {
//       console.log('User cancelled image picker');
//     } else {
//       const uploadUri = result.assets[0].uri;
//       const filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
//       const storageRef = storage().ref(`contacts/${filename}`);
//       const uploadTask = await storageRef.putFile(uploadUri);

//       const downloadUrl = await uploadTask.ref.getDownloadURL();
//       handleAddContact({ ...contact, imageUrl: downloadUrl });
//     }
//   };

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       key={item.id}
//       style={[styles.cardContainer, {
//         backgroundColor: index === activeIndex ? "#f3b718" : "#f09030",
//       }]}
//       onPress={() => handleEditImage(item)}
//     >
//       <Image source={ image} style={styles.image} />
//       <Text style={styles.cardText}>{item.name}</Text>
//       <FontAwesome
//         name={item.isAdded ? "check-circle" : "plus-circle"}
//         size={24}
//         color={item.isAdded ? "green" : "white"}
//         style={styles.iconStyle}
//       />
//     </TouchableOpacity>
//   );

//   const scrollToNext = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.snapToNext();
//     }
//   };

//   const scrollToPrevious = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.snapToPrev();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Carousel
//         ref={scrollViewRef}
//         data={contacts}
//         renderItem={renderItem}
//         sliderWidth={viewportWidth *0.9}
//         itemWidth={viewportWidth * 0.7}
//         onSnapToItem={(index) => setActiveIndex(index)}
//       /> */}
//          <Carousel
//             layout={'default'}
//             data={contacts}
//             renderItem={renderItem}
//             sliderWidth={Math.round(viewportWidth * 0.90)}
//             itemWidth={Math.round(viewportWidth * 0.3)}
//             loop={true}
//             useScrollView={true}
//             activeSlideAlignment="center"
//             ref={scrollViewRef}
//             inactiveSlideScale={0.8}
//             inactiveSlideOpacity={1}
//             onSnapToItem={(index) => setActiveIndex(index)}
//           />
//       <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
//         <FontAwesome name="angle-left" size={150} color="black" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
//         <FontAwesome name="angle-right" size={150} color="black" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       position: 'relative',
//       alignItems: 'center',
//       height: 290,
//     },
//     cardContainer: {
//       width: viewportWidth * 0.3,
//       height: viewportHeight * 0.3,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 30,
//       marginHorizontal: 5,
//     },
//     cardText: {
//       fontSize: 50,
//       color: 'black',
//       fontWeight: '700',
//     },
//     image: {
//       width: 50,
//       height: 50,
//       borderRadius: 25,
//       marginBottom: 10,
//     },
//     iconStyle: {
//       position: 'absolute',
//       bottom: 10,
//       right: 10
//     },
//     arrowLeft: {
//       position: "absolute",
//       top: "40%",
//       left: -17,
//       transform: [{ translateY: -50 }],
//     },
//     arrowRight: {
//       position: "absolute",
//       top: "40%",
//       right: -25,
//       transform: [{ translateY: -50 }],
//     },
//   });
  

// export default GLCommunity;
