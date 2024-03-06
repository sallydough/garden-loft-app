// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import axios from 'axios';
// import Carousel, { CarouselStatic } from 'react-native-snap-carousel';

// // Define the type for each event item
// interface EventItem {
//   item: string;
//   // Add more properties as needed
// }

// const { width: viewportWidth } = Dimensions.get('window');

// const Activities: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09'
//         );
//         if (!response.data.success) {
//           throw new Error('Failed to retrieve signed-up activities.');
//         }
//         setEvents(response.data.data.signup);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching signed-up activities:', error.message);
//         setError(
//           'Failed to retrieve signed-up activities. Please try again later.'
//         );
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
//     // Handle navigation to Zoom link
//   };

//   const renderItem = ({ item }: { item: EventItem }) => (
//     <TouchableOpacity onPress={() => navigateToZoomLink(item)} style={styles.card}>
//       <Text>{item.item}</Text>
//       {/* Display other properties if needed */}
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>Error: {error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={events}
//         renderItem={renderItem}
//         sliderWidth={viewportWidth * 0.85}
//         itemWidth={viewportWidth * 0.3}
//         loop={true}
//         activeSlideAlignment="center"
//         ref={scrollViewRef}
//         inactiveSlideScale={0.8}
//         inactiveSlideOpacity={1}
//       />

//       <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
//         <Text>{'<'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
//         <Text>{'>'}</Text>
//       </TouchableOpacity>
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
// });

// export default Activities;


// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import axios from 'axios';
// import Carousel, { CarouselStatic } from 'react-native-snap-carousel';

// // Define the type for each event item
// interface EventItem {
//   item: string;
//   // Add more properties as needed
// }

// const { width: viewportWidth } = Dimensions.get('window');

// const Activities: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09'
//         );
//         if (!response.data.success) {
//           throw new Error('Failed to retrieve signed-up activities.');
//         }
//         setEvents(response.data.data.signup);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching signed-up activities:', error.message);
//         setError(
//           'Failed to retrieve signed-up activities. Please try again later.'
//         );
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
//     // Handle navigation to Zoom link
//   };

//   const renderItem = ({ item }: { item: EventItem }) => (
//     <TouchableOpacity onPress={() => navigateToZoomLink(item)} style={styles.card}>
//       <Text>{item.item}</Text>
//       {/* Display other properties if needed */}
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>Error: {error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={events}
//         renderItem={renderItem}
//         sliderWidth={viewportWidth * 0.85}
//         itemWidth={viewportWidth * 0.3}
//         loop={true}
//         activeSlideAlignment="center"
//         ref={scrollViewRef}
//         inactiveSlideScale={0.8}
//         inactiveSlideOpacity={1}
//       />

//       <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
//         <Text>{'<'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
//         <Text>{'>'}</Text>
//       </TouchableOpacity>
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
// });

// export default Activities;

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import Carousel, { CarouselStatic } from 'react-native-snap-carousel';

interface EventItem {
  item: string;
  startDate: Date;
  endDate?: Date;
  zoomLink?: string;
}

const { width: viewportWidth } = Dimensions.get('window');

const Activities: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
          startDate: new Date(item.startdatestring.replace(/-/g, '/')),
          endDate: item.enddatestring
            ? new Date(item.enddatestring.replace(/-/g, '/'))
            : undefined,
          zoomLink:
            item.location === 'Zoom Meeting'
              ? 'https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09'
              : undefined,
        }));
        setEvents(eventData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching signed-up activities:', error.message);
        setError(
          'Failed to retrieve signed-up activities. Please try again later.'
        );
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

  const renderItem = ({ item }: { item: EventItem }) => (
    <TouchableOpacity onPress={() => navigateToZoomLink(item)} style={styles.card}>
      <Text>{item.item}</Text>
      {/* Display other properties if needed */}
    </TouchableOpacity>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={events}
        renderItem={renderItem}
        sliderWidth={viewportWidth * 0.85}
        itemWidth={viewportWidth * 0.3}
        loop={true}
        activeSlideAlignment="center"
        ref={scrollViewRef}
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={1}
      />

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
            <Text>
              {selectedEvent.startDate.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                timeZone: 'America/Edmonton',
              })}
            </Text>
            {new Date() >= selectedEvent.startDate &&
            (!selectedEvent.endDate || new Date() <= selectedEvent.endDate) ? (
              <TouchableOpacity
                onPress={() => {
                  // Handle navigation to Zoom link
                }}
                style={styles.joinNowButton}>
                <Text style={styles.buttonText}>Join Now</Text>
              </TouchableOpacity>
            ) : (
              <>
                {isJoinAvailable(selectedEvent) && (
                  <TouchableOpacity
                    onPress={() => {
                      // Handle navigation to Zoom link
                    }}
                    style={styles.joinNowButton}>
                    <Text style={styles.buttonText}>Join Now</Text>
                  </TouchableOpacity>
                )}
                {!isJoinAvailable(selectedEvent) && (
                  <Text style={styles.modalText}>Event Not Available Yet</Text>
                )}
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const isJoinAvailable = (event: EventItem) => {
  const timeDiff = event.startDate.getTime() - Date.now();
  return timeDiff <= 10 * 60 * 1000;
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 100,
  },
  card: {
    width: 120,
    height: 80,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: -12 }],
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: [{ translateY: -12 }],
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
  joinNowButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 10,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Activities;






