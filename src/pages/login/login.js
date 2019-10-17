import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const EMAIL_VALUE_KEY_STRING = 'userEmailKey';
const ID_VALUE_KEY_STRING = 'userIdKey';

export default function LoginPage({ navigation }) {
  const [emailInput, setEmailInput] = useState('');
  const [techsInput, setTechsInput] = useState('');

  useEffect(() => {
    try {
      AsyncStorage.getItem(EMAIL_VALUE_KEY_STRING).then((doc) => {
        setEmailInput(doc);
      });
    } catch {
      console.log('NO LOCAL DATA STORED');
    }
  }, []);

  async function handleSubmit() {
    storeUserEmail();
    navigation.navigate('ListPage', { techs: techsInput.split(',').map(elem => elem.trim())});
  }

  async function storeUserEmail() {
    AsyncStorage.setItem(EMAIL_VALUE_KEY_STRING, emailInput).catch((err) => console.log(err));
  }

  function storeUserID(user_id) {
    AsyncStorage.setItem(ID_VALUE_KEY_STRING, user_id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput 
          autoCorrect={false}
          autoCapitalize="none" 
          keyboardType="email-address" 
          style={styles.loginInput} 
          value={emailInput}
          onChangeText={setEmailInput}
          placeholder="Email"></TextInput>

        <TextInput 
          autoCorrect={false} 
          style={styles.loginInput} 
          onChangeText={setTechsInput}
          value={techsInput}
          placeholder="Technlogies"></TextInput>

          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginForm: {
    width: '95%',
    height: 300,
    alignItems: 'center'
  },

  loginInput: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    margin: 5,
    color: '#FFF',
    paddingLeft: 10,
    fontSize: 24,
    width: '90%'
  },

  loginButton: {
    marginTop: 20,
    width: "80%",
    borderRadius: 4,
    backgroundColor: '#2b8050',
    textAlign: "center",
    alignItems: 'center',
    justifyContent: "center",
    height: 44
  },

  loginButtonText: {
    color: '#FFF',
    fontSize: 24
  }
});
