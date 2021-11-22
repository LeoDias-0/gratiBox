import BackGround from '../utils/BackGround'
import Title from '../utils/Title'
import InfoInput from '../utils/InfoInput'
import SubmitButton from '../utils/SubmitButton'
import NoShapeButton from '../utils/NoShapeButton'
import { useState } from 'react'
import validateSignUpInfo from '../../validations/validateSignUpInfo'
import Swal from 'sweetalert2'
import { postSignUp } from '../../services/API'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [reapeatedPassword, setReapeatedPassword] = useState('')
	const history = useHistory()

	const handleSubmitClick = async (req, res) => {
		const body = {
			name,
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

		if (password !== reapeatedPassword) return showErrorMessage('As senhas devem ser iguais!')

		const validationsErrorsDetails = validateSignUpInfo.validate(body).error?.details
		if (validationsErrorsDetails) return showErrorMessage('Dados inválidos!')

		try {
			await postSignUp(body)

			history.push('/sign-in')

			return
		} catch (error) {
			const { status } = error.response

			const messages = {
				422: 'Dados inválidos.',
				403: 'Email já cadastrado!',
				500: 'Houve um erro interno, tente novamente mais tarde.'
			}

			return showErrorMessage(messages[status])
		}

	}

	return (
		<BackGround>
			<Title marginTop={'130px'}>Bem vindo ao GratiBox</Title>
			<InfoInput
				placeholder={'Nome'}
				stateToTrack={[name, setName]}
			/>
			<InfoInput
				placeholder={'Email'}
				stateToTrack={[email, setEmail]}
			/>
			<InfoInput
				placeholder={'Senha'}
				stateToTrack={[password, setPassword]}
			/>
			<InfoInput
				placeholder={'Confirmar senha'}
				stateToTrack={[reapeatedPassword, setReapeatedPassword]}
			/>
			<SubmitButton
				width={'237px'}
				marginTop={'50px'}
				fontSize={'36px'}
				onClick={handleSubmitClick}
			>
				Cadastrar
			</SubmitButton>
			<NoShapeButton onClick={() => history.push('/sign-in')}>
				Já sou grato
			</NoShapeButton>
		</BackGround>
	)
}

export default SignUp