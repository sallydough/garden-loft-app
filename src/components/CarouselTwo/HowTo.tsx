import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, ScrollView, ActivityIndicator } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from "../../../FirebaseConfig";
import YoutubePlayer from 'react-native-youtube-iframe';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const HowTo = () => {
  const [videos, setVideos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const scrollViewRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const docSnapshot = await getDocs(collection(FIRESTORE_DB, "HowToV"));
        const videosData = [];
        docSnapshot.forEach((doc) => {
          const data = doc.data();
          videosData.push({
            id: doc.id,
            name: data.name, // Assuming 'name' is a direct field within the document
            videoId: data.videoId // Assuming 'videoId' is also a direct field within the document
          });
        });
        setVideos(videosData);
        if (videosData.length === 0) {
          setError('No videos found.');
        }
      } catch (error) {
        console.error("Error fetching videos: ", error.message);
        setError('Failed to fetch videos. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const openVideoModal = (videoId) => {
    setSelectedVideoId(videoId);
    setIsVideoModalVisible(true);
  };

  const onPlayerStateChange = (event) => {
    if (event === 'ended' || event === 'error') {
      setIsVideoModalVisible(false);
      setSelectedVideoId('');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.cardContainer, {
        backgroundColor: item.id === videos[activeIndex].id ? "#f3b718" : "#f09030",
      }]}
      onPress={() => openVideoModal(item.videoId)}
    >
      <MaterialCommunityIcons name="television-play" size={94} color="white" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="orange" style={styles.loading} />;
  }

  if (error) {
    return <View style={styles.container}><Text style={styles.errorText}>{error}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={videos}
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
        <TouchableOpacity style={styles.arrowLeft} onPress={() => scrollViewRef.current?.snapToPrev()}>
            <FontAwesome name="angle-left" size={100} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowRight} onPress={() => scrollViewRef.current?.snapToNext()}>
            <FontAwesome name="angle-right" size={100} color="black" />
          </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVideoModalVisible}
        onRequestClose={() => setIsVideoModalVisible(false)}
      >
        <View style={styles.modalView}>
          <YoutubePlayer
            height={420}
            width={viewportWidth * 0.6}
            play={true}
            videoId={selectedVideoId}
            onChangeState={onPlayerStateChange}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsVideoModalVisible(false)}
          >
            <FontAwesome name="close" size={24} color="black" />
          </TouchableOpacity>
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
  },
  cardText: {
    fontSize: 36,
    color: '#393939',
    fontWeight: '700',
  },
  seasonButton: {
    backgroundColor: '#f09030', 
    padding: 10,                
    marginVertical: 5,          
    alignItems: 'center',       
    borderRadius: 100,           
  },
  seasonButtonText: {
    color: 'white',             
    fontSize: 18,               
    fontWeight: '500',          
  },
  prompt: {
    fontSize: 30,
    color: '#393939',
    fontWeight: '700',
    marginTop: 15,
  },
  loading: {
    flex: 1,
    alignItems: "flex-start",
    // marginTop: 30,
    // color: "#746E6E",
    fontSize: 44,
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: -17,
    zIndex: 10,
    transform: [{ translateY: -50 }],
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: -25,
    zIndex: 10,
    transform: [{ translateY: -50 }],
    
  },
modalView: {
        margin: 5,
        height: viewportHeight * 0.7,
        marginTop: 50,  // Reduced top margin for better space utilization
        backgroundColor: "white",
        borderRadius: 20,
        padding: 1,
        paddingTop: 90,  // Reduced padding at the top to bring content higher
        alignItems: 'center',
        justifyContent: 'center',  // Added to center content vertically
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        width: '60%',  // Keeping width to 90% of the screen width
         // Keeping height to 80% of the screen height
        alignSelf: 'center',
      },
      
  closeButton: {
    position: 'absolute',
    left: 600,
    top: 30,
    backgroundColor: "lightblue",
    padding: 13,
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
      },
  modalTitle: {
    fontSize: 24,
    marginBottom: 10,
    },
  videoButtonText: {
    fontSize: 18,
    },
  selectVideoPrompt: {
    fontSize: 16,
    color: 'grey',
    marginTop: 20,
   },

  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});

export default HowTo;