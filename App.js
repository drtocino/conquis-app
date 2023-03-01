import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons'
// import { createStackNavigator } from '@react-navigation/stack'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import st from './styles/Style';
import Inicio from './screens/Inicio';
import Especialidades from './screens/Especialidades';
import Register from './screens/Register';
import Especialidad from './screens/Especialidad';
import Categorias from './screens/Categorias';

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

function MyDrawer(){
  return (
      <Drawer.Navigator /* drawerContent={(props) => {
        return (
          <View>
            <Image source={require("./assets/layered-waves.svg")} />
          </View>
        )
      }} */
        screenOptions={{drawerActiveTintColor: "#fff",drawerInactiveTintColor:"#eee",drawerActiveBackgroundColor: "#1E293B",drawerInactiveBackgroundColor: "#0F172A",drawerContentStyle: {backgroundColor: "#0F172A",paddingLeft: 0,width: "100%"}}} >
        <Drawer.Screen name="Home" component={Inicio} options={{headerStyle: {height: 0},headerShown: false,drawerIcon: ({focused,size,color}) => (
          <View style={[focused ? st.borderAmber600 : st.borderSlate900,st.borderWL4]}>
            <MaterialIcons name='dashboard' color={color} size={20}  />
          </View>
        )}}  />
        <Drawer.Screen name="Especialidades" component={Especialidades}
          options={{headerStyle: {elevation: 0},headerLeft: false,headerRight: () => <DrawerToggleButton/>,
          headerTitleStyle: {fontSize: 16,},drawerIcon: ({focused,size,color}) => (
          <View style={[focused ? st.borderAmber600 : st.borderSlate900,st.borderWL4]}>
            <MaterialCommunityIcons name='ellipse-outline' color={color} size={20}  />
          </View>
        )}}  />
        <Drawer.Screen name="Registrarse" component={Register} options={{headerStyle: {height: 0},headerShown: false,drawerIcon: ({focused,size,color}) => (
          <View style={[focused ? st.borderAmber600 : st.borderSlate900,st.borderWL4]}>
            <MaterialIcons name='verified-user' color={color} size={20}  />
          </View>
        )}}  />
        {/* <Drawer.Screen name="Especialidades de categoria" component={Especialidad} options={{headerStyle: {height: 0},headerShown: false,drawerIcon: ({focused,size,color}) => (
          <View style={[focused ? st.borderAmber600 : st.borderSlate900,st.borderWL4]}>
            <MaterialIcons name='verified-user' color={color} size={20}  />
          </View>
        )}}  /> */}
        
      </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}
