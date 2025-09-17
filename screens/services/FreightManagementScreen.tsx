import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FreightManagementScreen = () => {
  const navigation = useNavigation();

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
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
          <Image source={require('../../assets/frei.png')} style={styles.topImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Freight Management</Text>
            <Text style={styles.heading2}>REDEFINING THE LOGISTICS PARTNERSHIP</Text>
            <Text style={styles.paragraph}>
              We work with you to customize and execute a freight plan that works for your organization. Whether we are moving one shipment or managing your entire department, we emphasize efficiency and cost savings. In addition to executing a traditional shipment, we offer a number of logistics services such as: carrier management, carrier performance, supply chain optimization, route and mode optimization and bid management. The results of a well executed transportation strategy will have positive effects on your company’s production and distribution leading to greater satisfaction among your customers and suppliers.
            </Text>

            <Text style={styles.paragraph}>
              Click <Text style={styles.linkText} onPress={() => openLink('https://www.shiptis.com/')}>here</Text> to learn more about our Freight Management Solutions.
            </Text>

            <Text style={styles.heading2}>Freight Management FAQ:</Text>

            <Text style={styles.heading3}>What is a freight management system?</Text>
            <Text style={styles.paragraph}>
              A freight management system is the backbone of efficient logistics operations, enabling businesses to streamline the movement of goods from origin to destination. From initial planning and route optimization to carrier selection and tracking, our system ensures that your freight moves seamlessly across the supply chain.
            </Text>

            <Text style={styles.heading3}>Why is freight management an important part of business?</Text>
            <Text style={styles.paragraph}>
              Effective freight management ensures that shipments arrive on schedule and in optimal condition, enhancing overall service reliability. As businesses grow and expand, a well-structured freight management strategy can easily adapt to evolving demands, ensuring seamless operations.
            </Text>

            <Text style={styles.heading3}>What is the role of freight management in logistics?</Text>
            <Text style={styles.paragraph}>
              Freight management involves meticulous planning and execution to optimize transportation resources, including trucks, carriers, and routes. Effective freight management enhances operational efficiency by eliminating inefficiencies and bottlenecks in the transportation process.
            </Text>

            <Text style={styles.heading3}>What is the difference between logistics and freight management?</Text>
            <Text style={styles.paragraph}>
              Logistics encompasses the total process of planning, executing, and handling the efficient flow of goods, services, and data from the point of origin to consumption. Freight management specifically focuses on the transportation aspect within logistics. It involves the coordination and optimization of freight movement, including selecting carriers, negotiating rates, managing shipments, and ensuring timely delivery.
            </Text>

            <Text style={styles.heading3}>What is the freight management process flow?</Text>
            <Text style={styles.paragraph}>
              At Transervice Logistics, our freight management process flow begins with meticulous planning and analysis, followed by strategic carrier selection, shipment booking, and advanced tracking for real-time visibility. We continuously monitor performance, leverage analytics for optimization, and deliver tailored solutions to enhance your supply chain efficiency and drive business success.
            </Text>

            <Text style={styles.heading2}>Freight Services:</Text>

            <View style={styles.card}>
              <Image source={require('../../assets/van.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Dry Van and Less-Than-Truckload</Text>
              <Text style={styles.cardText}>
                We work with our clients to provide the right type of dry van for their truckload or less-than-truckload shipments. Whether you require load bars, food grade, high cube, plate trailer, or even hazmat - we have you covered.
              </Text>
            </View>

            <View style={styles.card}>
              <Image source={require('../../assets/temp.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Temperature Control</Text>
              <Text style={styles.cardText}>
                For shipments requiring specific temperature we utilize trailers with refrigeration and heat capabilities. An ideal option for customers looking to move perishable food products or chemicals that require special care.
              </Text>
            </View>

            <View style={styles.card}>
              <Image source={require('../../assets/flat.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Flatbed and Step-Deck</Text>
              <Text style={styles.cardText}>
                We offer truckload and less-than-truckload services for flatbed and step deck shipments. We commonly move shipments requiring tarps, headboard, chains, and both 48' and 53' trailer lengths. We can also accommodate special project shipments requiring over-dimension and heavy haul support.
              </Text>
            </View>

            <View style={styles.card}>
              <Image source={require('../../assets/liq.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Liquid Bulk Service</Text>
              <Text style={styles.cardText}>
                Bulk cargo is commodity cargo that is transported unpackaged in large quantities. It refers to material in either liquid or granular, particulate form, as a mass of relatively small solids, such as petroleum/crude oil, grain, coal, or gravel. Transervice offers both the transportation of liquid and dry bulk.
              </Text>
            </View>

            <View style={styles.card}>
              <Image source={require('../../assets/inte.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Intermodal Rail</Text>
              <Text style={styles.cardText}>
                Are you looking for a more economical and environmentally friendly transportation option? If transit time is not a concern, we suggest intermodal as a dry van replacement. We partner with rail companies to offer our clients a competitive intermodal option.
              </Text>
            </View>

            <View style={styles.card}>
              <Image source={require('../../assets/ware.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Warehouse and Fulfillment</Text>
              <Text style={styles.cardText}>
                We use our warehouse and storage options to consolidate your freight or store your shipment until your delivery window becomes available. We only cross dock shipments at your request. Also if you need to clear inventory, we can become another spot for fulfillment.
              </Text>
            </View>

            <View style={styles.card}>
              <Image source={require('../../assets/freighttt.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Freight Management and Technology</Text>
              <Text style={styles.cardText}>
                We provide both onsite and remote management of your freight. Our customized technology, industry experience and wealth of knowledge allows us to solve supply chain challenges across any industry. Contact us today to learn how we can become your next logistics and supply chain partner!
              </Text>
            </View>

            <View style={styles.card}>
              <Image source={require('../../assets/trade.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Trade Show Freight and Logistics</Text>
              <Text style={styles.cardText}>
                Shipments to trade shows and conventions often require extra planning.We offer to help you every step of the way by answering questions and calling out the important details to make your shipping as smooth and easy as possible. Please see frequently asked questions about trade show freight and trade show logistics.
              </Text>
            </View>

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
  linkText: {
    color: '#F4C914',
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#000',
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
});

export default FreightManagementScreen;