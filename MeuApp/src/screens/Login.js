import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import programmingGif from '../../assets/programming.gif';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function handleLogin() {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    navigation.navigate('HomeScreen');
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.logoContainer}>
        <Image source={programmingGif} style={styles.gif} />
        <Text style={styles.title}>Bem-vindo(a)!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1a1a',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  gif: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    color: '#5d46e2',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: '#514869',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#f0ffffde',
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5d46e2',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#6d57eb',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#2b134b',
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});
