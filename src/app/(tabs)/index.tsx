import { StyleSheet, Text, View } from "react-native";

import CarouselOne from "@/src/components/CarouselOne/CarouselOne";
import HelpButton from "@/src/components/HelpButton/HelpButton";
//Create Navigation Stacks
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "@/src/components/Login/Login";
import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import HomePage from "@/src/components/HomePage/HomePage";


// import LoginSignUp from '@/src/components/CarouselTwo/LoginSignUp';
// import Activities from '@/src/components/CarouselTwo/Activities';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

// function InsideLayout() {
//   return (
//     // <InsideStack.Navigator>
//     // <InsideStack.Screen name='login' component={Login} />
//     // {/* <InsideStack.Screen name='homepage' component={HomePage} /> */}
//     // </InsideStack.Navigator>
//   // )
// }

export default function TabOneScreen() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      // console.log('user', user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="login">
      
        <>
          {user ? (
            <Stack.Screen 
            options={{ headerShown: false }} name="Garden Loft Home" 
            component={InsideApp} />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          )}
        </>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function InsideApp() {
  return (
    <View style={styles.container}>
      <HelpButton />
      <CarouselOne />
    {/* <HomePage /> */}
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCF8E3",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
