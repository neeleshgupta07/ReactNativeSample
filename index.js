/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TodoList from './src/component/TodoList';
import Posts from './src/component/Posts';
import UserDetails from './src/component/UserDetails';
import StudentList from './src/component/StudentList';
import Navigation from './src/component/Navigation';

import React from 'react';
import Test from './src/component/Test';
import ImagePickers from './src/component/ImagePicker';
import SignIn from './src/component/SignIn';
import RootComponent from './src/component/RootComponent';

//AppRegistry.registerComponent(appName, () => App);<Provider store={store}>Navigation</Provider>
AppRegistry.registerComponent(appName, () => RootComponent);
