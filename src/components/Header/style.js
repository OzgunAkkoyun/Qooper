import styled from 'styled-components/native'
import {colors} from '../../config/colors.js'

export const MyHeader = styled.View`
    position:absolute;
    background:${colors.buttonText};
    top:0;
    width:100%;
    height:77px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:0 10px;
`;