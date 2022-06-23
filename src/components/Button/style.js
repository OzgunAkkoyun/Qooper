import styled from 'styled-components/native'
import {colors} from '../../config/colors.js'

export const LoginButton = styled.TouchableOpacity`
    font-size: 14px;
    background:${colors.blue};
    text-align: center;
    width:100%;
    height:45px;
    justify-content:center
`;
export const Logout = styled.TouchableOpacity`
    background:${colors.blue};
    text-align: center;
    width:89px;
    height:45px;
    justify-content:center
`;