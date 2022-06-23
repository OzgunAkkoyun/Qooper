import React,{memo} from 'react';
import {Text} from 'react-native';
import { Title } from './style';
const BoldText = memo( ({text}) => {
    return(
        <Title>
            {text}
        </Title>
    )
})

export {BoldText}