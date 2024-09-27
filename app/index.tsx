import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Character Image */}
        <Image
          source={require('@/assets/images/1.png')}
          style={styles.characterImage}
        />

        {/* Title Text */}
        <Text style={styles.titleText}>Discover Your Dream</Text>
        <Text style={styles.titleText}>Job here</Text>

        {/* Subtitle Text */}
        <Text style={styles.subtitleText}>
          Explore all the existing job roles based on your interest and study major
        </Text>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login' as never)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register' as never)}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF', 
  },
  characterImage: {
    height: 320, 
    width: 320, 
    marginBottom: 24,
    marginTop: 80, 
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F41BB', 
    marginVertical: 0,
  },
  subtitleText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    fontWeight: 'semibold',
    marginBottom: 32,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  loginButton: {
    backgroundColor: '#1F41BB', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 26,
    marginBottom: 26,
  },
  registerButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 26,
    marginBottom: 26,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  registerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});
