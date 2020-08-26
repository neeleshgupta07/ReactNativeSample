import {
  View,
  StyleSheet,
  AsyncStorage,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput, Button, List, Card, IconButton} from 'react-native-paper';

var arr = [];
const TodoAsyncStore = ({navigation}) => {
  const [todo, setTodo] = useState(null);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    _retrieveData();
  }, []);
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('myTodos');
      if (value !== null) {
        setTodoList(JSON.parse(value));
        arr = JSON.parse(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  navigation.setOptions({
    headerRight: () => (
      <IconButton onPress={() => _clearStorage()} icon="delete" color="white" />
    ),
  });

  const setListData = () => {
    // setTodoList([
    //   ...todoList,
    //   {
    //     value: todo,
    //     isDone: false,
    //   },
    // ]);
    if (todo != null) {
      arr.push({value: todo, isDone: false, id: Date.now()});
      setTodo(null);

      _storeData();
    } else {
      alert('Enter details');
    }
  };
  const _storeData = async () => {
    console.log('-----setTodoList-------' + JSON.stringify(arr));
    try {
      await AsyncStorage.setItem('myTodos', JSON.stringify(arr));
      setTodoList(JSON.parse(await AsyncStorage.getItem('myTodos')));
      console.log('--value-btn--');
    } catch (error) {
      console.log('--error---' + error);
    }
  };

  const _clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setTodoList([]);
      arr = [];
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  const deleteTodo = (todoId) => {
    const result = todoList.filter((item) => item.id != todoId);
    arr = result;
    _storeData();
  };
  return (
    <View style={styles.maincontainer}>
      <TextInput
        style={styles.textinput}
        label="Todo"
        value={todo}
        mode="outlined"
        onChangeText={(e) => setTodo(e)}
      />
      <Button mode="contained" onPress={setListData} icon="plus">
        Add
      </Button>

      <FlatList
        data={todoList}
        renderItem={({item, index}) => (
          <Card style={{marginTop: 10}}>
            <List.Item
              title={item.value}
              right={(props) => (
                <TouchableOpacity
                  onPress={() => {
                    deleteTodo(item.id);
                  }}>
                  <List.Icon {...props} color="#660000" icon="delete" />
                </TouchableOpacity>
              )}
            />
          </Card>
        )}
        keyExtractor={(item, index) => index + ''}
      />
    </View>
  );
};

export default TodoAsyncStore;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  container: {
    padding: 10,
    backgroundColor: '#b3b3b3',
    flexDirection: 'row',
  },

  textinput: {
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    backgroundColor: '#C2B180',
    color: '#fff',
    padding: 10,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 17,
  },
  row_container: {
    justifyContent: 'center',
    marginBottom: 1,
  },

  isdone: {
    textDecorationLine: 'line-through',
    backgroundColor: '#C2B180',
    color: '#C5352C',
    padding: 10,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 17,
  },
});
