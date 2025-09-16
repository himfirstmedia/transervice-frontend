import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CarriageResourceScreen = () => {
  const navigation = useNavigation();

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
          <Image source={require('../../assets/r1.jpg')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>What is Dedicated Contract Carriage?</Text>
            <Text style={styles.body}>
              When it comes to your business or brand's logistics, every detail counts and efficiency is key. This is why businesses are constantly seeking effective and reliable transportation solutions. Dedicated contract carriage is one such solution, providing organizations with tailored transportation services designed to meet specific operational needs. At Transervice, we specialize in dedicated contract services, helping our clients enhance their supply chain efficiency and reduce transportation costs.
            </Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>Understanding Dedicated Contract Carriage</Text>
            <Text style={styles.body}>
              Dedicated contract carriage involves the use of dedicated contract carriers that operate a fleet specifically for one customer or a group of customers. This model allows businesses to have control over their transportation operations while outsourcing the management and logistics to a specialized provider. Dedicated contract carriage gives you a reliable transportation solution and a strategic partner committed to your success.
            </Text>
            <Text style={styles.subtitle}>The Core Benefits of Dedicated Contract Carriage</Text>
            <Text style={styles.body}>
              Every business is unique, and so are its transportation needs. Dedicated contract services are designed to fit the specific requirements of your operations, whether it's route optimization, load capacity, or scheduling.
            </Text>
            <Text style={styles.subtitle}>1. Reliability Redefined with Dedicated Contract Carriers</Text>
            <Text style={styles.body}>
              With dedicated contract carriage, reliability takes precedence. Operating a fleet solely dedicated to one client eliminates the risks of delays or disruptions inherent in shared resources. This reliability is especially crucial for businesses with time-sensitive shipments or stringent delivery schedules. This means timely deliveries and improved tracking, you can expect to see higher customer satisfaction.
            </Text>
            <Text style={styles.subtitle}>2. Dedicated Contract Service = Efficiency at Its Peak</Text>
            <Text style={styles.body}>
              Dedicated contract carriage optimizes efficiency by minimizing empty miles and optimizing routes. Transportation planners craft routes tailored to specific needs, reducing unnecessary stops and fuel consumption. This cuts operating costs and contributes to environmental sustainability by curbing carbon emissions.
            </Text>
            <Text style={styles.subtitle}>3. Control and Transparency is Easy with Dedicated Contract Carriage</Text>
            <Text style={styles.body}>
              Advanced tracking and monitoring systems give businesses unprecedented control and visibility over their shipments. Clients can access real-time information, ensuring transparency and accountability throughout the transportation process. Utilizing dedicated contract carriers can also help mitigate risks associated with transportation, such as delays, compliance issues, and vehicle maintenance. This allows you to focus on your core business operations while leaving logistics management to the experts.
            </Text>
            <Text style={styles.subtitle}>4. Flexibility and Scalability is Possible with Dedicated Contract Services</Text>
            <Text style={styles.body}>
              Dedicated contract carriage can easily adapt as your business grows or fluctuates. Whether you need to increase capacity during peak seasons or scale back during slower periods, dedicated contract services provide the flexibility you need.
            </Text>
            <Text style={styles.subtitle}>Why Choose Transervice for Dedicated Contract Carriage?</Text>
            <Text style={styles.body}>
              At Transervice, we pride ourselves on leading dedicated contract services. Here's why you should consider us for your logistics needs:
              
              <Text style={{fontWeight: 'bold'}}>Expertise and Experience:</Text> With years of industry experience, our team understands the intricacies of dedicated contract carriage. We leverage this expertise to provide solutions that drive efficiency and performance.
              
              <Text style={{fontWeight: 'bold'}}>Customized Approach:</Text> We don't believe in one-size-fits-all solutions. Our team works closely with you to understand your unique needs and develop a dedicated contract carriage plan that aligns with your business goals.
              
              <Text style={{fontWeight: 'bold'}}>State-of-the-Art Technology:</Text> Our advanced logistics technology ensures real-time tracking and management of your shipments. You'll have access to crucial data that helps inform decision-making and improve operational efficiency.
              
              <Text style={{fontWeight: 'bold'}}>Commitment to Safety:</Text> We prioritize safety in all our operations. Our dedicated contract carriers follow strict safety protocols and maintenance schedules, ensuring your goods are transported securely.
            </Text>
            <Text style={styles.subtitle}>How Dedicated Contract Carriage with Transervice Works</Text>
            <Text style={styles.body}>
              Implementing dedicated contract carriage with Transervice is a straightforward process:
              
              <Text style={{fontWeight: 'bold'}}>Needs Assessment:</Text> We begin with a thorough analysis of your transportation needs and operational challenges.
              
              <Text style={{fontWeight: 'bold'}}>Customized Proposal:</Text> Based on our assessment, we present a tailored proposal that outlines how our dedicated contract services can benefit your business.
              
              <Text style={{fontWeight: 'bold'}}>Implementation:</Text> Once you approve the proposal, we will deploy our dedicated fleet and integrate our services into your operations.
              
              <Text style={{fontWeight: 'bold'}}>Ongoing Management:</Text> Our team continually monitors performance, making adjustments as needed to ensure optimal efficiency and service levels.
            </Text>
            <Text style={styles.subtitle}>Embrace the Future of Logistics with Dedicated Contract Carriage from Transervice</Text>
            <Text style={styles.body}>
              Dedicated contract carriage is a strategic solution for businesses looking to enhance their logistics operations. By partnering with dedicated contract carriers like Transervice, you gain a reliable and cost-effective transportation solution tailored to your specific needs. Whether you're a small business or a large enterprise, our dedicated contract services can help streamline your supply chain and improve your overall operational efficiency
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
});

export default CarriageResourceScreen;