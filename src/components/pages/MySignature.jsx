import BackGround from '../utils/BackGround'
import Title from '../utils/Title'
import SubmitButton from '../utils/SubmitButton'
import Box from '../utils/Box'
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import UserContext from '../../contexts/UserContext'
import SubTitle from '../utils/SubTitle'
import SignatureInfoDiplay from '../utils/SignatureInfoDisplay'
import { imageDetails } from '../../assets/images'
import { getSignature } from '../../services/API.js'


const MySignature = () => {
	const history = useHistory()
	const [user, setUser] = useContext(UserContext)
	const [signature, setSignature] = useState({})

	useEffect(() => {
		const storagedUser = JSON.parse(localStorage.getItem('gratibox'))
		if (storagedUser) setUser(storagedUser)

		const { token } = storagedUser
		if (!token) return history.push('/')

		getSignature(token).then(res => {

			const signature = res.data

			setSignature(signature)

		}).catch(res => {
			console.log(res)
		})

	}, [])

	const firstName = name => {
		if (!name) return
		let first = name.split(' ')[0]
		return first.slice(0, 1).toUpperCase() + first.slice(1)
	}

	return (
		<BackGround>
			<Title
				marginTop={'101px'}
				marginBottom={'20px'}
			>Bom te ver aqui, {firstName(user.name)}.</Title>
			<SubTitle
				marginTop={'0px'}
				marginBottom={'8px'}
			>“Agradecer é arte de atrair coisas boas”</SubTitle>
			<Box
				imageURL={imageDetails}
			>
				<SignatureInfoDiplay signature={signature} />
			</Box>
			<SubmitButton
				marginTop={'24px'}
				fontSize={'24px'}
				onClick={() => history.push('/')}
			>
				Avaliar entregas
			</SubmitButton>
		</BackGround>
	)
}

export default MySignature
