import React, { useState,useEffect } from 'react';
import {View,Text,FlatList,TextInput   } from 'react-native'
import {useDispatch,useSelector} from 'react-redux';
import { SaveUser,DeleteUser } from '../../redux/actions/loginActions';
import { Input,BoldText,Header } from '../../components';
import { Container,PlusButton,TaskContainer,InnerContainer,SingleTodo,DeleteButton,WhiteText,NoItemText} from './style';
import {useDidMountEffect} from '../../config/helper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from '@react-navigation/native';
import {isEmtyObject} from '../../config/helper';

const Home =({navigation})=>{
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [task,setTask] = useState('');
    const [userName,setUserName] = useState('');

    const [tasks,setTasks] = useState([])
    
    //Get stored value on start
    useEffect(()=>{
        getStore();
        setUserName(state.user.firstName)
    },[state])

    //It's a custom hook to avoid first initials
    useDidMountEffect(()=>{
       setStore();
    },[tasks])

    //Set store value to users uid
    const setStore = async()=>{
        await firestore().collection('todos').doc(state.user.uid).set({todo:tasks});
        setTask('');
    }

    //Get store value
    const getStore = async()=>{
        if(state.user){
            var todos = await firestore().collection('todos').doc(state.user.uid).get();
            if(todos._data)
                setTasks(todos._data.todo);
        }
        
    }
    
    //Add item to todo list
    const addTodo = ()=>{
        setTasks(prev=>{
            var a = [...prev];
            a.push(task)
            return a;
        })
    }

    const logout = async()=>{
        AsyncStorage.clear();
        dispatch(DeleteUser())
        await auth().signOut();
        navigation.dispatch(StackActions.replace('Login'))
    }

    //Its control todo list item inputs change
    const onChangeText =(text,index)=>{
        let textInputs  = [...tasks];
        textInputs[index] = text;
        setTasks(textInputs)
    }
    
    //Delete item to todo list
    const deleteItem =(index)=>{
    let textInputs  = [...tasks];
    textInputs.splice(index,1)
    setTasks(textInputs)
    }

    const renderItem =({item,index})=>{
        return(
          <SingleTodo key={index} >
            <TextInput
              style={{height:64,}}
              onChangeText={text => onChangeText(text,index)}
              value={tasks[index]}
            />
            <DeleteButton onPress={()=>deleteItem(index)} ><WhiteText>X</WhiteText></DeleteButton>
          </SingleTodo>
         
        )
    }

    return (
        <Container>
            <Header onPress={()=>logout()} userName={userName} fontSize={14} fontSizeButton={14}/>
            <InnerContainer >
                <TaskContainer>
                    <Input value={task} onChangeText={setTask} placeHolder={"Type a task"} />
                    <PlusButton onPress={()=>addTodo()}><WhiteText>+</WhiteText></PlusButton>
                </TaskContainer>
                <BoldText text={"Tasks"}/>
                    {tasks.length == 0 ?
                    (
                        <NoItemText>{':(\n There is no task yet!'}</NoItemText>
                    )
                    : 
                    (
                        <View >
                            <FlatList
                                style = {{width:'100%'}}
                                data={tasks}
                                renderItem={renderItem} 
                            />
                        </View>
                        
                    )
                    
                    }
                
            </InnerContainer>
            
        </Container>
    )
    }

export {Home};