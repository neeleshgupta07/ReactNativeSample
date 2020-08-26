import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
const Posts = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.log('-----ERROR-----' + error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.maincontainer}>
      {/* <Header title="Posts" /> */}
      {isLoading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="#960A0A" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text style={styles.row}>{item.title}</Text>
              <Text style={styles.row_body}>
                {item.body.charAt(0).toUpperCase() + item.body.slice(1)}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <View>
        <Button
          title="User Info"
          color="#AC8F38"
          onPress={() => {
            navigation.navigate('UserInfo');
          }}
        />
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#CFBF92',
  },
  row: {
    backgroundColor: '#C2B180',
    color: '#960A0A',
    padding: 10,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  row_body: {
    // backgroundColor: '#C2B180',
    color: '#000000',
    padding: 10,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
  },
});
