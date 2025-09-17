import React from 'react';
import { Video } from 'expo-av';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ContractCarrierScreen = () => {
  const navigation = useNavigation();
  const videoUri = "https://himfirstapps.com/Transervice-App/carriage.mp4";

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
          <Image source={require('../../assets/con1.jpg')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Dedicated Contract Carriage</Text>
            <Text style={styles.paragraph}>
              When it comes to your business or brand’s logistics, every detail counts and efficiency is key. This is why businesses are constantly seeking effective and reliable transportation solutions. Dedicated contract carriage is one such solution, providing organizations with tailored transportation services designed to meet specific operational needs. At Transervice, we specialize in dedicated contract services, helping our clients enhance their supply chain efficiency and reduce transportation costs.
            </Text>

            <Text style={styles.heading2}>What is Dedicated Contract Carriage?</Text>
            <Text style={styles.paragraph}>
              Dedicated contract carriage involves providing tailored transportation services that meet the specific needs of your business. Unlike traditional freight services, dedicated contract carriers offer a committed fleet and resources exclusively for your operation. This allows for a more consistent and predictable service, enhancing your overall supply chain performance.
            </Text>

            <Text style={styles.heading2}>Key Benefits of Dedicated Contract Carriage</Text>

            <Text style={styles.heading3}>1. Customized Solutions</Text>
            <Text style={styles.paragraph}>
              Every business has different requirements. Our dedicated contract services are customizable to fit your operational needs, whether you require specialized equipment, specific delivery schedules, or unique routing.
            </Text>

            <Text style={styles.heading3}>2. Cost Efficiency</Text>
            <Text style={styles.paragraph}>
              By leveraging our dedicated contract carriers, you can achieve significant cost savings. We help you avoid the expenses of maintaining your fleet while still delivering high-quality service.
            </Text>

            <Text style={styles.heading3}>3. Increased Reliability</Text>
            <Text style={styles.paragraph}>
              Our dedicated teams prioritize your cargo, ensuring timely deliveries and minimizing disruptions. With a dedicated fleet, you can count on our consistent performance that aligns with your business goals.
            </Text>

            <Text style={styles.heading3}>4. Enhanced Flexibility</Text>
            <Text style={styles.paragraph}>
              Business demands can change rapidly. Our dedicated contract carriage solutions are designed to adapt to your evolving logistics needs, providing the agility necessary to respond to market fluctuations.
            </Text>

            <Text style={styles.heading3}>5. Focus on Core Competencies</Text>
            <Text style={styles.paragraph}>
              By outsourcing your transportation logistics to Transervice, you can concentrate on what you do best—growing your business. Our expert team manages every aspect of your transportation, allowing you to devote more resources to your core operations.
            </Text>

            <Text style={styles.heading2}>Why Choose Transervice?</Text>
            <Text style={styles.paragraph}>
              Choosing Transervice as your partner for dedicated contract carriage means more than just transportation; it means gaining a strategic ally in your logistics journey. Here’s why we stand out:
              **Experienced Team:** Our professionals have years of experience in the logistics industry. We understand the nuances of transportation and work diligently to deliver solutions that enhance your operational efficiency.
              **Advanced Technology:** We leverage cutting-edge technology to monitor shipments, optimize routes, and enhance communication. This ensures that you are always in the loop regarding the status of your freight.
              **Safety and Compliance:** At Transervice, safety is paramount. Our dedicated contract carriers are fully compliant with industry regulations, ensuring that your cargo is handled with the utmost care and in accordance with all safety standards.
              **Scalability:** As your business grows, so do your logistics needs. Our dedicated contract services are scalable, meaning we can adjust our solutions to match your increasing demands without sacrificing quality or performance.
            </Text>

            <Text style={styles.heading2}>Industries We Serve</Text>
            <Text style={styles.paragraph}>
              Our dedicated contract carriage solutions cater to a variety of industries, including:
              **Retail:** Streamline your supply chain with reliable and timely deliveries to keep your shelves stocked.
              **Manufacturing:** Ensure just-in-time deliveries to enhance production efficiency and reduce downtime.
              **Food and Beverage:** Maintain product quality and safety with dedicated transport solutions tailored for perishables.
              **Healthcare:** Count on us for timely deliveries of sensitive medical supplies and equipment.
            </Text>

            <Text style={styles.heading2}>Partner with Transervice Today for Dedicated Contract Carriage</Text>
            <Text style={styles.paragraph}>
              If you’re looking for a logistics partner that offers comprehensive dedicated contract services, look no further than Transervice. Our commitment to excellence, reliability, and customer satisfaction sets us apart in the industry.
              Ready to take your transportation to the next level? Contact us today to learn more about our dedicated contract carriage solutions and how we can tailor them to meet your specific needs. Let Transervice be your dedicated contract carrier, providing you with peace of mind and the efficiency you need to thrive in today’s competitive marketplace.
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

export default ContractCarrierScreen;
