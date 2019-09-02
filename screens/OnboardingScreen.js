import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

export default class OnboardingScreen extends React.Component{
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.onBoardingContainer}>
          <Text>OnboardingScreen W.I.P</Text>
          <Button
            onPress={() => {
              this.props.navigation.navigate('Auth');
            }}
            title="Skip"
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
    backgroundColor: '#F6F7F9',
  },
  onBoardingContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});