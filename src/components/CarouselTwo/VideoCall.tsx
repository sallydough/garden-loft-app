import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, ScrollView, Image, Alert, PermissionsAndroid, Platform  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FIRESTORE_DB } from "../../../FirebaseConfig";
import { doc, getDoc } from 'firebase/firestore';
// import YoutubePlayer from 'react-native-youtube-iframe';
// import VideoSDK from './VideoSDK'


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


const defaultImage = {
  elizabeth: require('../../../assets/images/pexels-anna-nekrashevich-8993561.jpg'),
  shari: require('../../../assets/images/portrait2.jpg'),
  pat: require('../../../assets/images/portrait4.jpg'),
  john: require('../../../assets/images/portrait3.jpg'),
  matthew: require('../../../assets/images/portrait5.jpg'),
};


const VideoCallCarousel = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Carina', meetingId: '1o31-vt61-zxdw', imageUrl: defaultImage.elizabeth },
    
    { id: 2, name: 'Sally', meetingId: '2o9t-84vd-l56t', imageUrl: defaultImage.shari },
    { id: 3, name: 'Meseret', meetingId: '35qc-oixz-zvdd', imageUrl: defaultImage.pat },
    { id: 4, name: 'Prapti', meetingId: '3s2v-9h43-d1ap', imageUrl: defaultImage.john },
    { id: 5, name: 'Ruth', meetingId: '42ck-ivw3-71ya', imageUrl: defaultImage.matthew },
  ]);

  const [youtubeId, setYoutubeId] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchAndPlayVideo = async (docId) => {
    const docRef = doc(FIRESTORE_DB, "entertainment", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setYoutubeId(docSnap.data().youtubeId); // Assuming the document contains a field `youtubeId`
      setIsModalVisible(true); // Open the modal to play video
    } else {
      console.log("No such document!");
    }
  };

  const handleSnapToItem = (index: number) => {
        setActiveIndex(index);
      };

      const scrollViewRef = useRef<ScrollView>(null);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={item.id}
     
      style={[styles.cardContainer,{
                backgroundColor: index === activeIndex + 3 ? "#f3b718" : "#f09030",
              },]}
      onPress={() => fetchAndPlayVideo(item.id)}
    >
      {/* <MaterialCommunityIcons name="emoticon" size={94} color="white" /> */}
      
      <Image source={item.imageUrl} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <Carousel
        layout={'default'}
        data={contacts}
        renderItem={renderItem}
        sliderWidth={viewportWidth * 0.9}
        itemWidth={viewportWidth * 0.3}
        onSnapToItem={(index) => setActiveIndex(index)}
      /> */}
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
        onSnapToItem={(index) => handleSnapToItem(index)} // Handle snapping logic
      />
      <Text style={styles.prompt}>{contacts[activeIndex]?.prompt}</Text>

      <TouchableOpacity style={styles.arrowLeft} onPress={() => scrollViewRef.current?.snapToPrev()}>
        <FontAwesome name="angle-left" size={124} color="rgb(45, 62, 95)" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowRight} onPress={() => scrollViewRef.current?.snapToNext()}>
        <FontAwesome name="angle-right" size={124} color="rgb(45, 62, 95)" />
      </TouchableOpacity>

      {/* Modal for YouTube Player */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalVisible(!isModalVisible)}
          >
            <FontAwesome name="arrow-left" size={24} color="black" />
            <Text style={styles.closeText}>Back To Garden Loft App</Text>
          </TouchableOpacity>
          {/* {youtubeId && (
            <YoutubePlayer
              height={viewportHeight * 0.8}
              width={viewportWidth * 0.8}
              videoId={youtubeId}
              play={true}
          
            />
          )} */}
        {/* <VideoSDK /> */}
        </View>
      </Modal>
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
    shadowOffset: {
      width: 6,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,

  },
  cardText: {
    fontSize: 36,
    color: '#393939',
    fontWeight: '700',
   
  },
  prompt: {
    fontSize: 30,
    color: '#393939',
    fontWeight: '700',
    marginTop: 15,
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
      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },
  modalView: {
    margin: 20,
    height: viewportHeight * 0.9,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 3,
    paddingTop: 90,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    left: 400,
    top: 30,
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 5,
  },
  closeText: {
    fontSize: 24,
    position: 'absolute',
    left: 40,
    top: 0,
    width: 320, 
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 70,

  }
});

export default VideoCallCarousel;
