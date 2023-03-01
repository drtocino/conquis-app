import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import st from "../styles/Style";
import { getFirestore, collection, getDocs,orderBy,query } from 'firebase/firestore/lite';
import { useEffect, useState } from "react";
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import {db} from '../database/firebase'

export default Categorias = (props) => {

    const [users, setUsers] = useState([]);
    const [usersSearch, setUsersSearch] = useState([]);
    const [search, setSearch] = useState('');
    const [date, setDate] = useState(new Date());

    const getUsers = async (firestore) => {
        const honorCategoriesCol = collection(firestore, 'honorCategories');
        const honorCategoriesSnapshot = await getDocs(query(honorCategoriesCol, orderBy('name')));
        const userList = honorCategoriesSnapshot.docs.map(doc => doc.data());
        setUsers(userList);
        setUsersSearch(userList);
        return userList;
    }

    useEffect(() => {
      getUsers(db)
    
    }, [])

    const filter = (word) => {
        users.map((val) => {
            word.length > 2 ? setUsersSearch(users.filter(o => o.name.toLowerCase().match(word.toLowerCase()))) : setUsersSearch(users);
        })
    }

    return (
        <View style={[st.pt2,st.px2,st.bgWhite]} >
            <Text style={[st.textMd]}></Text>
                    <DateTimePicker value={date} onDateChange={setDate} />
            <View style={[st.row]}>
                <View style={[st.col11]}>
                    <TextInput style={[st.borderW1,st.borderGray300,st.roundedMd,st.p1,st.textCenter]} onChangeText={(text) => {filter(text)}} placeholder={"Buscar"} />
                </View>
                <TouchableOpacity style={[st.col1,st.bgAmber500,st.mlMin,st.roundedMd,st.justifyCenter,st.alignCenter]} onPress={() => {getUsers(db)}} >
                    <Feather name="refresh-cw" color={"white"} />
                </TouchableOpacity>
            </View>
            {
                usersSearch.map((val) => {
                    // console.log(val)
                    return (
                        <Pressable key={val.id} style={ ({pressed}) => [ pressed ? st.bgSlate100 : st.bgWhite,st.row,st.py2]} onPress={() => props.navigation.navigate("Especialidad")} >
                            <View style={[st.col2]}></View>
                            <View style={[st.col10]}>
                                <Text style={[st.textMd]}>{val.name}</Text>
                                <Text style={[st.colorSlate500]}>{val.code}</Text>
                            </View>
                        </Pressable>
                    )
                })
            }
            
        </View>
    )
}