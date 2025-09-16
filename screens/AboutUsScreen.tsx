import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AboutUsScreen = () => {
  const navigation = useNavigation();

  // Hide the header for this screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
          <Image source={require('../assets/about_img.webp')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.subtitle}>Over 50 years of innovative solutions</Text>
            <Text style={styles.quote}>
              "Our passion towards our customers' business and willingness to be flexible in our partnerships is transparent. We will always figure out a way to get to a yes."
            </Text>
            <Text style={styles.ceo}>-Gregg Nierenberg, CEO</Text>
            <Text style={styles.text}>
              For over 50 years, many of North America's leading companies have put their transportation needs and reputations in the hands of the trusted pros at Transervice.
            </Text>
            <Text style={styles.text}>
              Based in Lake Success, New York, Transervice currently manages approximately 25,000 pieces of equipment in 135+ regional and local facilities across North America. Our workforce is some 1,200-strong, including over 1,000 drivers and technicians.
            </Text>
            <Text style={styles.missionTitle}>Mission statement</Text>
            <Text style={styles.text}>
              Our mission at Transervice is to provide our customers with professional services on the most cost-effective basis.
            </Text>
            <Text style={styles.text}>
              Recognizing the significant contributions that come from the diversity of individuals and ideas, the knowledge, dedication, teamwork, and constant improvement of every employee is the foundation of our continued success.
            </Text>
            <Text style={styles.text}>
              Together, we can grow, providing a better future for our customers and our company.
            </Text>
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
  topImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 8,
  },
  quote: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 8,
  },
  ceo: {
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  text: {
    color: '#000',
    marginBottom: 8,
    lineHeight: 20,
  },
  missionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default AboutUsScreen;