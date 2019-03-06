import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './components/Main/MainScreen';
import ViewTodoScreen from './components/Todo/ViewTodoScreen';

const MainNavigator = createStackNavigator(
  {
    Main: { screen: MainScreen },
    ViewTodo: { screen: ViewTodoScreen },
  }, 
  {
    mode: 'card',
    headerMode: 'none',
  },
);

export default createAppContainer(MainNavigator);
