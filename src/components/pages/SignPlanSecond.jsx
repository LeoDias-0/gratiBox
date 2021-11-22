import BackGround from '../utils/BackGround'
import Title from '../utils/Title'
import SubmitButton from '../utils/SubmitButton'
import Box from '../utils/Box'
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import UserContext from '../../contexts/UserContext'
import SubTitle from '../utils/SubTitle'
import { imageDetails } from '../../assets/images'
import InputSignature from '../utils/InputSignature'
import { postSignature } from '../../services/API'


const SignPlanSecond = () => {
	const history = useHistory()
	const [user, setUser] = useContext(UserContext)
	const [completeName, setCompleteName] = useState('')
	const [adress, setAdress] = useState('')
	const [cep, setCep] = useState('')
	const [city, setCity] = useState('')
	const [uf, setUf] = useState('')

	useEffect(() => {
		const storagedUser = JSON.parse(localStorage.getItem('gratibox'))
		if (storagedUser) setUser(storagedUser)

		const { token } = storagedUser
		if (!token) return history.push('/')

	}, [])

	const firstName = name => {
		if (!name) return
		let first = name.split(' ')[0]
		return first.slice(0, 1).toUpperCase() + first.slice(1)
	}


	const handleClickSubmit = async () => {
		const signature = {
			completeName,
			adress,
			cep,
			city,
			uf
		}

		try {
			await postSignature({ ...user, ...signature }, user.token)
		} catch (error) {
			console.log(error.message)
		}

		history.push('/my-signature')
	}

	return (
		<BackGround>
			<Title
				marginTop={'83px'}
				marginBottom={'20px'}
			>Bom te ver aqui, {firstName(user.name)}.</Title>
			<SubTitle
				marginTop={'0px'}
				marginBottom={'8px'}
			>“Agradecer é arte de atrair coisas boas”</SubTitle>
			<Box
				imageURL={imageDetails}
				height={'429px'}
			>
				<InputSignature
					placeholder={'Nome Completo'}
					valueToTrack={[completeName, setCompleteName]}
				/>
				<InputSignature
					placeholder={'Endereço de entrega'}
					valueToTrack={[adress, setAdress]}
				/>
				<InputSignature
					placeholder={'CEP'}
					valueToTrack={[cep, setCep]}
				/>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<InputSignature
						placeholder={'Cidade'}
						valueToTrack={[city, setCity]}
						width={'168px'}
						marginRight={'8px'}
					/>
					<InputSignature
						placeholder={'Estado'}
						valueToTrack={[uf, setUf]}
						width={'108px'}
					/>
				</div>

			</Box>
			<SubmitButton
				marginTop={'24px'}
				fontSize={'24px'}
				onClick={handleClickSubmit}
			>
				Finalizar
			</SubmitButton>
		</BackGround>
	)
}

export default SignPlanSecond
