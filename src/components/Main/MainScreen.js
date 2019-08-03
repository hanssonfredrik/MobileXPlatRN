import React, { Component } from 'react';
import { 
  Body, 
  Button, 
  CheckBox, 
  Container, 
  Content, 
  Header, 
  Icon, 
  Item, 
  Input,
  List, 
  ListItem, 
  Title, 
  Text,
  Right,
  View, 
} from 'native-base';
import { AsyncStorage, Modal } from 'react-native';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      title: null,
      description: null,
      isCompleted: false,
      modalVisible: false,
    };

    this.onItemPress = this.onItemPress.bind(this);
    this.onAddPress = this.onAddPress.bind(this);
    this.saveTodoItem = this.saveTodoItem.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.loadTodoItems = this.loadTodoItems.bind(this);
    this.onIsActivatedChange = this.onIsActivatedChange.bind(this);
  }

  async componentDidMount() {
    // await AsyncStorage.removeItem('todoitems');

    await this.loadTodoItems();
  }

  onItemPress(todo) {
    const { navigate } = this.props.navigation;
    navigate('ViewTodo', { todoId: todo.todoId })
  }

  onAddPress() {
    this.setState({
      modalVisible: true,
    });
  }

  onIsActivatedChange(value) {
    this.setState({
      isCompleted: value,
    });
  }

  async loadTodoItems() {
    const existingTodoItems = await AsyncStorage.getItem('todoitems');
    let todoItems = JSON.parse(existingTodoItems);

    if (!todoItems) {
      todoItems = [];
    }

    this.setState({
      todos: todoItems,
    })

  }

  async saveTodoItem() {
    const existingTodoItems = await AsyncStorage.getItem('todoitems');

    let todoItems = JSON.parse(existingTodoItems);
    if (!todoItems) {
      todoItems = [];
    }

    todoItems.push({
      todoId: this.uuidv4(),
      title: this.state.title,
      description: this.state.description,
      isCompleted: this.state.isCompleted,
    });

    await AsyncStorage.setItem('todoitems', JSON.stringify(todoItems));

    this.setState({
      modalVisible: false,
    });

    await this.loadTodoItems();
  }

  cancelModal() {
    this.setState({
      modalVisible: false,
    });
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
        }}>
        <Content style={{ marginTop: 40, padding: 30, backgroundColor: '#EFEFEF' }}>
          <Item>
            <Input placeholder="Title" value={this.state.title} onChangeText={title => this.setState({ title })} />
          </Item>
          <Item>
            <Input placeholder="Description" value={this.state.description} onChangeText={description => this.setState({ description })} />
          </Item>
          <ListItem>
            <CheckBox checked={this.state.isCompleted} onValueChange={this.onIsActivatedChange} />
            <Body>
              <Text>Completed</Text>
            </Body>
          </ListItem>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button onPress={this.saveTodoItem} style={{ marginTop: 20, flex: 1, justifyContent: 'center', marginRight: 10 }}>
              <Text>Save</Text>
            </Button>
            <Button onPress={this.cancelModal} style={{ marginTop: 20, flex: 1, justifyContent: 'center', backgroundColor: 'gray' }}>
              <Text>Cancel</Text>
            </Button>
          </View>       
        </Content>
      </Modal>
    );
  }
      
  render() {
    const todoItems = this.state.todos.map(todo => (
      <ListItem key={'key' + todo.todoId} onPress={() => this.onItemPress(todo) }>
        <Body>
          <Text>{todo.title}</Text>
          <Text note>{todo.description}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    ));

    return (
      <Container>
        <Header>
          <Body>
            <Title>Todo Test2</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='add' onPress={this.onAddPress} />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {todoItems}
          </List>
        </Content>
        {this.renderModal()}
      </Container>
    );
  }
}
  
export default MainScreen;