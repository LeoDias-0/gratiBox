import styled from 'styled-components'


const Container = styled.div`
	width: ${props => props.width || 'calc(100% - 8px)'};
	background-color: ${props => props.backgroundColor || '#FFFFFF'};
	border-radius: ${props => props.borderRadius || '10px'};
	box-sizing: border-box;
	height: ${props => props.height || '57vh'};
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: ${props => props.marginBottom || 0};
`

const Box = ({ children, ...params }) => {
	const imageURL = params.imageURL || ''
	const borderRadius = params.borderRadius || '10px'
	const imageHeight = params.imageHeight || '45%'

	return (
		<Container {...params}>
			<img src={imageURL} style={{
				objectFit: 'cover',
				borderRadius,
				height: imageHeight,
				width: '100%'
			}} alt='' />
			{children}
		</Container>
	)
}

export default Box