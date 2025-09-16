import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Coordinates for Lake Success, NY office
  const officeLocation = {
    latitude: 40.7736,
    longitude: -73.7192,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  // Hide the header for this screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSend = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://himfirstapps.com/Transervice-App/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (response.ok) {
        Alert.alert('Message Sent', 'Thank you for contacting us!');
        // Clear form after sending
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        const errorText = await response.text();
        Alert.alert('Error', `Failed to send message: ${errorText || 'Server error'}`);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An unexpected error occurred while sending the message.');
    }
  };

  const openInMaps = () => {
    const address = '5 Dakota Dr, Lake Success, NY 11042';
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    Linking.openURL(url);
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
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Fill out the form below to contact us</Text>
                  
            <TextInput
              style={styles.input}
              placeholder="Name *"
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
              placeholder="Email *"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Message *"
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
              <View style={styles.contactHeader}>
                <Ionicons name="call" size={20} color="#F4C914" style={styles.contactIcon} />
                <Text style={styles.contactTitle}>Customer Service</Text>
              </View>
              <TouchableOpacity onPress={() => Linking.openURL('tel:8666310445')}>
                <Text style={[styles.contactInfo, styles.linkText]}>866.631.0445</Text>
              </TouchableOpacity>
            </View>
                  
            <View style={styles.contactCard}>
              <View style={styles.contactHeader}>
                <Ionicons name="mail" size={20} color="#F4C914" style={styles.contactIcon} />
                <Text style={styles.contactTitle}>Email</Text>
              </View>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:inquiry@transervice.com')}>
                <Text style={[styles.contactInfo, styles.linkText]}>inquiry@transervice.com</Text>
              </TouchableOpacity>
            </View>
                  
            <View style={styles.contactCard}>
              <View style={styles.contactHeader}>
                <Ionicons name="location" size={20} color="#F4C914" style={styles.contactIcon} />
                <Text style={styles.contactTitle}>Location</Text>
              </View>
              <TouchableOpacity onPress={openInMaps}>
                <Text style={[styles.contactInfo, styles.linkText]}>5 Dakota Dr, Lake Success, NY 11042</Text>
              </TouchableOpacity>
            </View>
                  
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={officeLocation}
                showsUserLocation={false}
                showsMyLocationButton={false}
                zoomEnabled={true}
                scrollEnabled={true}
                pitchEnabled={false}
                rotateEnabled={false}
              >
                <Marker
                  coordinate={{
                    latitude: officeLocation.latitude,
                    longitude: officeLocation.longitude,
                  }}
                  title="Transervice Office"
                  description="5 Dakota Dr, Lake Success, NY 11042"
                />
              </MapView>
              <TouchableOpacity style={styles.mapOverlay} onPress={openInMaps}>
                <View style={styles.mapButton}>
                  <Ionicons name="navigate-outline" size={20} color="#F4C914" />
                  <Text style={styles.mapButtonText}>Open in Maps</Text>
                </View>
              </TouchableOpacity>
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
    fontSize: 16,
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
    fontWeight: 'bold',
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
  contactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactIcon: {
    marginRight: 12,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 16,
    marginTop: 4,
    marginLeft: 32,
  },
  linkText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  mapContainer: {
    height: 250,
    margin: 10,
    borderRadius: 16,
    marginBottom: 40,
    overflow: 'hidden',
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapButtonText: {
    marginLeft: 5,
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ContactUsScreen;