import React,{memo} from 'react';
import {Text} from 'react-native';
import { MyErrorText } from './style';
const ErrorText = memo( ({text})=>{    
    return(
        <MyErrorText>
           {text} 
        </MyErrorText>
    )
})
export {ErrorText}