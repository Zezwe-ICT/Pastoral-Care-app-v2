// RegisterScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { BSON } from 'realm';
import { LoginPage } from '../models/LoginModel';
import { useRealm } from '@realm/react';

const RegisterScreen = ({ navigation }: any) => {
  const realm = useRealm();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Check if user already exists
    const existingUser = realm.objects(LoginPage).filtered(`username = "${username}"`);

    if (existingUser.length > 0) {
      alert('User already exists!');
      return;
    }

    // Add new user to Realm database
    realm.write(() => {
      realm.create(LoginPage, {
        _id: new BSON.ObjectId(),
        username,
        password,
      });
    });

    alert('Registration Successful!');
    navigation.navigate('Login'); // Redirect to login after registration
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <Button title="Register" onPress={handleRegister} />

      
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
});

export default RegisterScreen;
