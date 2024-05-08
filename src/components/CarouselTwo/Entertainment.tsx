// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import Carousel from 'react-native-snap-carousel';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { FIRESTORE_DB } from "@/FirebaseConfig";
// import { doc, getDoc } from 'firebase/firestore';
// import YoutubePlayer from 'react-native-youtube-iframe';

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');



// const Entertainment = () => {
//   const [contacts, setContacts] = useState([
//     { id: 'goldenGirls', name: 'Golden Girls', prompt: 'Watch Golden Girls?' },
//     { id: 'jeopardy', name: 'Jeopardy', prompt: 'Watch Jeopardy?' },
//     { id: 'Wheel Of Fortune', name: 'Jeopardy', prompt: 'Watch Wheel Of Fortune?' },
//     { id: 'Jamie Oliver', name: 'Jeopardy', prompt: 'Watch Jamie Oliver Cooking?' },
//     // Add more shows with their unique Firestore document IDs
//   ]);

//   const [youtubeId, setYoutubeId] = useState('');
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const fetchAndPlayVideo = async (docId) => {
//     const docRef = doc(FIRESTORE_DB, "entertainment", docId);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());
//       setYoutubeId(docSnap.data().youtubeId); // Assuming the document contains a field `youtubeId`
//       setIsModalVisible(true); // Open the modal to play video
//     } else {
//       console.log("No such document!");
//     }
//   };

//   const handleSnapToItem = (index: number) => {
//         setActiveIndex(index);
//       };

//       const scrollViewRef = useRef<ScrollView>(null);

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       key={item.id}
     
//       style={[styles.cardContainer,{
//                 backgroundColor: index === activeIndex + 3 ? "#f3b718" : "#f09030",
//               },]}
//       onPress={() => fetchAndPlayVideo(item.id)}
//     >
//       <MaterialCommunityIcons name="television-play" size={94} color="white" />
//       <Text style={styles.cardText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* <Carousel
//         layout={'default'}
//         data={contacts}
//         renderItem={renderItem}
//         sliderWidth={viewportWidth * 0.9}
//         itemWidth={viewportWidth * 0.3}
//         onSnapToItem={(index) => setActiveIndex(index)}
//       /> */}
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
//         onSnapToItem={(index) => handleSnapToItem(index)} // Handle snapping logic
//       />
//       <Text style={styles.prompt}>{contacts[activeIndex]?.prompt}</Text>

//       <TouchableOpacity style={styles.arrowLeft} onPress={() => scrollViewRef.current?.snapToPrev()}>
//         <FontAwesome name="angle-left" size={124} color="rgb(45, 62, 95)" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.arrowRight} onPress={() => scrollViewRef.current?.snapToNext()}>
//         <FontAwesome name="angle-right" size={124} color="rgb(45, 62, 95)" />
//       </TouchableOpacity>

//       {/* Modal for YouTube Player */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isModalVisible}
//         onRequestClose={() => {
//           setIsModalVisible(!isModalVisible);
//         }}
//       >
//         <View style={styles.modalView}>
//         <TouchableOpacity
//             style={styles.closeButton}
//             onPress={() => setIsModalVisible(!isModalVisible)}
//           >
//             <FontAwesome name="arrow-left" size={24} color="black" />
//             <Text style={styles.closeText}>Back To Garden Loft App</Text>
//           </TouchableOpacity>
//           {youtubeId && (
//             <YoutubePlayer
//               height={viewportHeight}
//               width={viewportWidth}
//               videoId={youtubeId}
//               play={true}
//                // prevent aspect ratio auto sizing
//               // webViewProps={{
//               //   injectedJavaScript: `
//               //     var element = document.getElementsByClassName('container')[0];
//               //     element.style.position = 'unset';
//               //     element.style.paddingBottom = 'unset';
//               //     true;
//               //   `,
//               // }}
//             />
//           )}
//         </View>
//       </Modal>
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
//     shadowOffset: {
//       width: 6,
//       height: 2,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     elevation: 10,

//   },
//   cardText: {
//     fontSize: 36,
//     color: '#393939',
//     fontWeight: '700',
   
//   },
//   prompt: {
//     fontSize: 30,
//     color: '#393939',
//     fontWeight: '700',
//     marginTop: 15,
//   },
//   arrowLeft: {
//         position: 'absolute',
//         top: '40%',
//         left: -17,
//         transform: [{ translateY: -50 }],
//       },
//       arrowRight: {
//         position: 'absolute',
//         top: '40%',
//         right: -25,
//         transform: [{ translateY: -50 }],
//       },
//   modalView: {
//     margin: 10,
//     marginTop: 30,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 3,
//     paddingTop: 90,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   closeButton: {
//     position: 'absolute',
//     left: 400,
//     top: 30,
//     backgroundColor: "lightblue",
//     padding: 15,
//     borderRadius: 5,
//   },
//   closeText: {
//     fontSize: 24,
//     position: 'absolute',
//     left: 40,
//     top: 0,
//     width: 320, 
//     backgroundColor: "lightblue",
//     padding: 10,
//     borderRadius: 70,

//   }
// });

// export default Entertainment;



import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, ScrollView , ActivityIndicator} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from "../../../FirebaseConfig";
import YoutubePlayer from 'react-native-youtube-iframe';

interface Season {
  id: string;
  name: string;
  videoId: string;
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Entertainment = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSeasonModalVisible, setIsSeasonModalVisible] = useState(false);
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const [selectedSeasonVideos, setSelectedSeasonVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const scrollViewRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true); 
      try {
        const catSnapshot = await getDocs(collection(FIRESTORE_DB, "Categories"));
        const categoriesData = [];
        for (const catDoc of catSnapshot.docs) {
          const seasonsSnapshot = await getDocs(collection(FIRESTORE_DB, "Categories", catDoc.id, "Seasons"));
          const seasons = [];
          for (const seasonDoc of seasonsSnapshot.docs) {
            console.log(seasonDoc.data());  // Log each season data to verify structure and content
            const seasonData = {};
            Object.keys(seasonDoc.data()).forEach(key => {
              seasonData[key.trim()] = seasonDoc.data()[key];
            });
            seasons.push({ id: seasonDoc.id, ...seasonData });
          }
          categoriesData.push({ id: catDoc.id, name: catDoc.data().name, seasons });
// if (isLoading) {
//     return <View style={styles.container}><Text>Loading...</Text></View>;
//   }
  
//   if (error) {
//     return <View style={styles.container}><Text>{error}</Text></View>;
//   }        
        }
        setCategories(categoriesData);
        if (categoriesData.length === 0) {
          setError('No categories available.');
        }
      } catch (error) {
        console.error("Firebase fetch error: ", error.message);
        setError('Failed to fetch categories. Please try again later.');
      }
      setIsLoading(false); // End loading
    
    };
    fetchCategories();
  }, []);
  
  

  const openSeasonModal = (category) => {
    setSelectedSeasonVideos(category.seasons);
    setIsSeasonModalVisible(true);
  };

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
        backgroundColor: item.id === categories[activeIndex].id ? "#f3b718" : "#f09030",
      }]}
      onPress={() => openSeasonModal(item)}
    >
      <MaterialCommunityIcons name="television-play" size={94} color="white" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="orange" style={styles.loading} />)
      :error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        // <Carousel
        //   layout={'default'}
        //   data={categories}
        //   renderItem={renderItem}
        //   sliderWidth={Math.round(viewportWidth * 0.90)}
        //   itemWidth={Math.round(viewportWidth * 0.3)}
        //   loop={true}
        //   useScrollView={true}
        //   activeSlideAlignment="center"
        //   ref={scrollViewRef}
        //   inactiveSlideScale={0.8}
        //   inactiveSlideOpacity={1}
        //   onSnapToItem={(index) => setActiveIndex(index)}
        // />
        <>
          <Carousel
            layout={'default'}
            data={categories}
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
        </>
      )}

<Modal
  animationType="slide"
  transparent={true}
  visible={isSeasonModalVisible}
  onRequestClose={() => setIsSeasonModalVisible(false)}
>
  <View style={styles.modalView}>
  <ScrollView style={{ width: '50%' }}>
  {selectedSeasonVideos.map((season, index) => (
    <TouchableOpacity key={index} style={styles.seasonButton} onPress={() => openVideoModal(season.videoId)}>
      <Text style={styles.seasonButtonText}>{season.name}</Text>
    </TouchableOpacity>
  ))}
</ScrollView>
    <TouchableOpacity
      style={styles.closeButton}
      onPress={() => setIsSeasonModalVisible(false)}
    >
      <FontAwesome name="close" size={24} color="black" />
    </TouchableOpacity>
  </View>
</Modal>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isSeasonModalVisible}
        onRequestClose={() => setIsSeasonModalVisible(false)}
      >
        <View style={styles.modalView}>
          <ScrollView style={{ width: '100%' }}>
            {selectedSeasonVideos.map((season, index) => (
              <TouchableOpacity key={index} style={styles.videoButton} onPress={() => openVideoModal(season.videoId)}>
                <Text style={styles.videoButtonText}>{season.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsSeasonModalVisible(false)}
          >
            <FontAwesome name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modal> */}

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

export default Entertainment;