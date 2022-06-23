import React,{memo} from 'react';
import {TouchableOpacity} from 'react-native';
import { MyHeaderText } from '../Text';
import { LogoutButton } from '../Button';
import { MyHeader } from './style';

const Header = memo(({userName,fontSize,fontSizeButton,onPress})=>{
    return(
        <MyHeader >
            <MyHeaderText fontSize={fontSize} text={"Welcome, "+userName}/>
            <LogoutButton onPress={onPress} fontSize={fontSizeButton} text={"LOGOUT"}/>
        </MyHeader>
    )
});
export {Header}