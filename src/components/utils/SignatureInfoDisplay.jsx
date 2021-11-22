import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
	width: 100%;
	padding: 19px 17px 0px 17px;
	box-sizing: border-box;
`

const Text = styled.span`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	color: #4D65A8;
	margin-bottom: 3px;
`

const Value = styled.span`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	color: #E63C80;
	line-height: 23px;
	margin-left: ${props => props.marginLeft || '0'};
`

const Footer = styled.div`
	bottom: 10px;
	width: calc(100% - 34px);
	display: flex;
	justify-content: space-evenly;
	position: absolute;
	box-sizing: border-box;
`

const FooterText = styled.span`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	color: #E63C80;
`

const SignatureInfoDiplay = ({ signature }) => {

	const { tea, organic_produts, incense } = signature
	const productsInPortuguese = [
		'Chá',
		'Produtos organicos',
		'Incenso'
	]

	let products = [tea, organic_produts, incense].map((prod, index) => {
		if (prod) return productsInPortuguese[index]
	})

	return (
		<Container>
			<Text>Plano: </Text><Value>{signature.type}</Value><br />
			<Text>Data da assinatura: </Text><Value>{signature.date}</Value><br />
			<Text>Próximas entregas:</Text><br />
			{
				([signature.first_day, signature.second_day, signature.third_day] || []).map((day, key) => {
					return (
						<React.Fragment key={key}>
							<Value marginLeft={'5em'}>{day}</Value><br />
						</React.Fragment>
					)
				})
			}
			<Footer>
				{
					(products || []).map((item, index) => {
						return <FooterText key={index}>{item}</FooterText>
					})
				}
			</Footer>
		</Container>
	)
}

export default SignatureInfoDiplay