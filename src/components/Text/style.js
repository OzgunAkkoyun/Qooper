import styled from 'styled-components/native'
import {colors} from '../../config/colors.js'
export const Title = styled.Text`
    font-size: 18px;
    color:${colors.black};
    text-align: center;
    margin-bottom:24px;
    font-family:'Poppins-SemiBold';
`;
export const MyButtonText = styled.Text`
    font-size: ${props=>props.fontSize}px;
    color: ${colors.buttonText};
    text-align: center;
    font-family:'Poppins-SemiBold';
`;
export const MyErrorText = styled.Text`
    font-size: 10px;
    color: ${colors.error};
    width:70%;
    font-family:'Poppins-Regular';
`;

export const HeaderText = styled.Text`
    font-size: ${props=>props.fontSize}px;
    color: ${colors.black};
    font-family:'Poppins-Regular';
`;