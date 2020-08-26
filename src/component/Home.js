import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import Header from './Header';
import React from 'react';
import {List, IconButton} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LocalNotification} from './LocalPushController';
import ToastExample from './ToastExample';

const Tab = createBottomTabNavigator();

const data = [
  {
    id: 2,
    value: 'Todos AsyncStore',
    link: 'TodoAsyncStore',
    icon: 'format-list-bulleted',
  },
  {
    id: 9,
    value: 'My Store',
    link: 'StoreProducts',
    icon: 'shopping',
  },
  {
    id: 3,
    value: 'Student List',
    link: 'StudentList',
    icon: 'account-multiple',
  },
  // {id: 4, value: 'Posts', link: 'Posts', icon: 'chat'},
  // {
  //   id: 5,
  //   value: 'User Details',
  //   link: 'UserDetails',
  //   icon: 'account-card-details-outline',
  // },
  {id: 6, value: 'Todo List', link: 'TodoList', icon: 'format-line-style'},
  // {id: 7, value: 'User Info', link: 'UserInfo', icon: 'information-variant'},
  {
    id: 8,
    value: 'Image Pickers',
    link: 'ImagePickers',
    icon: 'camera',
  },
  {
    id: 9,
    value: 'MyWeb',
    link: 'MyWeb',
    icon: 'web',
  },
];
const numColumns = 2;
const size = Dimensions.get('window').width / numColumns;
const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 5,
        }}>
        <TouchableOpacity
          style={styles.itemButton}
          color="#6C1919"
          onPress={() => ToastExample.showToast('Awesome', 3000)}>
          <Text style={{padding: 10}}>NativeModule Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemButton}
          color="#6C1919"
          onPress={LocalNotification}>
          <Text style={{padding: 10}}>Local Push Notification</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate(item.link)}>
              {/* <List.Icon color="#660000" icon={item.icon}  /> */}
              <IconButton icon={item.icon} color="#660000" size={40} />
              <Text style={styles.itemtext}>{item.value}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size,
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderColor: '#990000',
    borderRadius: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemButton: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderColor: '#990000',
    borderRadius: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  itemtext: {
    textAlign: 'center',
    fontSize: 18,
    color: '#990000',
    fontWeight: 'bold',
  },
});
