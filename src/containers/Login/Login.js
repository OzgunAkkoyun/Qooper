import React, { useState,useEffect } from 'react';
import {View,Text} from 'react-native'
import {useDispatch,useSelector} from 'react-redux';
import { SaveUser } from '../../redux/actions/loginActions';
import { BoldText,Input,Button,ErrorText } from '../../components/';
import { Container,InputContainer } from './style';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from '@react-navigation/native';
import {isEmtyObject} from '../../config/helper';
import auth from '@react-native-firebase/auth';
const Login = ({ navigation })=>{
    const dispatch = useDispatch();
    const state = useSelector(state =>state);
    
    const [userName,setUserName] = useState('');
    const [userNameError,setUserNameError] = useState('');
    const [firstName,setFirstName] = useState('');
    const [firstNameError,setFirstNameError] = useState('');
    const [lastName,setLastName] = useState('');

    useEffect(()=>{
        if(!isEmtyObject(state.user) ){
            navigation.dispatch(StackActions.replace('Home'))
        }
    })

    const submit = async() =>{
        if(userName.trim() == ''){
            setUserNameError('User name is required')
        }else if(firstName.trim() == ''){
            setFirstNameError('First name is required')
        }else{
            setUserNameError('')
            setFirstNameError('')
            var user = {userName:userName,firstName:firstName,lastName:lastName,uid:''}
      
            auth().signInAnonymously().then(async (data) => {
                user.uid = data.user.uid;
                dispatch(SaveUser(user));
                await AsyncStorage.setItem('user',JSON.stringify(user));
                navigation.dispatch(StackActions.replace('Home'))
            }).catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Enable anonymous in your firebase console.');
                }

                console.error(error);
            });
            
        }
    }

    return (
        <Container>
            <BoldText text={"Login to your account"}/>
            <InputContainer>
                <Input value={userName} onChangeText={setUserName} placeHolder={"Username"} error={userNameError}/>
                <Input value={firstName} onChangeText={setFirstName} placeHolder={"First Name"}/>
                <Input value={lastName} onChangeText={setLastName} placeHolder={"Last Name"}/>
                <Button fontSize={14} onPress={()=>submit()}/>
            </InputContainer>
        </Container>
    )
    }

export {Login};