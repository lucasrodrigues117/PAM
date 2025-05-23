import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    // Aqui você pode adicionar validação se quiser
    navigation.replace('Home'); // navega para Home e remove a Login da pilha
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftLogin}>
        <Text style={styles.leftTitle}>
          Faça login {'\n'}
          <Text style={styles.leftSubtitle}>E entre para conhecer mais.</Text>
        </Text>
        <Image
          source={require('../../assets/programming.svg')}
          style={styles.leftImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.rightLogin}>
        <Text style={styles.loginTitle}>LOGIN</Text>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <Button title="LOGIN" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1b1a1a',
    padding: 20,
  },
  leftLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  leftTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  leftSubtitle: {
    fontWeight: 'normal',
    fontSize: 16,
  },
  leftImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  rightLogin: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  loginTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
