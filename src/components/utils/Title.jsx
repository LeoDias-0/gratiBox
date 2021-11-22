import styled from 'styled-components'


const ContainerTitle = styled.p`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	text-align: center;
	color: #FFFFFF;
	margin-top: ${props => props.marginTop || '28px'};
	margin-right: ${props => props.marginRight || '0px'};
	margin-bottom: ${props => props.marginBottom || '28px'};
	margin-left: ${props => props.marginLeft || '0px'};
`

const Title = ({ children, ...params }) => {
	return (
		<ContainerTitle {...params}>
			{children}
		</ContainerTitle>
	)
}

export default Title