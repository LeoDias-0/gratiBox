import BackGround from '../utils/BackGround'
import Title from '../utils/Title'
import InfoInput from '../utils/InfoInput'
import SubmitButton from '../utils/SubmitButton'
import NoShapeButton from '../utils/NoShapeButton'
import validateSignInInfo from '../../validations/validateSignInInfo'
import { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import { postSignIn } from '../../services/API'
import { useHistory } from 'react-router'
import UserContext from '../../contexts/UserContext'


const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useContext(UserContext)
	const history = useHistory()

	const handleSubmitClick = async () => {
		const body = {
			email,
			password
		}

		const showErrorMessage = text => {
			Swal.fire({
				title: 'Erro!',
				text,
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		}

		const validationsErrorsDetails = validateSignInInfo.validate(body).error?.details
		if (validationsErrorsDetails) return showErrorMessage('Dados inválidos!')

		try {
			const response = await postSignIn(body)

			const { token, name } = response.data

			setUser({ token, name })

			localStorage.setItem('gratibox', JSON.stringify({ ...user, token, name }))

			return history.push('/my-signature')
		} catch (error) {

			const { status } = error.response

			const messages = {
				422: 'Dados inválidos.',
				409: 'Email não cadastrado!',
				401: 'Email ou senha incorretos!',
				404: 'Página não encontrada.',
				500: 'Houve um erro interno, tente novamente mais tarde.'
			}

			return showErrorMessage(messages[status])
		}
	}

	return (
		<BackGround>
			<Title marginTop={'101px'}>Bem vindo ao GratiBox</Title>
			<InfoInput
				placeholder={'Email'}
				stateToTrack={[email, setEmail]}
				type={'email'}
			/>
			<InfoInput
				placeholder={'Senha'}
				stateToTrack={[password, setPassword]}
				type={'password'}
			/>
			<SubmitButton
				width={'237px'}
				marginTop={'150px'}
				fontSize={'36px'}
				onClick={handleSubmitClick}
			>
				Login
			</SubmitButton>
			<NoShapeButton onClick={() => history.push('/sign-up')}>Ainda não sou grato</NoShapeButton>
		</BackGround>
	)
}

export default SignIn
