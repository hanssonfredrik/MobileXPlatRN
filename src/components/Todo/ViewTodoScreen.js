import React, { Component } from 'react';
import { Body, Button, Container, Content, Header, Icon, Left, Title, Text, Right } from 'native-base';

class ViewTodoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }
      
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
          </Left>
          <Body>
            <Title>View</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='save' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>Test</Text>
        </Content>
      </Container>
    );
  }
}
  
  export default ViewTodoScreen;