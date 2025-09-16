import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FullServiceLeasingResourceScreen = () => {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
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
          <Image source={require('../../assets/r3.jpg')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>What is Fleet Leasing and How Does It Work?</Text>
            <Text style={styles.body}>
              Did you know that if you buy or lease at least <Text style={styles.link} onPress={() => openLink('https://www.bts.gov/content/us-automobile-and-truck-fleets-use-thousands')}>ten vehicles</Text>, it is considered a commercial fleet? Businesses that require transportation for their services often turn to fleets, either of passenger cars or trucks, or both. The big question is always whether to buy or lease the fleet. For many companies, fleet leasing is the right choice. Read on to know why commercial fleet leasing can be the right option for your business.
            </Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>What is Fleet Leasing?</Text>
            <Text style={styles.body}>
              When you lease a fleet, you are making an arrangement between the owner of the fleet and your business. You will pay to use the fleet of vehicles for a set amount of time. Although the process is similar to renting a vehicle as a private citizen, there are some differences. The main one is that the lease lasts for a year or more and it involves two or more vehicles. The vehicles that make up the fleet can be trucks, passenger cars, cargo vans, semi trucks, and light duty trucks.
            </Text>
            <Text style={styles.subtitle}>Common Types of Fleet Leasing</Text>
            <Text style={styles.body}>
              There are two main types of fleet leasing arrangements available to businesses and it is important to know what each offers. Some fleet leasing companies have their own arrangements and contracts, but typically you can expect to choose from:
            </Text>
            <Text style={styles.subtitle}>1. Open-End Lease</Text>
            <Text style={styles.body}>
              These leases tend to last about a year and may continue beyond that on a month-to-month basis. You have maximum flexibility of how long you want to commit to the fleet with this kind of lease. You have to keep in mind that open-ended fleet leases usually do not include vehicle maintenance or repairs. They also have a clause, <Text style={styles.link} onPress={() => openLink('https://www.mass.gov/directive/directive-02-8-trac-leases')}>called TRAC</Text>, that makes the companies leasing the vehicles responsible for their defined resale value. If the resale value comes out to less than the defined value, the company that leased it will have to pay the difference.
            </Text>
            <Text style={styles.subtitle}>2. Closed-End Lease</Text>
            <Text style={styles.body}>
              For companies that want to own a full-time fleet but financial issues prevent them from doing so, this kind of lease can be the answer. With a closed-end lease, you can lease the fleet for three or more years. This kind of lease does not use TRAC, which means you can walk away at the end of the lease without worrying about meeting a sale value. Closed-end leases do cost a bit more than open-end ones, and they may have mileage restrictions.
            </Text>
            <Text style={styles.subtitle}>Benefits to Fleet Leasing</Text>
            <Text style={styles.body}>
              Buying a fleet will always be more expensive than leasing one. You do not need the kind of upfront capital when you lease as you would if you were buying the fleet. With some leases, maintenance and fleet management may be included. You will get all of the benefits of having a fleet of vehicles without the upfront capital you would need to purchase it.
            </Text>
            <Text style={styles.subtitle}>Think of Your Business</Text>
            <Text style={styles.body}>
              Having a fleet can allow your business to expand. Consider fleet leasing to minimize expenses and maximize profits. Contact us today for complete turn-key leasing solutions!
            </Text>

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
  divider: {
    height: 2,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default FullServiceLeasingResourceScreen;