import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './components/MyTabs';
import { RealmProvider } from '@realm/react';
import { LoginPage } from './models/LoginModel';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { InjuryForm } from './models/FormsModel';

const Stack = createStackNavigator();

const App = () => {
  return (
    <RealmProvider schema={[LoginPage, InjuryForm]}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </RealmProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
