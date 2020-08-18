import React from "react";
import { View, Platform, StatusBar, Text, StyleSheet } from "react-native";
import Welcome from "./components/Welcome";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "./reducers";
// import History from './components/History'
import Loading from './components/Loading'

import {Router, Scene} from 'react-native-router-flux';

import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { purple, white } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";
import EntryDetail from "./components/EntryDetail";
import Live from "./components/Live";
import FlashCardsNav from './navigation/FlashCardsNav'

export default class App extends React.Component {
 
  render() {
    return (
  
      <Router>
      <Scene key="root">
        <Scene key="loading" component={Loading} initial={true} hideNavBar={true}></Scene>
        <Scene key="nav" component={FlashCardsNav} hideNavBar={true}></Scene>
      </Scene>
    </Router>
    );
  }
}

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );

// return (
//   // <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Notifications" component={SettingsScreen} />
//     {/* <Stack.Screen name="Profile" component={Profile} />
//     <Stack.Screen name="Settings" component={Settings} /> */}
//   </Stack.Navigator>
//   // </NavigationContainer>
// );
