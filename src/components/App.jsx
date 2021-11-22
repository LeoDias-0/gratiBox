import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MySignature from './pages/MySignature'
import UserContext from '../contexts/UserContext'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Subscription from './pages/Subscription'

const App = () => {
	const [user, setUser] = useState({})


	useEffect(() => {
		const storagedUser = JSON.parse(localStorage.getItem('gratibox'))
		if (storagedUser) setUser(storagedUser)
	}, [user.token])

	return (
		<UserContext.Provider value={[user, setUser]}>
			<BrowserRouter>
				<ResetCSS />
				<Switch>
					<Route from='/' exact>
						<Home />
					</Route>
					<Route from='/sign-in' exact>
						<SignIn />
					</Route>
					<Route from='/sign-up' exact>
						<SignUp />
					</Route>
					<Route from='/my-signature' exact>
						<MySignature />
					</Route>
					<Route from='/subscription' exact>
						<Subscription />
					</Route>
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	)
}

export default App