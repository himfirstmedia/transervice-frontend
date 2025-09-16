import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AwardsScreen = () => {
  const navigation = useNavigation();

  const awards = [
    {
      title: 'Award 1',
      description: 'Description of award 1',
      image: require('../assets/logo.webp'),
    },
    {
      title: 'Award 2',
      description: 'Description of award 2',
      image: require('../assets/logo.webp'),
    },
    // Add more
  ];

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Our Awards</Text>
      {awards.map((award, index) => (
        <View key={index} style={styles.awardCard}>
          <Image source={award.image} style={styles.awardImage} />
          <View style={styles.awardTextContainer}>
            <Text style={styles.awardTitle}>{award.title}</Text>
            <Text style={styles.awardDescription}>{award.description}</Text>
          </View>
        </View>
      ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  awardCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    margin: 16,
    padding: 5,
    alignItems: 'center',
  },
  awardImage: {
    width: 60,
    height: 60,
    margin: 20,
  },
  awardTextContainer: {
    flex: 1,
  },
  awardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  awardDescription: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default AwardsScreen;