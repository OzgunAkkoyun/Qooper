import React,{memo} from 'react';
import {Text} from 'react-native';
import { MyButtonText } from './style';
const MyText = memo( ({text,fontSize})=>{    
    return(
        <MyButtonText fontSize={fontSize}>
            {text}
        </MyButtonText>
    )
})
export {MyText}