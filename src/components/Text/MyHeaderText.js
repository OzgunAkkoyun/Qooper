import React,{memo} from 'react';
import {Text} from 'react-native';
import { HeaderText } from './style';
const MyHeaderText = memo( ({text,fontSize}) => {
    return(
        <HeaderText fontSize={fontSize}>
            {text}
        </HeaderText>
    )
})

export {MyHeaderText}