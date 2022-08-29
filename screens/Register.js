import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword,getAuth,signInWithCredential } from 'firebase/auth';
import { getFirestore, collection, getDocs,doc,setDoc } from 'firebase/firestore/lite';
// import { GoogleSignin } from '@react-native-google-signin/google-signin'
// import { firebase } from '../database/firebase';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default Register = ({navigation}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // GoogleSignin.configure({
    //     webClientId: "913535486929-cs6vfc6oo8lvvhpk8dbujbuhdfi5cfeu.apps.googleusercontent.com",
    // })

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

    const onRegisterPress = () => {
        const auth = getAuth();
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        
        createUserWithEmailAndPassword(auth,email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = collection(db,'users')
                setDoc(doc(db,"users",uid),data)   
                // doc(usersRef,uid)
                    // .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <View style={styles.container}>
            {/* <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"> */}
                <TextInput
                    style={[styles.input]}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    {/* <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text> */}
                </View>
            {/* </KeyboardAwareScrollView> */}
        </View>
    )
}