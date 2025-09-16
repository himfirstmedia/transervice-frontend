import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Modal, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';

interface MenuSection {
  title: string;
  items: MenuItem[];
  isExpanded: boolean;
}

interface MenuItem {
  title: string;
  action: () => void;
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [historyCardPressed, setHistoryCardPressed] = useState(false);
  const [awardsCardPressed, setAwardsCardPressed] = useState(false);
  
  const [menuSections, setMenuSections] = useState<MenuSection[]>([
    {
      title: 'About',
      isExpanded: false,
      items: [
        { title: 'About Us', action: () => navigation.navigate('About Us') },
        { title: 'Company History', action: () => navigation.navigate('History') },
        { title: 'Our Team', action: () => navigation.navigate('Teams') },
        { title: 'Industry Recognition', action: () => navigation.navigate('Awards') },
      ]
    },
    {
      title: 'Services',
      isExpanded: false,
      items: [
        { title: 'Dedicated Contract Carriage', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/contract-carrier') },
        { title: 'Contract Maintenance', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/contract-maintenance') },
        { title: 'Full-Service Leasing', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/full-service-leasing') },
        { title: 'Freight Management', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/freight-management') },
      ]
    },
    {
      title: 'Insights',
      isExpanded: true,
      items: [
        { title: 'Insights', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/insights') },
        { title: 'Customer Spotlights', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/customer-spotlights') },
      ]
    }
  ]);

  // Add individual menu items that are not part of sections
  const individualMenuItems = [
    { title: 'Careers', action: () => WebBrowser.openBrowserAsync('https://www.transervicecareers.com') },
    { title: 'Contact', action: () => navigation.navigate('ContactUs') },
    { title: 'Freight Tracking', action: () => WebBrowser.openBrowserAsync('https://www.transervice.com/freight-tracking') },
  ];

  // Hide the header for this screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const toggleSection = (sectionIndex: number) => {
    const updatedSections = menuSections.map((section, index) => 
      index === sectionIndex 
        ? { ...section, isExpanded: !section.isExpanded }
        : section
    );
    setMenuSections(updatedSections);
  };

  const handleMenuItemPress = (action: () => void) => {
    action();
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
      <Image source={require('../assets/logo.webp')} style={styles.logo} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Portal</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactUs')}>
        <Text style={styles.buttonText}>Customer Service</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuButton} onPress={() => setModalVisible(!modalVisible)}>
        <Ionicons name="menu" size={20} color="#000" style={styles.menuIcon} />
        <Text style={styles.menuText}>Page Menu</Text>
      </TouchableOpacity>
      
      {modalVisible && (
        <View style={styles.dropdownContainer}>
          {menuSections.map((section, index) => (
            <View key={index} style={styles.menuSection}>
              <TouchableOpacity
                style={styles.menuSectionHeader}
                onPress={() => toggleSection(index)}
              >
                <Text style={styles.menuSectionTitle}>{section.title}</Text>
                <Ionicons
                  name={section.isExpanded ? "close" : "add"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
        
              {section.isExpanded && (
                <View style={styles.menuSectionContent}>
                  {section.items.map((menuItem, itemIndex) => (
                    <TouchableOpacity
                      key={itemIndex}
                      style={styles.menuItem}
                      onPress={() => handleMenuItemPress(menuItem.action)}
                    >
                      <Text style={styles.menuItemText}>{menuItem.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
          {individualMenuItems.map((item, index) => (
            <TouchableOpacity
              key={`individual-${index}`}
              style={styles.individualMenuItem}
              onPress={() => handleMenuItemPress(item.action)}
            >
              <Text style={styles.individualMenuItemText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      
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
        <Text style={styles.statText}>
          Locations Across North America: <Text style={styles.statNumber}>135+</Text>
        </Text>
        <Text style={styles.statText}>
          Dedicated Employees: <Text style={styles.statNumber}>1200+</Text>
        </Text>
        <Text style={styles.statText}>
          Managed Units: <Text style={styles.statNumber}>25,000+</Text>
        </Text>
      </View>
      
      <Text style={styles.sectionHeading}>About Us</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity 
          style={[styles.card, historyCardPressed && styles.cardPressed]} 
          onPress={() => navigation.navigate('History')}
          onPressIn={() => setHistoryCardPressed(true)}
          onPressOut={() => setHistoryCardPressed(false)}
        >
          <Image source={require('../assets/trade.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Company History</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.card, awardsCardPressed && styles.cardPressed]} 
          onPress={() => navigation.navigate('Awards')}
          onPressIn={() => setAwardsCardPressed(true)}
          onPressOut={() => setAwardsCardPressed(false)}
        >
          <Image source={require('../assets/trophy.jpg')} style={styles.cardImage} />
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
          <Image source={require('../assets/contm.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Contract Maintenance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/full.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Full-Service Leasing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/frieght.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Freight Management</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionHeading}>Resources</Text>
      <TouchableOpacity style={styles.resourceCard} onPress={() => navigation.navigate('CarriageResource')}>
        <Image source={require('../assets/splashlogo.png')} style={styles.resourceImage} />
        <Text style={styles.resourceText}>What is Dedicated Contract Carriage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resourceCard} onPress={() => navigation.navigate('MaintenanceResource')}>
        <Image source={require('../assets/splashlogo.png')} style={styles.resourceImage} />
        <Text ellipsizeMode="tail" numberOfLines={2}  style={styles.resourceText}>What is Dedicated Contract Maintenance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resourceCard} onPress={() => navigation.navigate('FullServiceLeasingResource')}>
        <Image source={require('../assets/splashlogo.png')} style={styles.resourceImage} />
        <Text style={styles.resourceText}>What is Full-Service Leasing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resourceCard} onPress={() => navigation.navigate('FreightResource')}>
        <Image source={require('../assets/splashlogo.png')} style={styles.resourceImage} />
        <Text style={styles.resourceText}>What is Freight Management</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 1,
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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menuIcon: {
    marginRight: 8,
  },
  menuText: {
    fontSize: 18,
    color: '#000',
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
  statText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight:'bold',
    paddingRight:10
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4C914',
    paddingLeft:20,
    
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardPressed: {
    backgroundColor: '#f8f8f8',
    elevation: 2,
    shadowOpacity: 0.15,
    transform: [{ scale: 0.98 }],
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
    flexWrap:'wrap',
    flexShrink: 1, 
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 0,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },
  menuSection: {
    marginBottom: 8,
  },
  menuSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuSectionTitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
  },
  menuSectionContent: {
    backgroundColor: '#fff',
  },
  menuItem: {
    padding: 15,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'left',
  },
  individualMenuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  individualMenuItemText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
  },
});

export default HomeScreen;