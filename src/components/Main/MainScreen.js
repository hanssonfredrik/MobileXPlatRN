import React, { Component } from 'react';
import { Body, Button, Container, Content, Header, Icon, List, ListItem, Title, Text, Right } from 'native-base';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const todoList = [
      {
        id: 1,
        title: 'Test1',
        description: 'Test 1 desc',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'Test2',
        description: 'Test 2 desc',
        isCompleted: true,
      }
    ];

    this.setState({
      todos: todoList,
    })
  }
      
  render() {
    const todoItems = this.state.todos.map(todo => (
      <ListItem key={todo.id}>
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
            <Title>Todo items</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {todoItems}
          </List>
        </Content>
      </Container>
    );
  }
}
  
  export default MainScreen;