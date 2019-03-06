import React, { Component } from 'react';
import { Body, Button, Container, Content, Header, Icon, Left, Title, Text, Right } from 'native-base';

class ViewTodoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.onBackPress = this.onBackPress.bind(this);
  }

  onBackPress() {
    this.props.navigation.goBack();
  }
      
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={this.onBackPress}>
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