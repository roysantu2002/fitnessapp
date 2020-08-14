import React from "react";
import { View, Platform, StatusBar, Text, StyleSheet} from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
// import History from './components/History'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { purple, white } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";
import EntryDetail from "./components/EntryDetail";
import Live from './components/Live'


function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const HomeScreen = () => {
  return (
      <View style={style.container}>
          <Text>Home Screen</Text>
      </View>
  );
}

const SettingScreen = () => {
  return (
      <View style={style.container}>
          <Text>Settings Screen</Text>
      </View>
  );
}

const SignoutScreen = () => {}

const style = StyleSheet.create({
  container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: {
      screen: HomeScreen, 
      navigationOptions: {
          tabBarLabel: 'Home', 
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-home" color={tintColor} size={25} />
          )
      }
  }, 
  Settings: {
      screen: SettingScreen, 
      navigationOptions: {
          tabBarLabel: 'Settings', 
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-settings" color={tintColor} size={25} />
          )
      }
  }, 
  Signout: {
      screen: SignoutScreen, 
      navigationOptions: {
          tabBarLabel: 'Signout', 
          tabBarIcon: ({ tintColor }) => (
              <SimpleLineIcons name="logout" color={tintColor} size={20} />
          )
      }
  }
});

// const mainNavigator = createAppContainer(tabNavigator);


// const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
   
         <NavigationContainer>
           <TabNavigator/>
           </NavigationContainer>

         
          {/* <UdaciStatusBar backgroundColor={purple} barStyle="light-content" /> */}
        </View>
      </Provider>
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
