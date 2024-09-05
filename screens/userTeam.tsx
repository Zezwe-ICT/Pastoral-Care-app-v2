import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function TeamPage() {
  // Function to open Gmail composer with the provided email
  function openEmail(email: string) {
    const emailUrl = `mailto:${email}`;
    Linking.openURL(emailUrl).catch(err => console.error('Failed to open email client:', err));
  }

  // Contact list hard coded // will use database from user logins
  const contacts = [
    {
      uid: 1,
      name: 'Ndaba Mncube',
      status: 'MD',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661326220954-82fc15e69dff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'ndaba@zezwe-it.co.za',
    },
    {
      uid: 2,
      name: 'Emily Sinclair',
      status: 'Teacher',
      imageUrl:
        'https://images.unsplash.com/photo-1539645223156-c799bda0947d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'emily@example.com',
    },
    {
      uid: 3,
      name: 'Siya Mncube',
      status: 'Developer',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661346026114-1f5097d17f0f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'siya@zezwe-it.co.za',
    },
    {
      uid: 4,
      name: 'Dineo',
      status: 'Teacher',
      imageUrl:
        'https://images.unsplash.com/photo-1523825036634-aab3cce05919?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'dineo@example.com',
    },
  ];

  // Render each contact item
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.userCard}>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.userImage}
      />

      <View style={styles.userDetails}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userStatus}>{item.status}</Text>
      </View>

      <TouchableOpacity onPress={() => openEmail(item.email)}>
        <Icon name="comment" size={20} color="#000" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Available (4)</Text> 
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.uid.toString()}
      />

      <Text style={styles.headingText1}>Unavailable (4)</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.uid.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 6,
    marginBottom: 4,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  headingText1: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 20,
    marginBottom: 10,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 10,
    elevation: 2, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginRight: 14,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  userStatus: {
    fontSize: 16,
    color: '#555555',
  },
  icon: {
    marginLeft: 'auto',
    marginTop: 4,
  },
});

export default TeamPage;
