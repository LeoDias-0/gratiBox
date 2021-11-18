import styled from 'styled-components'


const ContainerButton = styled.div`
	background-color: #8C97EA;
	border-radius: 10px;
	box-sizing: border-box;
	padding: 11px 35px 11px 35px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	color: #FFFFFF;
	display: inline-block
`

const SubmitButton = ({ children }) => {
	return (
		<ContainerButton>
			{children}
		</ContainerButton>
	)
}

export default SubmitButton