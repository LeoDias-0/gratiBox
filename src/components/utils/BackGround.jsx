import styled from 'styled-components'


const BackGround = styled.div`
	box-sizing: border-box;
	background-color: #6D7CE4;
	position: absolute;
	top: 0;
	right: 0;
	bottom: ${({ bottom }) => bottom ? bottom : 0};
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default BackGround