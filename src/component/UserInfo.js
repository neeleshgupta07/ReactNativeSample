import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const UserInfo = ({navigation}) => {
  const userData = useSelector((state) => {
    console.log('------state-------' + JSON.stringify(state));
    return state;
  });
  const route = useRoute();
  return (
    <View>
      <View>
        <Text>route</Text>
        <Text>{route.params.name}</Text>
        <Text>{route.params.city}</Text>
        <Text>{route.params.email}</Text>
      </View>
      {console.log('=====userData=userInfo======' + userData.userInfo.length)}
      {console.log('=====userData=userEdu======' + userData.userEdu.length)}
      <Text>{userData.userInfo.name}</Text>
      <FlatList
        data={userData.userInfo}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.city}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FlatList
        data={userData.userEdu}
        renderItem={({item}) => (
          <View>
            <Text>{item.collage}</Text>
            <Text>{item.education}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default UserInfo;
