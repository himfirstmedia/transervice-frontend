import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    Alert.alert('Message Sent', 'Thank you for contacting us!');
    // Here you can add logic to send the message
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
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
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backText: {
    fontSize: 20,
    color: '#F4C914',
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
  },
});

export default ContactUsScreen;