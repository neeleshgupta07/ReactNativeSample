import {View, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import {addUser, deleteUser, addUserEducation} from '../actions/UserActions';
import {useDispatch} from 'react-redux';

const UserDetails = ({navigation}) => {
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [email, setEmail] = useState(null);
  const [collage, setCollage] = useState(null);
  const [education, setEducation] = useState(null);
  const dispatch = useDispatch();
  return (
    <View style={styles.maincontainer}>
      {/* <Header title="User Details" /> */}
      <TextInput
        style={styles.textinput}
        numberOfLines={1}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="City"
        numberOfLines={1}
        onChangeText={(text) => setCity(text)}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Email"
        numberOfLines={1}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.button_view}>
        <Button
          title="Add details"
          color="#AC8F38"
          onPress={() => {
            dispatch(addUser(name, city, email));
          }}
        />
      </View>
      <TextInput
        style={styles.textinput}
        placeholder="Collage"
        numberOfLines={1}
        onChangeText={(text) => setCollage(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Education"
        numberOfLines={1}
        onChangeText={(text) => setEducation(text)}
      />
      <View style={styles.button_view}>
        <Button
          title="Add Education"
          color="#AC8F38"
          onPress={() => {
            dispatch(addUserEducation(collage, education));
          }}
        />
      </View>
      <View style={styles.button_view}>
        <Button
          title="User Info"
          color="#AC8F38"
          onPress={() => {
            navigation.navigate('UserInfo', {
              name: 'Truba',
              city: 'Bhopal Indore',
              email: 'Truba@Truba.com',
            });
          }}
        />
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#CFBF92',
  },

  textinput: {
    height: 40,
    borderColor: '#DDF5FA',
    borderBottomWidth: 1,
    width: '80%',
    color: '#fff',
    fontSize: 16,
    marginTop: 40,
    marginLeft: '10%',
  },

  button_view: {
    marginTop: 60,
    marginLeft: '10%',
    marginRight: '10%',
  },
});
