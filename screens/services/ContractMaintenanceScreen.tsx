import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ContractMaintenanceScreen = () => {
  const navigation = useNavigation();
  const videoUri = "https://himfirstapps.com/Transervice-App/maintenance.mp4";

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
          <Image source={require('../../assets/mainte.jpg')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Contract Maintenance</Text>
            <Text style={styles.heading2}>Comprehensive Contract Maintenance Solutions for Your Fleet</Text>
            <Text style={styles.paragraph}>
              With over 50 years of experience in the industry, Transervice has established itself as a leader in providing top-notch fleet maintenance services. Our comprehensive contract maintenance solutions are designed to keep your fleet running smoothly, allowing you to focus on what matters most – your business.
            </Text>

            <Text style={styles.heading2}>Why Choose Transervice for Contract Maintenance?</Text>
            <Text style={styles.paragraph}>
              At Transervice, we understand the critical importance of maintaining a reliable fleet. Our contract maintenance programs are designed to meet the unique needs of your operation, whether you manage a small fleet of specialized vehicles or a large, diverse fleet across multiple locations. By partnering with us, your organization will enjoy numerous advantages that you can’t find anywhere else.
            </Text>

            <Text style={styles.heading2}>Contract Maintenance Solutions from Transervice</Text>
            <Text style={styles.paragraph}>
              • Specification Engineering and Configuration Assistance: Expert guidance to optimize your fleet’s specifications for maximum efficiency.
              • On-Site Service Facilities: Managed by certified maintenance personnel and equipped with state-of-the-art shop equipment and diagnostic tools.
              • 24/7/365 Emergency Roadside Service: Nationwide coverage ensures prompt assistance to minimize downtime and get your drivers back on the road swiftly.
              • Equipment Inspections and Compliance Assistance: Ensure compliance with DOT, OSHA, and EPA regulations through meticulous equipment inspections and expert guidance.
              • Warranty Management: Detailed management of warranty recovery down to the individual component level, ensuring cost-efficiency and operational continuity.
              Experience tailored solutions and reliable support for your fleet management needs with Transervice.
            </Text>

            <Text style={styles.heading2}>Benefits of Contract Maintenance from Transervice</Text>

            <Text style={styles.heading3}>Customized Maintenance Programs</Text>
            <Text style={styles.paragraph}>
              Our contract maintenance services are fully customizable to fit your specific requirements. From routine inspections to major repairs, we offer comprehensive solutions that keep your fleet operating at peak performance.
            </Text>

            <Text style={styles.heading3}>Proactive Maintenance Approach</Text>
            <Text style={styles.paragraph}>
              Preventative maintenance is key to reducing unexpected breakdowns and costly repairs. Our proactive approach ensures that your vehicles receive regular inspections and necessary upkeep, helping you avoid downtime and maintain compliance with industry regulations.
            </Text>

            <Text style={styles.heading3}>Experienced Technicians and Advanced Technology</Text>
            <Text style={styles.paragraph}>
              Our team of skilled technicians is equipped with the latest diagnostic tools and technology to deliver efficient and effective maintenance services. We leverage data-driven insights to identify potential issues before they escalate, ensuring optimal fleet performance.
            </Text>

            <Text style={styles.heading3}>Streamlined Operations and Cost Savings</Text>
            <Text style={styles.paragraph}>
              By outsourcing your fleet maintenance to Transervice, you can streamline your operations and reduce administrative burden. Our efficient processes and centralized billing system simplify management, while our competitive pricing helps you control costs and improve budget predictability.
            </Text>

            <Text style={styles.heading3}>Commitment to Safety and Compliance</Text>
            <Text style={styles.paragraph}>
              Safety is our top priority. We adhere to strict safety standards and compliance regulations to ensure that your fleet operates safely and within legal guidelines. You can trust Transervice to maintain the integrity and reliability of your vehicles at all times.
            </Text>

            <Text style={styles.heading2}>Additional Benefits of Partnering with Transervice</Text>
            <Text style={styles.paragraph}>
              • Equipment Life-Cycle Analysis: Strategic insights to maximize equipment longevity and performance.
              • Fuel Management and Reporting: Streamlined fuel tracking and tax reporting for cost efficiency.
              • Driver Safety Programs: Proactive initiatives to enhance driver safety and reduce risks.
              • Efficient Collision Repair Management: Expert handling for collision repairs to minimize downtime.
              • Customized MHE Maintenance: Tailored maintenance programs to meet your specific material handling equipment needs.
              Experience proactive fleet management solutions with Transervice, ensuring operational excellence and cost-effectiveness.
            </Text>

            <Text style={styles.heading2}>Discover the Transervice Advantage</Text>
            <Text style={styles.paragraph}>
              Join leading companies across industries that rely on Transervice for superior contract maintenance solutions. Whether you need regular maintenance, emergency repairs, or fleet optimization services, we are here to support your business goals.
            </Text>

            <Text style={styles.heading2}>Contact Us Today</Text>
            <Text style={styles.paragraph}>
              Ready to experience the benefits of professional contract maintenance? Contact Transervice to schedule a consultation with one of our fleet management experts. Let us show you how our personalized approach to maintenance can benefit your fleet’s performance, reliability, and profitability.
              Partner with Transervice for reliable, efficient, and cost-effective contract maintenance solutions. Trust us to keep your vehicles on the road and your business moving forward.
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

// Styles are the same as ContractCarrierScreen
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

export default ContractMaintenanceScreen;
