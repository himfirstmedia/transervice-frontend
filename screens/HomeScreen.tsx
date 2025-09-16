import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const menuItems = [
    { title: 'About Us', action: () => navigation.navigate('About Us') },
    { title: 'Company History', action: () => navigation.navigate('History') },
    { title: 'Our Team', action: () => navigation.navigate('Teams') },
    { title: 'Industry Recognition', action: () => navigation.navigate('Awards') },
    { title: 'Contract Carrier', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/contract-carrier') },
    { title: 'Contract Maintenance', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/contract-maintenance') },
    { title: 'Full-Service Leasing', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/full-service-leasing') },
    { title: 'Freight Management', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/freight-management') },
    { title: 'Customer Service', action: () => navigation.navigate('ContactUs') },
    { title: 'Careers', action: () => WebBrowser.openBrowserAsync('https://www.transervicecareers.com') },
    { title: 'Insights', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/insights') },
  ];

  return (
    <View style={{flex:1}}>
      <ScrollView style={styles.container}>
      <Image source={require('../assets/logo.webp')} style={styles.logo} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Portal</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactUs')}>
        <Text style={styles.buttonText}>Customer Service</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.menuText}>☰ Page Menu</Text>
      </TouchableOpacity>
      
      <View style={styles.overlayContainer}>
        <Image source={require('../assets/back.jpg')} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Transportation Solutions To Meet Your Unique Needs</Text>
        </View>
      </View>
      
      <Text style={styles.heading}>The Transervice Difference</Text>
      <Text style={styles.description}>
        With over 50 years of industry experience and trusted by some of the most well-known brands in the U.S., Transervice provides turnkey logistics solutions you can count on.
      </Text>
      
      <View style={styles.stats}>
        <Text>Locations Across North America: 135+</Text>
        <Text>Dedicated Employees: 1200+</Text>
        <Text>Managed Units: 25,000+</Text>
      </View>
      
      <Text style={styles.sectionHeading}>About Us</Text>
      <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('History')}>
          <Image source={require('../assets/logo.webp')} style={styles.cardImage} />
          <Text style={styles.cardText}>Company History</Text>
        </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Awards')}>
          <Image source={require('../assets/logo.webp')} style={styles.cardImage} />
          <Text style={styles.cardText}>Industry Recognition</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionHeading}>Our Services</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/carri.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Contract Carrier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/carri.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Contract Maintenance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/carri.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Full-Service Leasing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/carri.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Freight Management</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionHeading}>Resources</Text>
      <TouchableOpacity style={styles.resourceCard}>
        <Image source={require('../assets/splashlogo.png')} style={styles.resourceImage} />
        <Text style={styles.resourceText}>What is Dedicated Contract Carriage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resourceCard}>
        <Image source={require('../assets/splashlogo.png')} style={styles.resourceImage} />
        <Text style={styles.resourceText}>What is Dedicated Contract Maintenance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resourceCard}>
        <Image source={require('../assets/splashlogo.png')} style={styles.resourceImage} />
        <Text style={styles.resourceText}>What is Full-Service Leasing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resourceCard}>
        <Image source={require('../assets/splashlogo.png')} style={styles.resourceImage} />
        <Text style={styles.resourceText}>What is Freight Management</Text>
      </TouchableOpacity>
    </ScrollView>
    <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.menuItem} onPress={() => { item.action(); setModalVisible(false); }}>
              <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 30,
  },
  logo: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#F4C914',
    padding: 16,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  menuButton: {
    backgroundColor: '#ddd',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
  },
  overlayContainer: {
    height: 250,
    marginTop: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    color: '#F4C914',
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    padding: 8,
  },
  stats: {
    padding: 20,
  },
  sectionHeading: {
    fontSize: 24,
    color: '#F4C914',
    fontWeight: 'bold',
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
    padding: 16,
    alignItems: 'center',
    width: '40%',
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  resourceCard: {
    backgroundColor: '#A3A393',
    borderRadius: 50,
    padding: 8,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resourceImage: {
    width: 40,
    height: 40,
    margin: 16,
  },
  resourceText: {
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeText: {
    fontSize: 18,
    color: '#F4C914',
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
});

export default HomeScreen;