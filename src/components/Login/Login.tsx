import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import {signInWithEmailAndPassword} from "@firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check your email");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <View style={styles.container}>
     <KeyboardAvoidingView behavior="padding"> 
      <Text style={styles.welcome}>Welcome Garden Loft Residents</Text>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        value={password}
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Login" onPress={signIn} />
          <Button title="Create Account" onPress={signUp} />
        </>
      )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: "#FCF8E3",
  },
  input: {
    borderColor: "black",
    backgroundColor: "white",
    padding: 30,
  },
  welcome: {
    fontSize: 40,
    color: "grey",
    
  },
});
