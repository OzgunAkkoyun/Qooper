import React,{memo} from 'react';
import {TouchableOpacity,TextInput} from 'react-native';
import { TextInput1,TextInputContainer } from './style';
import { ErrorText } from '../Text';

const Input = memo( ({value,onChangeText,placeHolder,error}) => {
    return(
        <TextInputContainer>
            <TextInput1
                placeholder={placeHolder}
                onChangeText={onChangeText}
                value={value}
            />
            {error != '' && <ErrorText text={error}/>}
            
        </TextInputContainer>
       
    )
});
export {Input}