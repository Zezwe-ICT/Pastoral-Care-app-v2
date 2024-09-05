import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';  // Import Alert from react-native
import { BSON } from 'realm';
import { LoginPage } from '../models/LoginModel';
import { useRealm } from '@realm/react';

const LoginScreen = ({ navigation }: any) => {
  const realm = useRealm();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check for existing user in the database
    const existingUser = realm.objects(LoginPage).filtered(`username = "${username}" AND password = "${password}"`);
    
    if (existingUser.length > 0) {
      // Navigate to the main screen if login is successful
      navigation.replace('Main');
    } else {
      // Use Alert from react-native
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

      <View style={styles.registerContainer}>
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  registerContainer: {
    marginTop: 20, // Space above the register button
  },
});

export default LoginScreen;
