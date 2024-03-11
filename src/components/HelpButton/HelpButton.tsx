import { View, Text, Image, StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react'

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

const HelpButton = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/garden-loft-logo2.png')}
      style={{ width: 155, height: 72 }} />
      <TouchableOpacity  style={{ backgroundColor: '#59ACCE', padding: 5, paddingLeft: 10, borderRadius: 7, flexDirection: "row", }}>
      <MaterialCommunityIcons  
          name="phone-classic"
          size={52}
          color="#f3b718"
        />
        <Text style={{ color: '#2E3E5E', fontSize: 30, padding: 10, }}>Call Support</Text>
      </TouchableOpacity>
      <Text style={{ color: '#2E3E5E', fontSize: 32, padding: 10 }}>Welcome </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: viewportWidth * 0.95,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
  },
});

export default HelpButton