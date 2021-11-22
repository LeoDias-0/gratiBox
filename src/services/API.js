import axios from 'axios'


const { REACT_APP_BASE_URL } = process.env

const BASE_URL = REACT_APP_BASE_URL || 'http://localhost:4000'

const makeConfig = token => {
	return {
		headers: {
			authorization: `Bearer ${token}`,
		}
	}
}

const postSignIn = body => {
	return axios.post(`${BASE_URL}/sign-in`, body)
}

const postSignUp = body => {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

const getSignature = (token) => {
	const config = makeConfig(token)

	return axios.get(`${BASE_URL}/my-signature`, config)
}


export {
	postSignIn,
	postSignUp,
	getSignature
}
