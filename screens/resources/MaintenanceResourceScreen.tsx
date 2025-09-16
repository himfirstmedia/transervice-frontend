import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const MaintenanceResourceScreen = () => {
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
          <Image source={require('../../assets/r2.jpg')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>What is Fleet Maintenance? Everything You Need to Know</Text>
            <Text style={styles.body}>
              Did you know that poorly maintained engines and tires can consume <Text style={styles.link} onPress={() => openLink('https://learn.eartheasy.com/guides/fuel-efficient-driving/')}>50% more fuel</Text>? That means more stops for diesel and less time out on the road. This increases a company's costs and reduces the time they have to make profits. This is just one of the reasons why regular fleet maintenance is crucial for continued productivity and profits. Preventative maintenance on your fleet of vehicles reduces the chance of unexpected breakdowns. Below, we'll give you more reasons why fleet maintenance is so important.
            </Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>Lower Costs</Text>
            <Text style={styles.body}>
              It may seem that fleet maintenance costs actually increase how much you're spending but, it is worth it in the long run. Compare the cost of maintenance to the cost of having to replace an entire engine or vehicle. You'll see that fleet maintenance costs are investments that help lower overall repair costs.

              Regular fleet maintenance doesn't only lower the cost of repairing company vehicles, it also reduces operational costs. If a vehicle's fuel consumption increases by 50%, that means the fuel costs also increase by 50%. The vehicle has also decreased its drive time by 50%. A fleet that is operating with healthy engines is operating efficiently. This saves in fuel costs and helps to retain a higher resale value for the vehicles.
            </Text>
            <Text style={styles.subtitle}>Better Inspections</Text>
            <Text style={styles.body}>
              The FMCSA conducts roadside inspections of vehicles throughout the year. In 2019, <Text style={styles.link} onPress={() => openLink('https://www.cvsa.org/news/2019-roadcheck-results/')}>7.7% of vehicles</Text> got stopped in out-of-service status for failing their inspections. The top 3 contributors to failed inspections were braking systems, tires and wheels, and brake adjustments. These are all prevented with regular fleet maintenance.

              Fleet maintenance is also essential for all the other inspections your vehicle will be subject to. The Department of Transportation, OSHA, and the EPA all have different serious requirements for fleet vehicles. Regular fleet maintenance makes sure the vehicles are compliant with any and all regulations these agencies present.

              Passing inspections contributes to a better score for your company and fleet. It shows the association and insurance companies that you utilize fleet maintenance equipment. The vehicles are do not pose a significant risk as they are properly maintained.
            </Text>
            <Text style={styles.subtitle}>Increased Safety</Text>
            <Text style={styles.body}>
              Regular fleet maintenance ensures that the vehicle is ready and safe to be out on the road. It increases the safety of drivers as well as the safety of all those on the roads. It also allows fleet managers to better manage risks. They will be proactive in diagnosing potential problems that could occur rather than reactive to problems that led to a breakdown or even worse, an accident. Minimizing risk is a great way to maximize profits.
            </Text>
            <Text style={styles.subtitle}>Interested in Fleet Maintenance?</Text>
            <Text style={styles.body}>
              Setting up prevention fleet maintenance services is essential for lowering costs, passing inspections, and increasing overall safety. Today, fleet maintenance services even offer data analysis for further insight into the vehicle and for better solutions. Contact us today to learn more about how fleet maintenance can help your company. We offer a tradition of excellence that's always at your service, at your location, across the continent.
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

export default MaintenanceResourceScreen;