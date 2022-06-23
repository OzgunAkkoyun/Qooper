import styled from 'styled-components/native'
import {colors} from '../../config/colors.js'

export const TextInput1 = styled.TextInput`
    font-size: 14px;
    text-align: left;
    border: 1px solid ${colors.border};
    width:100%;
    height:40px;
    font-family:'Poppins-Regular';
    padding-top: 0px;
    padding-bottom: 0px;

`;
export const TextInputContainer = styled.View`
    width:100%;
    margin-bottom:16px;
    justify-content:center;
    align-items:center;
    font-family:'Poppins-Regular';

`;