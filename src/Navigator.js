import { StackNavigator } from 'react-navigation';
import MainScreen from './components/Main/MainScreen';
import ViewTodoScreen from './components/Todo/ViewTodoScreen';

const MainNavigator = StackNavigator({
  Main: { screen: MainScreen },
  ViewTodo: {screen: ViewTodoScreen },
});

export default MainNavigator;