import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface TeamMember {
  name: string;
  title?: string;
  image?: any;
  description?: string;
  isHeader?: boolean;
  isExpandable?: boolean;
}

const TeamsScreen = () => {
  const navigation = useNavigation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Hide the header for this screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const teamMembers: TeamMember[] = [
    {
      name: "Executive Team",
      isHeader: true,
    },
    {
      name: "Greg Nierenberg",
      title: "Chief Executive Officer and President",
      image: require('../assets/gregg.png'), // Replace with actual image
      description: "A seasoned executive and entrepreneur, he has held leadership roles in multiple Fortune 500 global public companies. Nierenberg was most recently Senior Vice President of Fleet Services with Avis Budget Group overseeing a fleet of 400,000+ cars and commercial trucks across 100+ maintenance facilities. Prior to Avis Budget Group, Nierenberg served as part of Hertz Global Holdings' Senior Management Team with roles as Vice President of Operations and Vice President of Global Fleet for Hertz Equipment Rental Corporation (HERC Equipment Rental). Prior to HERC, Nierenberg spent 14 years in various roles at Ryder System, Inc. with his last responsibility at Ryder leading the Asset Management and Used Vehicle Sales functions. Nierenberg began his career as a Certified Public Accountant with Arthur Anderson, LLP. He holds a M.B.A., a Master of Accounting and a Bachelor of Accounting and Equivalency in Finance from the University of Florida in Gainesville.",
      isExpandable: true,
    },
    {
      name: "Gino Fontana",
      title: "Chief Operating Officer and Executive Vice President",
      image: require('../assets/gino.png'), // Replace with actual image
      description: "Formerly Vice President Operations for Transervice Logistics' Berkeley Division and Puerto Rico operations and before that, Director of Business Development, Midwest. Fontana has over 25 years of progressive leadership, operations and sales responsibilities in fleet leasing and trucking. Prior to his 10 years of service with Transervice he began his career in transportation with Wheels, Inc. where he was Senior Director of Purchasing Operations, Truck Engineering, Vendor Management, and Manufacturer Relations. Fontana holds a Bachelor's Degree in Organizational Development from DePaul University in Chicago.",
      isExpandable: true,
    },
    {
      name: "Alex Lafara",
      title: "Chief Financial Officer and Executive Vice President",
      image: require('../assets/alex.png'), // Replace with actual image
      description: "Bringing more than 20 years of finance and accounting experience to the position, having worked in a variety of industries with responsibility for operations, strategy and general management. His leadership in 10 countries in the Americas, Europe and the Middle East showcased his ability to drive value and strategic initiatives for the companies he served. Most recently, Lafaras was Chief Financial Officer at GGI, a 120-year national glass manufacturing company. He also spent 12 years with Alumil Group, a multi-national group of 35 manufacturing companies in 30 countries worldwide, holding positions as North American Chief Financial Officer and Executive Vice President; Chief Executive Officer of Bulgaria; and Global Controller. He began his career as Financial Manager for Varvaressos, a public textile manufacturing company. Lafaras holds a M.B.A. in Finance from the University of Sheffield in the UK; a Master in Finance from Baruch College in New York; and a Bachelor in Accounting as well as a Bachelor in Financial Applications from the State Technological Institute of West Macedonia in Greece. He also completed an Executive Education Program in Negotiations and Leadership at Harvard Law School.",
      isExpandable: true,
    },
    {
      name: "Leadership Team",
      isHeader: true,
    },
    {
      name: "Doug Adamson",
      title: "SVP of Sales and Marketing",
      image: require('../assets/doug.jpg'), // Replace with actual image
      description: "",
      isExpandable: false,
    },
    {
      name: "Dave Csontos",
      title: "VP of Logistics",
      image: require('../assets/dave.jpg'), // Replace with actual image
      description: "",
      isExpandable: false,
    },
    {
      name: "Pierre Bujold",
      title: "VP of Canadian Operations",
      image: require('../assets/pierre.jpg'), // Replace with actual image
      description: "",
      isExpandable: false,
    },
    {
      name: "Kari Beeson",
      title: "VP of Human Resources",
      image: require('../assets/kari.jpg'), // Replace with actual image
      description: "",
      isExpandable: false,
    },
  ];

  const handleMemberPress = (member: TeamMember) => {
    if (member.isExpandable && member.description) {
      setSelectedMember(member);
      setModalVisible(true);
    }
  };

  const renderTeamMember = (member: TeamMember, index: number) => {
    if (member.isHeader) {
      return (
        <View key={index} style={styles.headerContainer}>
          <Text style={styles.headerText}>{member.name}</Text>
        </View>
      );
    }

    return (
      <View key={index} style={styles.memberCard}>
        <Image source={member.image} style={styles.memberImage} />
        <Text style={styles.memberName}>{member.name}</Text>
        <Text style={styles.memberTitle}>{member.title}</Text>
        {member.isExpandable && member.description ? (
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => handleMemberPress(member)}
          >
            <Text style={styles.readMoreText}>READ MORE</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
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
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Meet Our Team</Text>
            
            <Text style={styles.description}>
              We like to think that we have a very clear vision, understand the issues facing logistics and transportation, and are committed to bringing effective and efficient solutions to our customers. The Transervice management team is deeply involved in operating the business and dedicated to our philosophy and ideals. We strive to ensure that we are bringing real value to our relationships – proactively supporting our customers and going the extra mile to deliver service excellence. Our management does not believe in revolving doors when it comes to our people. Transervice associates are at the core of everything we do. We attract and retain the best people available, professionals who not only understand and share a common vision, they dedicate themselves to satisfying our Customers. A majority of our associates remain at the Company for years because they have the opportunity to do meaningful work and feel good about their achievements.
            </Text>

            {teamMembers.map((member, index) => renderTeamMember(member, index))}

            <Text style={styles.bottomDescription}>
              Recognizing the diversity of individuals and ideas, we value the significant contributions from Transervice employees at all levels. Over the decades, we have learned that top management does not have a monopoly on creativity and innovation. We encourage open communication, skills development, dedication to excellence and teamwork. All of us at Transervice are particularly proud of the stability of our Company. It confirms that we're doing many things right and we recognize our employees' loyalty. After 10 years with the company, employees are inducted into our Employee Anniversary Club. Every 5 years the employee is honored at a social event and given a special gift. The Club has many 20-year members and several with 30+ years.
            </Text>
          </View>
        </ScrollView>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              {selectedMember && (
                <>
                  <Image source={selectedMember.image} style={styles.modalImage} />
                  <Text style={styles.modalName}>{selectedMember.name}</Text>
                  <Text style={styles.modalTitle}>{selectedMember.title}</Text>
                  <Text style={styles.modalDescription}>{selectedMember.description}</Text>
                </>
              )}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  backText: {
    fontSize: 25,
    color: '#000',
    marginLeft: 8,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#000',
    textAlign: 'left',
  },
  headerContainer: {
    marginVertical: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  memberCard: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  memberTitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  readMoreButton: {
    backgroundColor: '#F4C914',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  bottomDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
    marginBottom: 90,
    color: '#000',
    textAlign: 'left',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    maxHeight: '80%',
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  modalName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#000',
  },
  modalTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#F4C914',
    fontWeight: '600',
  },
  modalDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    textAlign: 'left',
  },
  closeButton: {
    backgroundColor: '#F4C914',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 16,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TeamsScreen;