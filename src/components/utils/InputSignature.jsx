import styled from 'styled-components'


const Container = styled.input`
	background-color: rgba(224, 209, 237, 0.62);
	border-radius: 5px;
	width: ${props => props.width || '290px'};
	height: 44px;
	border-width: 0px;
	outline: none;
	padding-left: 5px;
	margin-top: 5px;
	margin-bottom: 5px;
	margin-right: ${props => props.marginRight || '0px'};
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	color: #4D65A8;
	&::placeholder {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		color: #4D65A8;
	}
`

const InputSignature = ({ valueToTrack, ...params }) => {
	const [value, setValue] = valueToTrack

	return (
		<Container {...params} value={value} onChange={e => setValue(e.target.value)} />
	)
}

export default InputSignature