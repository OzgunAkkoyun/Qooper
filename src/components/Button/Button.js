import React,{memo} from 'react';
import {TouchableOpacity} from 'react-native';
import { MyText } from '../Text';
import { LoginButton } from './style';

const Button = memo(({onPress,fontSize})=>{
    return(
        <LoginButton onPress={onPress}>
            <MyText fontSize={fontSize} text={"LOGIN"}/>
        </LoginButton>
    )
})
export {Button}