import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from './Header';

class TodoList extends Component {
  constructor(props) {
    super(props);
    let deviceH = Dimensions.get('screen').height;
    let windowH = Dimensions.get('window').height;
    const {bottomNavBarH} = deviceH - windowH; //+ StatusBar.statusBarHeight;
    this.state = {
      currentTodoItem: null,
      toDoList: [],
    };
    this.myTextInput = React.createRef();
  }

  setCurrentToDoItem = (toDoItem) => {
    this.setState({
      currentToDoItem: toDoItem,
    });
  };

  saveToDoListItem = (toDoItem) => {
    this.myTextInput.current.clear();
    if (toDoItem != null) {
      this.setState({
        currentToDoItem: null,
        toDoList: [
          ...this.state.toDoList,
          {
            value: toDoItem,
            isDone: false,
          },
        ],
      });
    } else {
      Alert.alert('Please enter details..');
    }
  };

  handleClick = (index) => {
    const {toDoList} = this.state;
    toDoList[index].isDone = !toDoList[index].isDone;
    this.setState({
      toDoList,
    });
  };

  getStrikeThroughCount = () => {
    const result = this.state.toDoList.filter((item) => item.isDone == false);
    return result.length;
  };
  render() {
    return (
      <View style={styles.maincontainer}>
        {/* <Header title="Todo List" /> */}
        <View>
          <View style={styles.container}>
            <TextInput
              style={styles.textinput}
              multiline
              numberOfLines={4}
              ref={this.myTextInput}
              //  defaultValue={this.state.currentTodoItem}
              onChangeText={(text) => this.setCurrentToDoItem(text)}
            />
            <Button
              title="Add Item"
              color="#AC8F38"
              onPress={() => this.saveToDoListItem(this.state.currentToDoItem)}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'red',
              backgroundColor: '#fff',
              padding: 5,
            }}>
            {this.getStrikeThroughCount()} out of {this.state.toDoList.length}{' '}
            remaining
          </Text>
          <FlatList
            style={styles.flatlist}
            data={this.state.toDoList}
            renderItem={({item, index}) => (
              <View style={styles.row_container}>
                <Text
                  style={item.isDone ? styles.isdone : styles.row}
                  onPress={() => this.handleClick(index)}>
                  {item.value}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index + ''}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#CFBF92',
  },
  container: {
    padding: 10,
    backgroundColor: '#C5A957',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textinput: {
    height: 40,
    borderColor: '#DDF5FA',
    borderBottomWidth: 1,
    width: '72%',
    color: '#fff',
    fontSize: 16,
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
  flatlist: {
    marginTop: 1,
    marginBottom: 150,
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

export default TodoList;
