import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Logout = () => {
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("rememberedUser");
      console.log("User signed out!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to logout?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    height: 290,
  },
  text: {
    fontSize: 44,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f3b717",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 45, // Make the button rounder
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Logout;
