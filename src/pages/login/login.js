import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput 
          autoCorrect={false}
          autoCapitalize="none" 
          keyboardType="email-address" 
          style={styles.loginInput} 
          placeholder="Email"></TextInput>

          <Button style title={"ENTRAR"}></Button>
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
    fontSize: 24
  }
});
