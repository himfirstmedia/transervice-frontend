import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FreightResourceScreen = () => {
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
          <Image source={require('../../assets/r4.png')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>What is Freight Management?</Text>
            <Text style={styles.body}>
              Whether you're handling a few shipments or coordinating an entire supply chain, understanding what freight management is can make all the difference. At its core, freight management involves overseeing and optimizing the transportation of freight, from selecting the best carriers to negotiating contracts and monitoring performance. By utilizing freight management services or opting for contract freight management, businesses can streamline their shipping processes, reduce costs, and improve delivery times.
            </Text>
            <View style={styles.divider} />
            <Text style={styles.subtitle}>The Components of Freight Management</Text>
            <Text style={styles.body}>
              Effective freight management involves a number of critical components that work together to provide seamless logistics. These include:
              
              <Text style={{fontWeight: 'bold'}}>Route Optimization</Text> – This involves determining the most cost-effective and time-efficient routes for transporting goods. By considering factors like distance, traffic conditions, and delivery schedules, we help you minimize fuel costs and improve overall operational efficiency.
              
              <Text style={{fontWeight: 'bold'}}>Carrier Selection</Text> – Choosing the right carriers is vital to ensure timely and reliable deliveries. With our industry knowledge and wide network of trusted carriers, we help match your shipments with the best available options. 
              
              <Text style={{fontWeight: 'bold'}}>Freight Tracking</Text> – Transparency is essential in modern freight management. By leveraging technology, we provide real-time tracking of your shipments so that you can stay updated on your cargo's status at every stage of its journey.
              
              <Text style={{fontWeight: 'bold'}}>Cost Management</Text> – A key goal of freight management is to reduce costs. With our strategic approach to route planning, carrier selection, and freight consolidation, we help you achieve significant savings while maintaining high service standards.
              
              <Text style={{fontWeight: 'bold'}}>Compliance and Documentation</Text> – Navigating through customs regulations and ensuring all necessary paperwork is in place can be challenging. Our team takes care of all compliance-related matters, ensuring that your shipments meet all necessary regulations.
            </Text>
            <Text style={styles.subtitle}>Contract Freight Management: A Customized Approach</Text>
            <Text style={styles.body}>
              For businesses looking for a more structured and long-term solution, contract freight management offers a customized approach. This service involves entering into a contract with a logistics provider like Transervice to handle your freight operations on an ongoing basis. It's ideal for companies that regularly ship large volumes of goods, as it provides predictable pricing, priority services, and more control over the supply chain.
              
              Our contract freight management services give you access to dedicated support, optimized routes, and exclusive carrier relationships. This arrangement helps businesses manage their logistics more efficiently and cost-effectively while scaling their operations.
            </Text>
            <Text style={styles.subtitle}>Why Choose Transervice for Freight Management?</Text>
            <Text style={styles.body}>
              At Transervice, we pride ourselves on offering comprehensive and flexible freight management services that cater to your specific business needs. Our experienced team of logistics professionals works closely with you to understand your unique requirements, optimize your supply chain, and reduce costs without sacrificing service quality. With our innovative solutions and advanced technology, we ensure that your goods are transported in the most efficient and reliable manner possible.
              
              By choosing Transervice, you gain access to:
              
              Proven expertise in freight management across various industries
              
              Cutting-edge technology for real-time shipment tracking
              
              A wide network of reliable carriers and partners
              
              A commitment to customer satisfaction and timely deliveries
            </Text>
            <Text style={styles.subtitle}>Integrating Freight Management Services Into Your Operations</Text>
            <Text style={styles.body}>
              If you're asking, "What is freight management?" or looking for reliable freight management services, Transervice is your trusted partner. We simplify your shipping operations and ensure that your freight needs are met with efficiency and reliability.
              
              Contact us today to learn how our freight management solutions can streamline your logistics and enhance your bottom line. Let us help you focus on what matters most – growing your business.
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

export default FreightResourceScreen;