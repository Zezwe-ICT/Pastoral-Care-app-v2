import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import TeamPage from '../screens/userTeam';
import IncidentsPage from '../screens/incidentsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RaiseIncidentPage from '../screens/RaiseIncidentPage';
import IncidentCardDetails from './IncidentCardDetails';

// Screens
function Incidents() {
  return (
    <View style={styles.incidentsContainer}>
      <IncidentsPage />
      
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
    </View>
  );
}

function Inspections() {
  return (
    <View style={styles.container}>
      <Text>No items</Text>
    </View>
  );
}

function Team() {
  return (
    <View style={styles.userTeam}>
      <TeamPage />
    </View>
  );
}

// Tab Navigator
const Tab = createBottomTabNavigator();

// Stack Navigator for Incidents
const Stack = createStackNavigator();


function IncidentsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Incidents" component={Incidents} options={{ headerShown: false }} />
      <Stack.Screen name="RaiseIncident" component={RaiseIncidentPage} options={{ title: 'Raise an Incident' }} />
      <Stack.Screen name="IncidentCardDetails" component={IncidentCardDetails} options={{ title: 'Incidents' }} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="My incidents"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="My incidents"
        component={IncidentsStack}
        options={{
          tabBarLabel: 'My incidents',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alert-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My inspections"
        component={Inspections}
        options={{
          tabBarLabel: 'My inspections',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Team"
        component={Team}
        options={{
          tabBarLabel: 'Team',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-multiple-plus-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },

  userTeam: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  incidentsContainer: {
    flex: 1,
  
  }
});

export default MyTabs;
