import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, SafeAreaView, Platform, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Sample data in English
const companyData = {
  logo: 'https://via.placeholder.com/150',
  name: 'John Abbott Map08 Inc.',
  phone: '+1 (514) 123-4567',
  email: 'contact@map08.com',
  address: '123 Innovation Drive, QC, H9J 5E4, Canada',
  website: 'www.map08.com',
  description: 'A team from John Abbott college, driving digital transformation across industries.'
};

const CompanyInfoPage = () => {
  const handlePhonePress = () => {
    Linking.openURL(`tel:${companyData.phone}`);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${companyData.email}`);
  };

  const handleWebsitePress = () => {
    Linking.openURL(`https://${companyData.website}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Image source={{ uri: companyData.logo }} style={styles.logo} />
          <Text style={styles.companyName}>{companyData.name}</Text>
        </View>
        
        <View style={styles.infoSection}>
          <TouchableOpacity style={styles.infoItem} onPress={handlePhonePress}>
            <MaterialIcons name="phone" size={24} color="#007AFF" />
            <Text style={styles.infoText}>{companyData.phone}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.infoItem} onPress={handleEmailPress}>
            <MaterialIcons name="email" size={24} color="#007AFF" />
            <Text style={styles.infoText}>{companyData.email}</Text>
          </TouchableOpacity>
          
          <View style={styles.infoItem}>
            <MaterialIcons name="location-on" size={24} color="#007AFF" />
            <Text style={styles.infoText}>{companyData.address}</Text>
          </View>
          
          <TouchableOpacity style={styles.infoItem} onPress={handleWebsitePress}>
            <MaterialIcons name="language" size={24} color="#007AFF" />
            <Text style={styles.infoText}>{companyData.website}</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>Company Profile</Text>
          <Text style={styles.descriptionText}>{companyData.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20, // Add some bottom padding
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  descriptionSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 15,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});

export default CompanyInfoPage;