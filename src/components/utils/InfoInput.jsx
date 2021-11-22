import styled from 'styled-components'


const ContainerInput = styled.input`
	background-color: #FFFFFF;
	border: 1px solid #604848;
	border-radius: 10px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	color: rgb(0, 0, 0);
	box-sizing: border-box;
	&::placeholder {
		color: rgba(96, 72, 72, 0.4);
	}
	padding: 18px;
	margin-bottom: ${props => props.marginBottom || '8px'};
	outline: none;
`

const InfoInput = ({ stateToTrack, ...params }) => {
	const [value, setValue] = stateToTrack
	return (
		<ContainerInput
			value={value}
			onChange={e => setValue(e.target.value)}
			{...params}
		/>
	)
}

export default InfoInput