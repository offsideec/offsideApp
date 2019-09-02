import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
} from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.loginContainer}>
          <Image
            source={require('../assets/images/login_header.png')}
            style={styles.loginHeader} />
          <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
          />
          <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
          />
          <Button
            onPress={() => {
              this.props.navigation.navigate('Main');
            }}
            title="Login"
            color="#841584"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#283B4C',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginHeader: {
    width: 500,
    height: 350,
    marginTop: -100,
    marginLeft: -120
  },
});