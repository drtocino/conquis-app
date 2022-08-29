import { Text, TextInput, View } from "react-native";
import st from "../styles/Style";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from "react";

export default Especialidades = (props) => {

    const [users, setUsers] = useState([])

    const firebaseConfig = {
        apiKey: "AIzaSyATq8qaONRbJ-nFcg-Gxg7cFyjE7x7ZQs0",  
        authDomain: "conqui-path.firebaseapp.com",
        projectId: "conqui-path",
        storageBucket: "conqui-path.appspot.com",
        messagingSenderId: "913535486929",
        appId: "1:913535486929:web:a842e5573021f32793aef0",
        measurementId: "G-EY3YR9ZQKE"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    async function getUsers(db) {
        const usersCol = collection(db, 'users');
        const userSnapshot = await getDocs(usersCol);
        const userList = userSnapshot.docs.map(doc => doc.data());
        console.log(userList)
        setUsers(userList);
        return userList;
    }

    useEffect(() => {
      getUsers(db)
    
    }, [])
    

    // const userRef = firebase

    return (
        <View style={[st.pt2,st.px2,st.bgWhite]} >
            <Text style={[st.textMd]}></Text>
            <TextInput style={[st.borderW1,st.borderGray300,st.roundedMd,st.p1,st.textCenter]} placeholder={"Buscar"} />
            {
                users.map((val) => {
                    // console.log(val)
                    return (
                        <Text key={val.id}>{val.fullName}</Text>
                    )
                })
            }
            
        </View>
    )
}