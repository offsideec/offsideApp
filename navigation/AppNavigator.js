import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
//App Screens
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

//App Stack
import MainTabNavigator from './MainTabNavigator';

//Auth Stack
const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    // Register: { screen: RegisterScreen },
  },
  {
    initialRouteName: 'Login',
  },
);

// Onboarding Stack
const OnboardingStack = createStackNavigator(
  {
    Onboarding: { screen: OnboardingScreen }
  },
  {
    navigationOptions: {
      header: null,
    }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Auth: AuthStack,
      Main: MainTabNavigator,
      Onboarding: OnboardingStack,
    },
    {
      initialRouteName: 'Onboarding',
    },
  )
);
