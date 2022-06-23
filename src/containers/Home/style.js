import styled from 'styled-components/native';
import {colors} from '../../config/colors.js'
export const Container = styled.View`
    flex:1;
    background:${colors.bg};
    justify-content:center;
    align-items:center;
`;

export const PlusButton = styled.TouchableOpacity`
    background:${colors.gray};
    justify-content:center;
    align-items:center;
    width:20px;
    height:20px;
    border-radius:15px;
    position:absolute;
    top:-2px;
    right:10px;
`;

export const TaskContainer = styled.View`
    justify-content:center;
    align-items:center;
    width:100%;
    height:45px;
    position:relative;
`;

export const InnerContainer = styled.View`
  width:90%;
`;

export const SingleTodo = styled.View`
    position:relative;
    margin-bottom:1px;
    background:${colors.border};
    width:100%;
`;

export const DeleteButton = styled.TouchableOpacity`
    background:${colors.gray};
    justify-content:center;
    align-items:center;
    width:20px;
    height:20px;
    border-radius:15px;
    position:absolute;
    top:23px;
    right:10px;
`;


export const WhiteText = styled.Text`
   color:${colors.bg}
`;

export const NoItemText = styled.Text`
   color:${colors.purple}
   font-size: 14px;
    text-align: center;
    font-family:'Poppins-Regular';
`;