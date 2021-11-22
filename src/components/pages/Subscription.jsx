import BackGround from '../utils/BackGround'
import Title from '../utils/Title'
import SubmitButton from '../utils/SubmitButton'
import Box from '../utils/Box'
import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import UserContext from '../../contexts/UserContext'
import SubTitle from '../utils/SubTitle'
import { imagePlansWeekly, imagePlansMonthly } from '../../assets/images'
import SubscriptionText from '../utils/SubscriptionText'


const Subscription = () => {
	const history = useHistory()
	const [user, setUser] = useContext(UserContext)

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

	return (
		<BackGround bottom={'-75vh'}>
			<Title
				marginTop={'101px'}
				marginBottom={'28px'}
			>Bom te ver aqui, {firstName(user.name)}.</Title>
			<SubTitle
				marginTop={'0px'}
				marginBottom={'30px'}
			>Você ainda não assinou um plano, que tal começar agora?</SubTitle>
			<Box
				imageHeight={'55%'}
				backgroundColor={'#E5CDB3'}
				borderRadius={'25px'}
				marginBottom={'95px'}
				imageURL={imagePlansWeekly}
			>
				<SubscriptionText
					marginBottom={'5px'}
				>
					Você recebe um box por semana.
					Ideal para quem quer exercer a gratidão todos os dias.
				</SubscriptionText>
				<SubmitButton>Assinar</SubmitButton>
			</Box>

			<Box
				imageHeight={'55%'}
				backgroundColor={'#E5CDB3'}
				borderRadius={'25px'}
				imageURL={imagePlansMonthly}
			>
				<SubscriptionText
					marginBottom={'-13px'}
				>
					Você recebe um box por mês.<br /><br />
					Ideal para quem está começando agora.
				</SubscriptionText>
				<SubmitButton>Assinar</SubmitButton>
			</Box>
		</BackGround>
	)
}

export default Subscription
