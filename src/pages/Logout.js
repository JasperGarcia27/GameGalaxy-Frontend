import {Navigate} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import UserContext from '../UserContext';


export default function Logout(){
	const {unsetUser, setUser} = useContext(UserContext);

	
	unsetUser();

	useEffect(() =>{
		setUser({
			id:null,
			isAdmin: null
		})
		window.localStorage.removeItem("isLoggedIn");
	}, [])

	return(
		<Navigate to = '/' />
	)
}