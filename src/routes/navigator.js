import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useDispatch,useSelector,Provider} from 'react-redux';
import { SaveUser } from '../redux/actions/loginActions';
import store from '../redux/store';
import {Login,Home} from '../containers';
import isEmtyObject from '../config/helper';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const App =({navigation})=>{
	const dispatch = useDispatch();
	const state = useSelector(state =>state);
	useEffect(()=>{
		//AsyncStorage.clear()
        getUser();
    },[])

    const getUser = async() => {
        AsyncStorage.getItem('user').then(user=>{
            if(user){
                dispatch(SaveUser(JSON.parse(user)))
            }
    })
    };

	return (
		<NavigationContainer>
			{/* {!isEmtyObject(state.user) ?
			(
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				</Stack.Navigator>
			)
			
			:
			(<Stack.Navigator initialRouteName="LoginContainer">
			
				<Stack.Screen name="LoginContainer" component={LoginContainer} options={{ headerShown: false }} />
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
			
			</Stack.Navigator>)
			} */}

			<Stack.Navigator initialRouteName="Login">
			
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
			
			</Stack.Navigator>
		</NavigationContainer>
	)
}


const Navigator = () => {

  return (
	<Provider store = {store}>
		<App/>
	</Provider>
    
  );
};


export default Navigator;
