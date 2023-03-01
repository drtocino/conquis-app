import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import st from "../styles/Style";
import {createStackNavigator} from '@react-navigation/stack'
import Categorias from "./Categorias";
import Especialidad from "./Especialidad";

const Stack = createStackNavigator();

const HonorNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categorias" component={Categorias} />
            <Stack.Screen name="Especialidad" component={Especialidad} />
        </Stack.Navigator>
    );
}

export default Especialidades = (props) => {

    return (
        <HonorNavigation/>
    )
}