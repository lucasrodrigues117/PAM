import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Cor de fundo da tela
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  buttonContainer: {
    backgroundColor: '#add8e6', // Cor de fundo do container do botão
    marginVertical: 10,
    width: windowWidth * 0.5, // 50% da largura da tela
    borderRadius: 5,
  },
});

