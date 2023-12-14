import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import Main from './Main';
import ExpenseSummaryScreen from './ExpenseSummaryScreen';
import ExpenseScreen from './ExpenseScreen';
import ViewExpense from './ViewExpense';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import { Picker } from '@react-native-picker/picker';
const Stack = createStackNavigator();
import ModalDropdown from 'react-native-modal-dropdown';
import { firebaseConfig } from './config';
import moment from 'moment-timezone';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
     
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="ExpenseSummaryScreen"
          component={ExpenseSummaryScreen}
          options={{ headerShown: false }}
        />

           <Stack.Screen
          name="ExpenseScreen"
          component={ExpenseScreen}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="ViewExpense"
          component={ViewExpense}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
