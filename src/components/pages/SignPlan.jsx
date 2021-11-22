import BackGround from '../utils/BackGround'
import Title from '../utils/Title'
import SubmitButton from '../utils/SubmitButton'
import Box from '../utils/Box'
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import UserContext from '../../contexts/UserContext'
import SubTitle from '../utils/SubTitle'
import { imageDetails } from '../../assets/images'
import CheckBox from '../utils/CheckBox'
import dayjs from 'dayjs'


const SignPlan = () => {
	const history = useHistory()
	const [user, setUser] = useContext(UserContext)
	const [openedCell, setOpenedCell] = useState(0)
	const [checksPlan, setChecksPlan] = useState([false, false])
	const [checksDelivery, setChecksDelivery] = useState([false, false, false])
	const [checksProducts, setChecksProducts] = useState([false, false, false])

	const strToCod = {
		Semanal: {
			'Segunda': 1, 'Quarta': 3, 'Sexta': 5
		},
		Mensal: {
			'Dia 01': 1, 'Dia 10': 10, 'Dia 20': 20
		}
	}

	const indexToCod = [[1, 3, 5], [1, 10, 20]]

	useEffect(() => {
		const storagedUser = JSON.parse(localStorage.getItem('gratibox'))
		if (storagedUser) setUser(storagedUser)

		const { token } = storagedUser
		if (!token) return history.push('/')

		if (storagedUser.type === 'Semanal') setChecksPlan([true, false])
		if (storagedUser.type === 'Mensal') setChecksPlan([false, true])

	}, [])

	const firstName = name => {
		if (!name) return
		let first = name.split(' ')[0]
		return first.slice(0, 1).toUpperCase() + first.slice(1)
	}

	const chooseListDeliver = () => {
		if (!checksPlan[0] && checksPlan[1]) return ['Dia 01', 'Dia 10', 'Dia 20']
		return ['Segunda', 'Quarta', 'Sexta']
	}


	const handleClickSubmit = () => {
		const signature = {
			type: checksPlan[0] ? 'Semanal' : 'Mensal',
			products: checksProducts,
			date: dayjs().format('DD/MM/YYYY'),
			day_to_deliver: indexToCod[checksPlan.indexOf(true)][checksDelivery.indexOf(true)] || 1
		}

		setUser({ ...user, ...signature })

		localStorage.setItem('gratibox', JSON.stringify({ ...user, ...signature }))

		history.push('/sign-plan-2')
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
				<CheckBox
					id={0}
					headerText={'Plano'}
					openedCell={openedCell}
					setOpenedCell={setOpenedCell}
					items={['Semanal', 'Mensal']}
					valueToTrack={[checksPlan, setChecksPlan]}
				/>
				<CheckBox
					id={1}
					headerText={'Entrega'}
					openedCell={openedCell}
					setOpenedCell={setOpenedCell}
					items={chooseListDeliver()}
					valueToTrack={[checksDelivery, setChecksDelivery]}
				/>
				<CheckBox
					id={2}
					headerText={'Quero receber'}
					openedCell={openedCell}
					setOpenedCell={setOpenedCell}
					items={['Chás', 'Incensos', 'Produtos orgânicos']}
					valueToTrack={[checksProducts, setChecksProducts]}
					notExcludent={true}
				/>

			</Box>
			<SubmitButton
				marginTop={'24px'}
				fontSize={'24px'}
				onClick={handleClickSubmit}
			>
				Pŕoxima
			</SubmitButton>
		</BackGround>
	)
}

export default SignPlan
