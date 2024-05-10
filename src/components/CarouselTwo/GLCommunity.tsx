// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// const GLCommunity = () => {
//   const [contacts, setContacts] = useState([
//     { id: 1, name: 'Elizabeth', phoneNumber: '1234567890', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Elizabeth?' },
//     { id: 2, name: 'Shari', phoneNumber: '0987654321', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Shari?' },
//     { id: 3, name: 'Pat', phoneNumber: '9876543210', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Pat?' },
//     { id: 4, name: 'John', phoneNumber: '0123456789', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add John?' },
//     { id: 5, name: 'Matthew', phoneNumber: '6789012345', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Matthew?' },
//   ]);

//   const scrollViewRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSnapToItem = (index) => {
//     setActiveIndex(index);
//   };

//   const pickImage = async (contactId) => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       const newContacts = contacts.map(contact => {
//         if (contact.id === contactId) {
//           return { ...contact, imageUrl: result.uri };
//         }
//         return contact;
//       });
//       setContacts(newContacts);
//     }
//   };

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       key={item.id}
//       style={[styles.cardContainer, {
//         backgroundColor: index === activeIndex ? "#f3b718" : "#f09030",
//       }]}
//       onPress={() => pickImage(item.id)}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.image} />
//       <Text style={styles.cardText}>{item.name}</Text>
//       <Text style={styles.cardText}>{item.phoneNumber}</Text>
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
//         onSnapToItem={handleSnapToItem}
//       />

//       <Text style={styles.prompt}>{contacts[activeIndex].prompt}</Text>

//       <TouchableOpacity style={styles.arrowLeft} onPress={() => scrollViewRef.current?.snapToPrev()}>
//         <FontAwesome name="angle-left" size={124} color="rgb(45, 62, 95)" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.arrowRight} onPress={() => scrollViewRef.current?.snapToNext()}>
//         <FontAwesome name="angle-right" size={124} color="rgb(45, 62, 95)" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     height: 290,
//     alignItems: 'center',
//   },
//   cardContainer: {
//     width: viewportWidth * 0.3,
//     height: viewportHeight * 0.3,
//     backgroundColor: '#f09030',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//     flexDirection: 'column',
//     shadowOffset: {
//       width: 6,
//       height: 2,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     elevation: 10,
//   },
//   cardText: {
//     fontSize: 24,
//     color: '#393939',
//     fontWeight: '700',
//     marginVertical: 5,
//   },
//   prompt: {
//     fontSize: 18,
//     color: '#393939',
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   arrowLeft: {
//     position: 'absolute',
//     top: '50%',
//     left: 20,
//     transform: [{ translateY: -50 }],
//   },
//   arrowRight: {
//     position: 'absolute',
//     top: '50%',
//     right: 20,
//     transform: [{ translateY: -50 }],
//   },
//   image: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     marginBottom: 10,
//   },
// });

// export default GLCommunity;


import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from "../../../FirebaseConfig";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const GLCommunity = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Elizabeth', phoneNumber: '1234567890', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Elizabeth?' },
    { id: 2, name: 'Shari', phoneNumber: '0987654321', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Shari?' },
    { id: 3, name: 'Pat', phoneNumber: '9876543210', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Pat?' },
    { id: 4, name: 'John', phoneNumber: '0123456789', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add John?' },
    { id: 5, name: 'Matthew', phoneNumber: '6789012345', imageUrl: 'https://placekitten.com/200/200', prompt: 'Add Matthew?' },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleAddContact = async (contact) => {
    try {
      await addDoc(collection(FIRESTORE_DB, "contacts"), {
        name: contact.name,
        phoneNumber: contact.phoneNumber,
        imageUrl: contact.imageUrl
      });
      console.log('Contact added successfully');
    } catch (error) {
      console.error("Error adding contact: ", error);
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
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
      <MaterialCommunityIcons name="account-plus" size={24} color="white" style={styles.iconStyle} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    height: 290,
  },
  cardContainer: {
    width: viewportWidth * 0.3,
    height: viewportHeight * 0.3,
    backgroundColor: '#f09030',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cardText: {
    fontSize: 36,
    color: '#393939',
    fontWeight: '700',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  iconStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
});

export default GLCommunity;



