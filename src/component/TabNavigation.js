import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import TodoList from './TodoList';
import StudentList from './StudentList';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home';
          } else if (route.name === 'Todos') {
            iconName = focused ? 'md-list' : 'md-list';
          } else if (route.name === 'StudentList') {
            iconName = focused ? 'md-people' : 'md-people';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#660000',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Todos" component={TodoList} />
      <Tab.Screen name="StudentList" component={StudentList} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
