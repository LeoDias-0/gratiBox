import styled from 'styled-components'


const SubscriptionText = styled.div`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #4D65A8;
	padding: 20px;
	max-width: 300px;
	margin-bottom: ${props => props.marginBottom || 0};
`

export default SubscriptionText