import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useRealm } from '@realm/react';


export default function RaiseIncidentPage() {
  const realm = useRealm(); // Use the useRealm hook
  const [selectedIncident, setSelectedIncident] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [peopleInvolved, setPeopleInvolved] = useState(0);
  const [personName, setPersonName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [signature, setSignature] = useState('');

  // Toggle date picker visibility
  const onChange = (event, selectedDate) => {
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  // Form submission logic
  const handleSubmit = () => {
    try {
      realm.write(() => {
        realm.create('InjuryForm', {
          _id: new Realm.BSON.ObjectId(),
          DateTime: date,
          PeopleInvolved: peopleInvolved,
          PersonName: personName,
          Description: description,
          Priority: priority,
          Signature: signature,
        });
      });
      Alert.alert('Incident raised successfully!');
    } catch (error) {
      console.error('Failed to save incident:', error);
      Alert.alert('Error', 'Failed to save incident. Please try again.');
    }
  };

  // Render form fields
  const renderItem = ({ item }) => {
    switch (item) {
      case 'DateTime':
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Date and Time of Incident</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Text style={styles.input}>{date.toLocaleString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="datetime"
                display="default"
                onChange={onChange}
                minimumDate={new Date(2000, 0, 1)}
              />
            )}
          </View>
        );
      case 'PeopleInvolved':
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Count of People Involved</Text>
            <View style={styles.row}>
              <Button title="-" onPress={() => setPeopleInvolved(Math.max(0, peopleInvolved - 1))} />
              <Text style={styles.counter}>{peopleInvolved}</Text>
              <Button title="+" onPress={() => setPeopleInvolved(peopleInvolved + 1)} />
            </View>
          </View>
        );
      case 'PersonName':
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Involved Person Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={personName}
              onChangeText={setPersonName}
            />
          </View>
        );
      case 'Description':
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Describe What Happened</Text>
            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              multiline
            />
          </View>
        );
      case 'Priority':
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Priority</Text>
            <Picker
              selectedValue={priority}
              style={styles.input}
              onValueChange={(itemValue) => setPriority(itemValue)}
            >
              <Picker.Item label="High" value="high" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Low" value="low" />
            </Picker>
          </View>
        );
      case 'Signature':
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Signature</Text>
            <TextInput
              style={styles.input}
              placeholder="Sign here"
              value={signature}
              onChangeText={setSignature}
            />
          </View>
        );
      default:
        return null;
    }
  };

  const injuryFormFields = ['DateTime', 'PeopleInvolved', 'PersonName', 'Description', 'Priority', 'Signature'];

  const renderForm = () => {
    if (selectedIncident === 'injury') {
      return (
        <FlatList
          data={injuryFormFields}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      );
    }
    return null;  // Add more forms if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Raise Incident</Text>
      <Text style={styles.label}>Select Incident Type</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={selectedIncident}
          onValueChange={(itemValue) => setSelectedIncident(itemValue)}
        >
          <Picker.Item label="Select an incident type" value="" />
          <Picker.Item label="Injury" value="injury" />
        </Picker>
      </View>
      {renderForm()}
      <Button title="Raise Incident" onPress={handleSubmit} color="#e91e63" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdown: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    marginHorizontal: 20,
    fontSize: 18,
  },
});
