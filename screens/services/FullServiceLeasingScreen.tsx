import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FullServiceLeasingScreen = () => {
  const navigation = useNavigation();
  const videoUri = "https://himfirstapps.com/Transervice-App/fulls.mp4";

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
          <Image source={require('../../assets/fulls.jpg')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Full-Service Leasing</Text>
            <Text style={styles.heading2}>PRODUCES CUSTOMIZED, TURN-KEY SOLUTIONS</Text>
            <Text style={styles.paragraph}>
              Whether your needs are local, regional or interstate/interprovince-based, we’ll engineer a fully-customized, Full-Service Fleet Leasing Solution optimized to your requirements. No matter how large your fleet, cargo type, and final destination, you can count on Transervice to eliminate management headaches and the capitalization required to keep you on the move.
            </Text>

            <Text style={styles.heading2}>ALWAYS PREPARED, NEVER SHARED!</Text>
            <Text style={styles.paragraph}>
              Transervice understands that your business model and needs are unique. Service facilities and highly-trained maintenance personnel are assigned to your fleet exclusively.
            </Text>

            <Text style={styles.heading2}>OUR FULL-SERVICE FLEET LEASING SOLUTIONS INCLUDE:</Text>
            <Text style={styles.paragraph}>
              •Asset acquisition, so you have no capital investment.
              • Purchase of your existing fleet assets, if desired.
              • Engineering, configuration and selection of your fleet equipment.
              • Advantageous fleet pricing based on our national purchasing power.
              • Dedicated on-site service facilities staffed with management and certified maintenance personnel.
              • All necessary shop equipment and diagnostic tools, plus an inventory of key parts.
              • Preventative maintenance extends the operation of fleet equipment and lease terms, saving you money.
              • Digital tracking of all maintenance and repair.
              • 24/7/365 Nationwide Emergency Roadside Service get your drivers back on the road asap.
              • Compliance Expertise and Support Systems (DOT, OSHA, EPA).
              • Inspections, licensing, permitting, personal property taxes, and optional insurance.
            </Text>

            <Text style={styles.heading2}>ADDITIONAL SERVICES:</Text>
            <Text style={styles.paragraph}>
              • Computerized fleet analysis, equipment selection, and fleet right-sizing.
              • Fuel and fuel tax reporting.
              • Driver safety programs.
            </Text>
            <Video
              source={{ uri: videoUri }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay={false}
              isLooping={false}
              useNativeControls
              style={styles.videoPlayer}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={styles.contactButton}>
                <Text style={styles.contactButtonText}>Contact Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// Styles are the same
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
  scrollWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  contactButton: {
    backgroundColor: '#F4C914',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backText: {
    fontSize: 25,
    color: '#000',
    marginLeft: 8,
  },
  container: {
    flex: 1,
  },
  topImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  body: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  videoPlayer: {
    width: '100%',
    height: 220,
    marginVertical: 16,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
    color: '#000',
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#000',
  },
  heading3: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
    color: '#000',
  },
});

export default FullServiceLeasingScreen;