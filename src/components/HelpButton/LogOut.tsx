import { View, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '@/FirebaseConfig';

const LogOut = () => {
  return (
    <View>
      <Button onPress={() => FIREBASE_AUTH.signOut() }title='Log Out'/>
    </View>
  );
};

export default LogOut