import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import Resume from './pages/resume';
import Expense from './pages/expenses';
import Records from './pages/records';
import Profile from './pages/profile';
import { ExpensesProvider } from './expensesContext'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <ExpensesProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#007AFF', tabBarInactiveTintColor: 'gray' }}>
          <Tab.Screen
            name="Resumo"
            component={Resume}
            options={{
              tabBarIcon: () => (
                <Ionicons name="stats-chart-outline" size={20} color="blue" />
              )
            }}
          />
          <Tab.Screen
            name='Novo Gasto'
            component={Expense}
            options={{
              tabBarIcon: () => (
                <Ionicons name="add-circle-outline" size={20} color="blue" />
              )
            }}
          />
          <Tab.Screen
            name='Histórico'
            component={Records}
            options={{
              tabBarIcon: () => (
                <Ionicons name="list-outline" size={20} color="blue" />
              )
            }}
          />
          <Tab.Screen
            name='Meu Perfil'
            component={Profile}
            options={{
              tabBarIcon: () => {
                return (
                  <Ionicons name="person-circle-outline" size={20} color="blue" />
                )
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer >
    </ExpensesProvider>
  );
}