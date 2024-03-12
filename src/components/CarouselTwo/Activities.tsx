// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import axios from 'axios';
// import Carousel, { CarouselStatic } from 'react-native-snap-carousel';
// import moment from 'moment-timezone';

// interface EventItem {
//   item: string;
//   startDate: Date;
//   endDate?: Date;
// }

// const { width: viewportWidth } = Dimensions.get('window');

// const Activities: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09'
//         );
//         if (!response.data.success) {
//           throw new Error('Failed to retrieve signed-up activities.');
//         }
//         const eventData = response.data.data.signup.map((item: any) => ({
//           item: item.item,
//           startDate: moment.tz(item.startdatestring.replace(/-/g, 'T'), 'YYYY/MM/DD HH:mm', 'Edmonton/Mountian').toDate(),
        
//           // endDate: item.enddatestring ? moment.tz(item.enddatestring.replace(/-/g, 'T'), 'YYYY/MM/DD HH:mm:ss', 'America/New_York').toDate() : undefined,
//         }));
//         setEvents(eventData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching signed-up activities:', error.message);
//         setError('Failed to retrieve signed-up activities. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const scrollViewRef = useRef<CarouselStatic<EventItem> | null>(null);

//   const scrollToNext = () => {
//     if (scrollViewRef.current) {
//       const currentIndex = scrollViewRef.current.currentIndex || 0;
//       const nextIndex = currentIndex + 1;
//       scrollViewRef.current.snapToItem(nextIndex, true, true);
//     }
//   };

//   const scrollToPrevious = () => {
//     if (scrollViewRef.current) {
//       const currentIndex = scrollViewRef.current.currentIndex || 0;
//       const prevIndex = currentIndex - 1;
//       scrollViewRef.current.snapToItem(prevIndex, true, true);
//     }
//   };

//   const navigateToZoomLink = (event: EventItem) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   const [activeIndex, setActiveIndex] = useState(0);

//   const renderItem = ({ item }: { item: EventItem }) => (
//     <TouchableOpacity onPress={() => navigateToZoomLink(item)} style={styles.card}>
//       <Text>{item.item}</Text>
//       <Text> {moment(item.startDate).format('dddd MMMM Do, h:mm a')}</Text>
//       {/* {item.endDate && (
//         // <Text>End Date: {moment(item.endDate).format('MMMM Do YYYY, h:mm:ss a')}</Text>
//       )} */}
//     </TouchableOpacity>
//   );

//   const handleSnapToItem = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : error ? (
//         <Text>Error: {error}</Text>
//       ) : (
//         <>
//           <Carousel
//             data={events}
//             // renderItem={renderItem}
//             // sliderWidth={viewportWidth * 0.85}
//             // itemWidth={viewportWidth * 0.3}
//             // loop={true}
//             // activeSlideAlignment="center"
//             // ref={scrollViewRef}
//             // inactiveSlideScale={0.8}
//             // inactiveSlideOpacity={1}
//             layout={'default'}
//             renderItem={renderItem}
//             sliderWidth={Math.round(viewportWidth * 0.90)}
//             itemWidth={Math.round(viewportWidth * 0.3)}
//             loop={true}
//             useScrollView={true}
//             activeSlideAlignment="center"
//             ref={scrollViewRef}
//             inactiveSlideScale={0.8}
//             inactiveSlideOpacity={1}
//             onSnapToItem={(index) => handleSnapToItem(index)} // Handle snapping logic
//           />

//           <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
//             <Text>{'<'}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
//             <Text>{'>'}</Text>
//           </TouchableOpacity>

//           {isModalOpen && selectedEvent && (
//             <View style={styles.modalContainer}>
//               <View style={styles.modal}>
//                 <Text>{selectedEvent.item}</Text>
//                 {selectedEvent.endDate && (
//                   <Text>End Date: {moment(selectedEvent.endDate).format('MMMM Do YYYY, h:mm:ss a')}</Text>
//                 )}
//                 <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
//                   <Text>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     height: 100,
//   },
//   card: {
//     width: 120,
//     height: 80,
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     marginHorizontal: 5,
//   },
//   arrowLeft: {
//     position: 'absolute',
//     top: '50%',
//     left: 0,
//     transform: [{ translateY: -12 }],
//   },
//   arrowRight: {
//     position: 'absolute',
//     top: '50%',
//     right: 0,
//     transform: [{ translateY: -12 }],
//   },
//   modalContainer: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -viewportWidth * 0.4 }, { translateY: -viewportWidth * 0.2 }],
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 20,
//     borderRadius: 10,
//   },
//   modal: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//   },
//   closeButton: {
//     marginTop: 10,
//     backgroundColor: 'lightgray',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
// });

// export default Activities;

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import Carousel, { CarouselStatic } from 'react-native-snap-carousel';
import moment from 'moment-timezone';

const { width: viewportWidth } = Dimensions.get('window');

interface EventItem {
  item: string;
  startDate: Date;
  endDate?: Date;
}

const Activities2: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          'https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09'
        );
        if (!response.data.success) {
          throw new Error('Failed to retrieve signed-up activities.');
        }
        const eventData = response.data.data.signup.map((item: any) => ({
          item: item.item,
          startDate: moment.tz(item.startdatestring.replace(/-/g, 'T'), 'YYYY/MM/DD HH:mm', 'Edmonton/Mountain').toDate(),
          endDate: item.enddatestring ? moment.tz(item.enddatestring.replace(/-/g, 'T'), 'YYYY/MM/DD HH:mm:ss', 'Edmonton/Mountain').toDate() : undefined,
        }));
        setEvents(eventData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching signed-up activities:', error.message);
        setError('Failed to retrieve signed-up activities. Please try again later.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const scrollViewRef = useRef<CarouselStatic<EventItem> | null>(null);

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

  const navigateToZoomLink = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const renderItem = ({ item, index }: { item: EventItem; index: number }) => (
    <TouchableOpacity
      key={index}
      style={[styles.cardContainer, { backgroundColor: index === activeIndex + 3 ? "#f3b718" : "#f09030" }]}
      onPress={() => navigateToZoomLink(item)}>
      <Text style={styles.cardText}>{item.item}</Text>
      <Text style={styles.cardText}>{moment(item.startDate).format('dddd MMMM Do, h:mm a')}</Text>
    </TouchableOpacity>
  );

  const handleSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <>
          <Carousel
            data={events}
            layout={'default'}
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

          <Text style={styles.prompt}>{events[activeIndex].prompt && events[activeIndex].prompt}</Text>

          <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
            <Text>{'>'}</Text>
          </TouchableOpacity>

          {isModalOpen && selectedEvent && (
            <View style={styles.modalContainer}>
              <View style={styles.modal}>
                <Text>{selectedEvent.item}</Text>
                {selectedEvent.endDate && (
                  <Text>End Date: {moment(selectedEvent.endDate).format('dddd MMMM Do, h:mm a')}</Text>
                )}
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 290,
    alignItems: 'center',
  },
  cardContainer: {
    width: viewportWidth * 0.3, // Adjusted to show 3 cards at a time
    height: 120, // Adjusted to fit the content
    backgroundColor: '#f09030',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'column',
    gap: 10,
  },
  cardText: {
    fontSize: 12, // Adjusted font size
    color: '#393939',
    fontWeight: '700',
    textAlign: 'center'
  },
  prompt: {
    fontSize: 20,
    marginBottom: 15,
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
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -viewportWidth * 0.4 }, { translateY: -viewportWidth * 0.2 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Activities2;















