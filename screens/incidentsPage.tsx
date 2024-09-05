import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRealm, useQuery } from '@realm/react';
import { InjuryForm } from '../models/FormsModel';

// Define the type of navigation prop for type safety with React Navigation
export type RootStackParamList = {
  IncidentsPage: undefined; // Route to the main Incidents Page
  RaiseIncident: undefined; // Route to the page for raising a new incident
  IncidentCardDetails: { injuryForm: InjuryForm }; // Route to the page for incident details
};

// Define the type for the navigation prop specifically for the IncidentsPage
type NavigationProp = StackNavigationProp<RootStackParamList, 'IncidentsPage'>;

// Create a top tab navigator using Material design
const Tab = createMaterialTopTabNavigator();

export default function IncidentsPage() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63', // Active tab color
          tabBarIndicatorStyle: { backgroundColor: '#e91e63' }, // Indicator color
        }}
      >
        <Tab.Screen name="Raised" component={Raised} />
        <Tab.Screen name="Under Review" component={UnderReview} />
        <Tab.Screen name="RCA Submitted" component={RCASubmitted} />
        <Tab.Screen name="Closed" component={Closed} />
      </Tab.Navigator>
    </View>
  );
}

// Raised Incidents Tab Component with a button to navigate to the Raise Incident page
const Raised = () => {
  const navigation = useNavigation<NavigationProp>(); // Use the type

  const InjuryFormList = () => {
    const realm = useRealm();
    const injuryForms = useQuery(InjuryForm);

    // Render each item as a card with PersonName and Description
    const renderItem = ({ item }: { item: InjuryForm }) => (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('IncidentCardDetails', { item })}
      >
        <Text style={styles.cardText}>Name: {item.PersonName}</Text>
        <Text style={styles.cardText1}>Description: {item.Description}</Text>
      </TouchableOpacity>
    );

    // Display a list of cards
    return (
      <FlatList
        data={injuryForms}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
      />
    );
  };

  return (
    <View style={styles.tabContainer}>
      <InjuryFormList />
      {/* Floating Action Button to Raise Incident */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RaiseIncident')}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

// Tab Component for Incidents Under Review
const UnderReview = () => (
  <View style={styles.tabContainer}>
    <Text>Incidents Under Review</Text>
  </View>
);

// Tab Component for RCA Submitted Incidents
const RCASubmitted = () => (
  <View style={styles.tabContainer}>
    <Text>RCA Submitted Incidents</Text>
  </View>
);

// Tab Component for Closed Incidents
const Closed = () => (
  <View style={styles.tabContainer}>
    <Text>Closed Incidents</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the full screen
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF', // Background color
    padding: 15, // Padding inside the card
    marginVertical: 10, // Vertical margin between cards
    borderRadius: 10, // Rounded corners
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignSelf: 'stretch', // Center horizontally
    marginTop: 30,
  },
  cardText: {
    justifyContent: 'space-between',
    marginTop: 10,
    fontSize: 18, // Font size for card content
    color: '#333', // Text color
    marginBottom: 5,
  },

  cardText1: {
    marginHorizontal: 5,
    flexDirection: 'column',
    marginTop: 10,
    fontSize: 18, // Font size for card content
    color: '#333', // Text color
    marginBottom: 5,
  },

  button: {
    position: 'absolute', // Position the button absolutely within the parent
    bottom: 50,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e91e63',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
