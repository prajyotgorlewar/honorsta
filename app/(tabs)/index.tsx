import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView 
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }} 
      headerImage={
        <Image
          source={require('@/assets/images/1.png')}
          style={styles.characterImage}
        />
      }
    >
      <View style={styles.container}>
        {/* Title Text */}
        <Text style={styles.titleText}>Discover Your Dream Job here</Text>

        {/* Subtitle Text */}
        <Text style={styles.subtitleText}>
          Explore all the existing job roles based on your interest and study major
        </Text>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 206,
    backgroundColor: '#FFFFFF', 
  },
  characterImage: {
    height: 378,
    width: 290,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A2B87', 
    marginVertical: 16,
  },
  subtitleText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  loginButton: {
    backgroundColor: '#1A2B87', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  registerButton: {
    borderColor: '#000000',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
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
