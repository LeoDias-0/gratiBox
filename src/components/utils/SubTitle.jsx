import styled from 'styled-components'


const ContainerSubTitle = styled.p`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	text-align: center;
	color: #FFFFFF;
	margin-top: ${props => props.marginTop || '18px'};
	margin-right: ${props => props.marginRight || '0px'};
	margin-bottom: ${props => props.marginBottom || '18px'};
	margin-left: ${props => props.marginLeft || '0px'};
	max-width: calc(100vw - 1cm);
`

const SubTitle = ({ children, ...params }) => {
	return (
		<ContainerSubTitle {...params}>
			{children}
		</ContainerSubTitle>
	)
}

export default SubTitle