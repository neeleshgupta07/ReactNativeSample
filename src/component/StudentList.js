import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import Header from './Header';
import {Card} from 'react-native-paper';
const StudentList = () => {
  const [isLoading, setLoading] = useState(false);
  const [student, setStudentData] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch('https://www.hatchways.io/api/assessment/students')
      .then((res) => res.json())
      .then((result) => setStudentData(result))
      .catch((error) => console.log('-----ERROR-----' + error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.maincontainer}>
      {/* <Header title="Student List" /> */}
      {isLoading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="#960A0A" />
        </View>
      ) : (
        <FlatList
          data={student.students}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#ffffff',
                margin: 15,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 11,
                },
                shadowOpacity: 0.57,
                shadowRadius: 15.19,

                elevation: 23,
              }}>
              <Text style={styles.row}>
                {item.firstName} {item.lastName}
              </Text>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f2f2f2',
                  margin: 10,
                }}>
                <Image
                  source={{uri: item.pic}}
                  // source={{
                  //   uri:
                  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6-bh6LKX9vITQlI_1NWqNaj2r2Uz3MVtJeX_W-5UcMrWVAjwM&usqp=CAU',
                  // }}
                  style={{
                    height: 150,
                    width: 150,
                    resizeMode: 'cover',
                  }}
                />
              </View>

              <Text style={styles.row_body}>Email: {item.email}</Text>
              <Text style={styles.row_body}>Company: {item.company}</Text>
              <Text style={styles.row_body}>Skill: {item.skill}</Text>
              <Text style={styles.row_body}>City: {item.city}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.id}
        />
      )}
    </View>
  );
};

export default StudentList;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    backgroundColor: '#800000',
    color: '#ffffff',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  row_body: {
    // backgroundColor: '#C2B180',
    color: '#800000',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
  },
});
