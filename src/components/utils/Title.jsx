import styled from 'styled-components'


const ContainerTitle = styled.p`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	text-align: center;
	color: #FFFFFF;
	margin: 28px 0;
`

const Title = ({ children }) => {
	return (
		<ContainerTitle>
			{children}
		</ContainerTitle>
	)
}

export default Title