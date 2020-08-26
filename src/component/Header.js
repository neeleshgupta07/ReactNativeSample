import {View, StyleSheet, Text, StatusBar} from 'react-native';
import React from 'react';

const Header = (props) => {
  return (
    <View style={styles.header_container}>
      <StatusBar backgroundColor="#AC8F38"></StatusBar>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header_container: {
    height: '7%',
    backgroundColor: '#AC8F38',
  },
  title: {
    borderColor: '#20232a',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 12,
  },
});
