import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HistoryScreen = () => {
  const navigation = useNavigation();

  const historyItems = [
    {
      date: '1969 - 1979',
      description: '1969 - Transervice signs its first contract servicing the New York 7UP fleet in New York, New Jersey, and Illinois.',
      image: require('../assets/logo.webp'),
      year: '1969',
    },
    {
      date: '1980 - 1989',
      description: '1980 - Expanded operations to include more regions.',
      image: require('../assets/logo.webp'),
      year: '1980',
    },
    // Add more items as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>A HISTORY OF SERVICE A TRADITION OF EXCELLENCE</Text>
      {historyItems.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <View style={styles.dateCard}>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
          <View style={styles.contentCard}>
            <Image source={item.image} style={styles.historyImage} />
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
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
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 20,
  },
  dateCard: {
    backgroundColor: '#F4C914',
    borderRadius: 100,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 2,
    padding: 20,
    margin: 10,
  },
  historyImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#000',
    paddingHorizontal: 20,
  },
  year: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#F4C914',
    color: '#000',
    padding: 16,
    marginTop: 20,
  },
});

export default HistoryScreen;