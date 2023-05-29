import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import All from './screens/All';
import Recent from './screens/Recent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageModal from './screens/ManageModal';
import ExpensesContextProvider from './store/expenses-context';

const Tab = createBottomTabNavigator();

function BottomTabs({navigation}) {
  return (
    <Tab.Navigator 
      initialRouteName='Recent' 
      screenOptions={({navigation}) => ({
        headerRight: () => <Button 
          onPress={() => navigation.navigate('ManageModal')} 
          title='Add'
        />
      })}
    >
      <Tab.Screen 
        name="All" 
        component={ All } 
        options={() => ({
           title: 'All expenses', 
          })} 
      />

      <Tab.Screen 
        name="Recent" 
        component={ Recent } 
        options={() => ({
          title: 'Recent expenses',
         })}
      />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={BottomTabs} />

            <Stack.Screen 
              name='ManageModal' 
              component={ ManageModal } 
              options={{presentation: 'modal', headerShown: true}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
