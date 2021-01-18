import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Title,
  TextInput,
  Button,
  IconButton,
  Text
} from 'react-native-paper';

import { useHistory } from 'react-router-native';

const initialFieldValues = {
  email: "",
  password: ""
}

export default function Login() {
  const [fields, setFields] = useState(initialFieldValues);
  const history = useHistory();

  const onChangeText = (field, text) => {
    setFields(old => ({[field]: text, ...old}));
  }

  return (
    <View style={styles.container}>
      <Title style={{...styles.text, ...styles.title}}>Que bom te ver por aqui!</Title>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={fields.email}
          onChangeText={text => onChangeText('email', text)}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Senha"
          value={fields.password}
          onChangeText={text => onChangeText('password', text)}
        />
      </View>
      <Button
        onPress={() => {}}
        color="black"
      >
        Esqueci a senha
      </Button>
      <Button
        contentStyle={styles.buttonContent}
        style={styles.button}
        mode="contained"
        onPress={() => history.push('/welcome')}
      >
        Entrar
      </Button>
      <View
        style={styles.spacingContainer}
      >
        <Text style={styles.text}>Ainda não possui uma conta?</Text>
        <Button
          onPress={() => {}}
          style={styles.resetButton}
          labelStyle={styles.registerButton}
          color="black"
          uppercase={false}
        >
          Cadastre-se
        </Button>
      </View>
      <View
        style={styles.socialContainer}
      >
        <IconButton
          onPress={() => {}}
          icon="facebook"
          color="white"
          size={62}
        />
        <IconButton
          onPress={() => {}}
          icon="google"
          color="white"
          size={62}
        />
        <IconButton
          onPress={() => {}}
          icon="apple"
          color="white"
          size={62}
        />
      </View>
      <Button
        onPress={() => {}}
        style={{...styles.resetButton, marginTop: 20 }}
        color="black"
      >
        Precisa de Ajuda?
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00DAE8',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
  inputContainer: {
    paddingVertical: 10,
  },
  input: {
    backgroundColor: '#00DAE8',
    paddingVertical: 1,
  },
  resetButton: {
    flex: 0,
    alignSelf: 'center'
  },
  button: {
    flex: 0,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 100,
  },
  buttonContent: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  registerButton: {
    textDecorationLine: 'underline',
    color: 'black'
  },
  spacingContainer: {
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});