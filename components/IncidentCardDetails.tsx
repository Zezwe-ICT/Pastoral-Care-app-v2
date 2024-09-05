import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IncidentCardDetails = ({ route }) => {
  // Destructure the item passed through the route's params
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incident Details</Text>
      <View style={styles.card}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{item._id.toString()}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Date & Time:</Text>
          <Text style={styles.value}>{item.DateTime.toString()}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>People Involved:</Text>
          <Text style={styles.value}>{item.PeopleInvolved}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Person Name:</Text>
          <Text style={styles.value}>{item.PersonName}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{item.Description}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Priority:</Text>
          <Text style={styles.value}>{item.Priority}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Signature:</Text>
          <Text style={styles.value}>{item.Signature}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f8', // Light background for the entire screen
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Darker color for title
  },
  card: {
    backgroundColor: '#fff', // White background for the card
    borderRadius: 10,
    padding: 20, // Padding inside the card
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    elevation: 6, // Shadow for Android
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start', // Align items to the top
    borderBottomWidth: 1, // Divider between items
    borderBottomColor: '#e0e0e0', // Light grey color for divider
    paddingVertical: 10, // Padding for each row
  },
  label: {
    fontWeight: '600', // Semi-bold font for label
    color: '#444', // Darker grey for labels
    width: 120, // Fixed width for label column
    fontSize: 16, // Font size for label
  },
  value: {
    flex: 1, // Take the remaining width
    color: '#666', // Medium grey for values
    fontSize: 16, // Font size for value
  },
});

export default IncidentCardDetails;
