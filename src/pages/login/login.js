import React, { useState, useEffect } from 'react';
import { StyleSheet, AsyncStorage, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

const EMAIL_VALUE_KEY_STRING = 'userEmailKey';
const ID_VALUE_KEY_STRING = 'userIdKey';

export default function LoginPage({ navigation }) {
  const [emailInput, setEmailInput] = useState('');


  useEffect(() => {
    try {
    navigation.navigate('ListPage');
    // retrieveUserLocalData();
    } catch {
      console.log('NO LOCAL DATA STORED');
    }
  }, []);

  function setInputValue(value) {
    setEmailInput(value);
  }

  async function handleSubmit() {
    // storeUserEmail();
    // storeUserID('d12345678');    
    navigation.navigate('ListPage');
  }

  async function storeUserEmail() {
    // await AsyncStorage.setItem(EMAIL_VALUE_KEY_STRING, emailInput).then((data) => {
    //   console.log('User data stored successfully', data);
    // }).catch((err) => console.log(err));
  }

  function storeUserID(user_id) {
    AsyncStorage.setItem(ID_VALUE_KEY_STRING, user_id);
  }

  async function retrieveUserLocalData() {
    // const userCredential = await AsyncStorage.getAllKeys(EMAIL_VALUE_KEY_STRING);
    // console.log('USER CRED:', userCredential);  
    // if (userCredential) setEmailInput(userCredential);
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput 
          autoCorrect={false}
          autoCapitalize="none" 
          keyboardType="email-address" 
          style={styles.loginInput} 
          onChangeText={setInputValue}
          placeholder="Email"></TextInput>

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
