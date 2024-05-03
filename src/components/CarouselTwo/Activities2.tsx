// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   Button,
//   Linking,
//   ActivityIndicator,
//   Platform,
// } from "react-native";
// import axios from "axios";
// import Carousel from "react-native-snap-carousel";
// import moment from "moment-timezone";
// import { FontAwesome } from "@expo/vector-icons";
// import * as Notifications from 'expo-notifications';
// import { Audio } from 'expo-av';

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

// interface EventItem {
//   item: string;
//   startDate: Date;
//   endDate?: Date;
//   zoomLink?: string | null;
// }

// const Activities2 = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
//   const scrollViewRef = useRef(null);

//   useEffect(() => {
//     registerForPushNotificationsAsync();
//     fetchEvents();
//   }, []);

//   const registerForPushNotificationsAsync = async () => {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }

//     // Android specific channel for notifications
//     if (Platform.OS === 'android') {
//       await Notifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: Notifications.AndroidImportance.MAX,
//         sound: 'default',
//         vibrationPattern: [0, 250, 250, 250],
//       });
//     }
//   };

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
//       );
//       if (!response.data.success) {
//         throw new Error("Failed to retrieve signed-up activities.");
//       }
//       const eventData = response.data.data.signup.map((item) => ({
//         item: item.item,
//         startDate: moment.tz(item.startdatestring, "America/Los_Angeles").toDate(),
//         endDate: item.enddatestring ? moment.tz(item.enddatestring, "America/Los_Angeles").toDate() : undefined,
//         zoomLink: item.location.includes("Zoom") ? item.location : null,
//       })).filter(event => new Date(event.startDate) > new Date());

//       eventData.forEach(event => {
//         scheduleNotification(event);
//       });

//       setEvents(eventData);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching events: ", error);
//       setError("Failed to retrieve events. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const scheduleNotification = async (event) => {
//     const soundObject = new Audio.Sound();
//     try {
//       await soundObject.loadAsync(require('./path/to/bell_sound.mp3'));
//       await soundObject.playAsync();
//     } catch (error) {
//       console.log('Error playing sound', error);
//     }

//     const schedulingOptions = {
//       content: {
//         title: "Upcoming Event!",
//         body: `Your event ${event.item} is starting soon.`,
//         sound: 'default', // Use the default sound
//         data: { event },
//       },
//       trigger: {
//         date: new Date(event.startDate.getTime() - 10 * 60 * 1000),
//       },
//     };
//     await Notifications.scheduleNotificationAsync(schedulingOptions);
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
//   }

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       key={index}
//       style={[
//         styles.cardContainer,
//         { backgroundColor: index === selectedEvent ? "#f3b718" : "#f09030" },
//       ]}
//       onPress={() => setSelectedEvent(item)}
//     >
//       <Text style={styles.cardText}>{item.item}</Text>
//       <Text style={styles.cardTextTime}>
//         {moment(item.startDate).format("dddd, MMMM Do, h:mm a")}
//       </Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         ref={scrollViewRef}
//         data={events}
//         renderItem={renderItem}
//         sliderWidth={viewportWidth}
//         itemWidth={viewportWidth * 0.75}
//       />
//       {selectedEvent && (
//         <View style={styles.modal}>
//           <Text>{selectedEvent.item}</Text>
//           {selectedEvent.zoomLink && (
//             <Button title="Join Event" onPress={() => Linking.openURL(selectedEvent.zoomLink)} />
//           )}
//           <Button title="Close" onPress={() => setSelectedEvent(null)} />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modal: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     right: '50%',
//     bottom: '50%',
//     backgroundColor: 'white',
//     padding: 20,
//   },
//   cardContainer: {
//     height: 200,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f09030',
//   },
//   cardText: {
//     color: '#fff',
//   },
//   cardTextTime: {
//     color: '#fff',
//   },
//   loading: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Activities2;
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
  Linking,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";
import Carousel, { CarouselStatic }  from "react-native-snap-carousel";
import moment from "moment-timezone";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from 'expo-av';

import * as Notifications from 'expo-notifications';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

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
    registerForPushNotificationsAsync();
    fetchEvents();
  
    // Listener for foreground notification handling
    const foregroundSubscription = Notifications.addNotificationReceivedListener(notification => {
      Alert.alert("Notification Received", notification.request.content.body);
    });
  
    // Listener for when the user interacts with the notification (e.g., taps on it)
    const responseSubscription = Notifications.addNotificationResponseReceivedListener(response => {
      Alert.alert("Notification Clicked", response.notification.request.content.body);
    });
  
    return () => {
      // Cleanup subscriptions when the component is unmounted
      foregroundSubscription.remove();
      responseSubscription.remove();
    };
  }, []);
  
  async function fetchEvents() {
    try {
      const response = await axios.get(
        "https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09"
      );
      if (!response.data.success) {
        throw new Error("Failed to retrieve signed-up activities.");
      }
      const currentTime = new Date();
      const eventData = response.data.data.signup.map((item: any) => ({
        item: item.item,
        startDate: moment
          .tz(item.startdatestring.replace(/-/g, "T"), "YYYY/MM/DD HH:mm", "")
          .toDate(),
        endDate: item.enddatestring
          ? moment
              .tz(
                item.enddatestring.replace(/-/g, "T"),
                "YYYY/MM/DD HH:mm:ss",
                ""
              )
              .toDate()
          : undefined,
        // Fetches Zoom link from Sign Up Genius
        zoomLink:
          item.location === "Zoom Meeting"
            ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09"
            : null,
      }))
      .filter((event: EventItem) => event.startDate > currentTime); //Filter out past events
      // Sort events array by startDate in chronological order
      eventData.sort((a, b) => a.startDate - b.startDate);

      eventData.forEach(event => {
        scheduleNotification(event);
      });

      setEvents(eventData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching signed-up activities:", error.message);
      setError(
        "Failed to retrieve signed-up activities. Please try again later."
      );
      setLoading(false);
    }
  };


  async function registerForPushNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    if (settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL) {
        console.log('Notification permissions granted.');
    } else {
        const response = await Notifications.requestPermissionsAsync({
            ios: {
                allowAlert: true,
                allowSound: true,
                allowBadge: true,
                allowDisplayInCarPlay: true,
                allowCriticalAlerts: true,
            },
        });
        if (!response.granted) {
            alert('Failed to get push token for push notification!');
            return;
        }
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            sound: true,
        });
    }
}


   


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

  // Renders modal to Activities start times
  const renderModalContent = (event: EventItem) => {
    const currentTime = new Date();
    const tenMinutesBeforeStartTime = new Date(event.startDate);
    tenMinutesBeforeStartTime.setMinutes(
      tenMinutesBeforeStartTime.getMinutes() - 10
    );

    if (event.endDate && currentTime > event.endDate) {
      return <Text>Event ended.</Text>;
    } else if (currentTime < tenMinutesBeforeStartTime) {
      return <Text>Event has not started yet.</Text>;
    } else if (
      currentTime >= tenMinutesBeforeStartTime &&
      currentTime < event.endDate
    ) {
      return (
        <Button
          title="Join Now"
          onPress={() => {
            Linking.openURL(selectedEvent.zoomLink);
          }}
        />
      );
    } else if (event.startDate <= currentTime && currentTime < event.endDate) {
      return <Button title="Event in progress" disabled />;
    } else {
      return null; // Event has ended
    }
  };

  // Renders carousel card items
  const renderItem = ({ item, index }: { item: EventItem; index: number }) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.cardContainer,
        { backgroundColor: index === activeIndex + 3 ? "#f3b718" : "#f09030" },
      ]}
      onPress={() => navigateToZoomLink(item)}
    >
      <Text style={styles.cardText}>{item.item}</Text>
      <Text style={styles.cardTextTime}>
        {moment(item.startDate).format("dddd MMMM Do, h:mm a")}
      </Text>
    </TouchableOpacity>
  );
  // Handles carousel navigation snap style
  const handleSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  

  const scheduleNotification = async (event) => {
    const schedulingOptions = {
        content: {
            title: "Upcoming Event!",
            body: `Your event ${event.item} is starting soon.`,
            sound: true, // Use the default sound
            data: { event },
        },
        trigger: {
            date: new Date(event.startDate.getTime() - 10 * 60 * 1000),
        },
    };
    console.log("Scheduling notification:", schedulingOptions);
    await Notifications.scheduleNotificationAsync(schedulingOptions);
};



  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
      ) : error ? (
        <Text style={styles.loading}>Error: {error}</Text>
      ) : (
        <>
          <Carousel
            data={events}
            layout={"default"}
            renderItem={renderItem}
            sliderWidth={Math.round(viewportWidth * 0.9)}
            itemWidth={Math.round(viewportWidth * 0.3)}
            loop={true}
            useScrollView={true}
            activeSlideAlignment="center"
            ref={scrollViewRef}
            inactiveSlideScale={0.8}
            inactiveSlideOpacity={1}
            onSnapToItem={(index) => handleSnapToItem(index)} // Handle snapping logic
          />
          {/* Prompt Below */}
          {/* <Text style={styles.prompt}>
            {events[activeIndex].prompt && events[activeIndex].prompt}
          </Text> */}

          <TouchableOpacity style={styles.arrowLeft} onPress={scrollToPrevious}>
            <FontAwesome name="angle-left" size={124} color="rgb(45, 62, 95)" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowRight} onPress={scrollToNext}>
            <FontAwesome
              name="angle-right"
              size={124}
              color="rgb(45, 62, 95)"
            />
          </TouchableOpacity>

          {isModalOpen && selectedEvent && (
            <View style={styles.modalContainer}>
              <View style={styles.modal}>
                <Text>{selectedEvent.item}</Text>
                {selectedEvent.endDate && (
                  <Text>
                    End Date:{" "}
                    {moment(selectedEvent.endDate).format(
                      "dddd MMMM Do, h:mm a"
                    )}
                  </Text>
                )}
                {renderModalContent(selectedEvent)}
                <TouchableOpacity
                  onPress={closeModal}
                  style={styles.closeButton}
                >
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
    position: "relative",
    height: 290,
    alignItems: "center",
  },
  cardContainer: {
    width: viewportWidth * 0.3, // Adjusted to show 3 cards at a time
    height: viewportHeight * 0.3, // Adjusted to fit the content
    backgroundColor: "#f09030",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    flexDirection: "column",
    gap: 10,
  },
  cardText: {
    fontSize: 30, // Adjusted font size
    color: "#393939",
    fontWeight: "700",
    textAlign: "center",
  },
  cardTextTime: {
    fontSize: 20, // Adjusted font size
    color: "#393939",
    fontWeight: "600",
    textAlign: "center",
  },
  loading: {
    flex: 1,
    alignItems: "flex-start",
    // marginTop: 30,
    // color: "#746E6E",
    fontSize: 44,
  },
  prompt: {
    fontSize: 30,
    color: '#393939',
    fontWeight: '700',
    marginTop: 15,
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
  modalContainer: {
    position: "absolute",
    top: "30%",
    // left: "74%",
    transform: [
      { translateX: -viewportWidth * 0.01 }, //for ios is 0.4
      { translateY: -viewportWidth * 0.2 },
    ],
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
  },
  modal: {
    backgroundColor: "white",
    padding: 60,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "lightgray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Activities2;



// import React, { useState, useEffect, useRef } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Button, Linking, ActivityIndicator, Platform } from "react-native";
// import axios from "axios";
// import Carousel, { CarouselStatic } from "react-native-snap-carousel";
// import moment from "moment-timezone";
// import { FontAwesome } from "@expo/vector-icons";
// import * as Notifications from 'expo-notifications';

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

// interface EventItem {
//   item: string;
//   startDate: Date;
//   endDate?: Date;
//   zoomLink?: string | null;
// }

// const Activities2: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const scrollViewRef = useRef<CarouselStatic<EventItem> | null>(null);

//   useEffect(() => {
//     registerForPushNotificationsAsync();
//     fetchEvents();
//   }, []);

//   async function registerForPushNotificationsAsync() {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }

//     if (Platform.OS === 'android') {
//       Notifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         sound: 'default',
//       });
//     }
//   }

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("https://api.signupgenius.com/v2/k/signups/report/filled/47293846/?user_key=UmNrVWhyYWwrVGhtQmdXeVpweTBZZz09");
//       if (!response.data.success) {
//         throw new Error("Failed to retrieve signed-up activities.");
//       }
//       const eventData = response.data.data.signup.map((item: any) => ({
//         item: item.item,
//         startDate: moment.tz(item.startdatestring.replace(/-/g, "T"), "YYYY/MM/DD HH:mm", "").toDate(),
//         endDate: item.enddatestring ? moment.tz(item.enddatestring.replace(/-/g, "T"), "YYYY/MM/DD HH:mm:ss", "").toDate() : undefined,
//         zoomLink: item.location === "Zoom Meeting" ? "https://us06web.zoom.us/j/87666824017?pwd=RUZLSFVabjhtWjJVSm1CcDZsZXcrUT09" : null,
//       })).filter((event: EventItem) => event.startDate > new Date());

//       eventData.forEach(event => {
//         scheduleNotification(event);
//       });

//       setEvents(eventData);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching signed-up activities:", error.message);
//       setError("Failed to retrieve signed-up activities. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const scheduleNotification = async (event: EventItem) => {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: "Upcoming Event!",
//         body: `Your event ${event.item} is starting soon.`,
//         sound: 'default',
//         data: { event },
//       },
//       trigger: {
//         date: new Date(event.startDate.getTime() - 10 * 60 * 1000),
//       },
//     });
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
//   }

//   const renderItem = ({ item, index }: { item: EventItem; index: number }) => (
//     <TouchableOpacity
//       key={index}
//       style={[
//         styles.cardContainer,
//         { backgroundColor: index === activeIndex + 3 ? "#f3b718" : "#f09030" },
//       ]}
//       onPress={() => {
//         setSelectedEvent(item);
//         setIsModalOpen(true);
//         setActiveIndex(index);
//       }}
//     >
//       <Text style={styles.cardText}>{item.item}</Text>
//       <Text style={styles.cardTextTime}>
//         {moment(item.startDate).format("dddd MMMM Do, h:mm a")}
//       </Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         ref={scrollViewRef}
//         data={events}
//         renderItem={renderItem}
//         sliderWidth={Math.round(viewportWidth * 0.9)}
//         itemWidth={Math.round(viewportWidth * 0.3)}
//         loop={true}
//         useScrollView={true}
//         activeSlideAlignment="center"
//         onSnapToItem={(index) => setActiveIndex(index)}
//       />
//       {isModalOpen && selectedEvent && (
//         <View style={styles.modalContainer}>
//           <View style={styles.modal}>
//             <Text>{selectedEvent.item}</Text>
//             {selectedEvent.endDate && (
//               <Text>End Date: {moment(selectedEvent.endDate).format("dddd MMMM Do, h:mm a")}</Text>
//             )}
//             {selectedEvent.zoomLink && (
//               <Button title="Join Event" onPress={() => Linking.openURL(selectedEvent.zoomLink)} />
//             )}
//             <Button title="Close" onPress={() => {
//               setIsModalOpen(false);
//               setSelectedEvent(null);
//             }} />
//           </View>
//         </View>
//       )}
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
//     position: "relative",
//     height: 290,
//     alignItems: "center",
//   },
//   cardContainer: {
//     width: viewportWidth * 0.3, // Adjusted to show 3 cards at a time
//     height: viewportHeight * 0.3, // Adjusted to fit the content
//     backgroundColor: "#f09030",
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 5,
//     flexDirection: "column",
//     gap: 10,
//   },
//   cardText: {
//     fontSize: 30, // Adjusted font size
//     color: "#393939",
//     fontWeight: "700",
//     textAlign: "center",
//   },
//   cardTextTime: {
//     fontSize: 20, // Adjusted font size
//     color: "#393939",
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   loading: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   arrowLeft: {
//     position: "absolute",
//     top: "40%",
//     left: 30,
//   },
//   arrowRight: {
//     position: "absolute",
//     top: "40%",
//     right: 30,
//   },
//   modalContainer: {
//     position: "absolute",
//     top: "30%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     padding: 20,
//     borderRadius: 10,
//     width: "80%",
//     alignItems: "center",
//   },
//   modal: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//   },
//   closeButton: {
//     marginTop: 10,
//     backgroundColor: "lightgray",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
// });

// export default Activities2;
