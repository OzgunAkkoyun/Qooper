import React,{memo} from 'react';
import {TouchableOpacity} from 'react-native';
import { MyText } from '../Text';
import { Logout } from './style';

const LogoutButton = memo(({onPress,text,fontSize})=>{
    return(
        <Logout onPress={onPress}>
            <MyText text={text} fontSize={fontSize}/>
        </Logout>
    )
})
export {LogoutButton}