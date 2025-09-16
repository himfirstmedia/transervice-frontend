import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Hide the header for this screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSend = () => {
    Alert.alert('Message Sent', 'Thank you for contacting us!');
    // Here you can add logic to send the message
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.scrollWrapper}>
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Fill out the form below to contact us</Text>
                  
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Message"
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={4}
            />
                  
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send Message</Text>
            </TouchableOpacity>
                  
            <Text style={styles.sectionTitle}>Contact Details</Text>
                  
            <View style={styles.contactCard}>
              <Text style={styles.contactTitle}>Customer Service</Text>
              <Text style={styles.contactInfo}>866.631.0445</Text>
            </View>
                  
            <View style={styles.contactCard}>
              <Text style={styles.contactTitle}>Email</Text>
              <Text style={styles.contactInfo}>inquiry@transervice.com</Text>
            </View>
                  
            <View style={styles.contactCard}>
              <Text style={styles.contactTitle}>Location</Text>
              <Text style={styles.contactInfo}>5 Dakota Dr, Lake Success, NY 11042</Text>
            </View>
                  
            <View style={styles.mapPlaceholder}>
              <Text>Map View</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4C914',
  },
  header: {
    backgroundColor: '#F4C914',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 25,
    color: '#000',
    marginLeft: 8,
  },
  scrollWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#F4C914',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#000',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    margin: 10,
    borderRadius: 12,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 16,
    marginTop: 4,
  },
  mapPlaceholder: {
    height: 250,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 16,
    marginBottom: 40,
  },
});

export default ContactUsScreen;