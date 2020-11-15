import * as AuthSession from 'expo-auth-session';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  Image
} from 'react-native';
import jwtDecoder from 'jwt-decode';
const auth0ClientId = process.env.AUTH0_CLIENTID;
const auth0Domain = process.env.AUTH0_DOMAIN;

const toQueryString = (params) => {
  return '?' + Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

export default class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  loginWithAuth0 = async () => {
    // get redirect URL to redirect after log in
    const redirectUrl = AuthSession.getRedirectUrl();
    console.log("this worked! auth");
    console.log(redirectUrl);
    // perform login
    const result = await AuthSession.startAsync({
      authUrl: `${auth0Domain}/authorize` + toQueryString({
        client_id: auth0ClientId,
        response_type: 'id_token',
        scope: 'openid profile',
        audience: process.env.AUTH0_API,
        redirect_uri: redirectUrl,
        nonce: "randomstring"
      }),
    });
    console.log(result);
    // if success, handle the result
    if (result.type === 'success') {
      this.handleParams(result.params);
    }
  }

  handleParams = (responseObj) => {
    // handle error
    if (responseObj.error) {
      Alert.alert('Error', responseObj.error_description
        || 'something went wrong while logging in');
      return;
    }
    // store session in storage and redirect back to the app
    const encodedToken = responseObj.id_token;
    const decodedToken = jwtDecoder(encodedToken);
    AsyncStorage.setItem(
      '@truebike:auth0',
      JSON.stringify({
        token: encodedToken,
        name: decodedToken.nickname,
        id: decodedToken.sub,
        exp: decodedToken.exp
      })
    ).then(() => {
      this.props.login(decodedToken.sub, decodedToken.nickname, encodedToken)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.loginWithAuth0}
          >
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });