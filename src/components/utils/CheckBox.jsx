import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'


const Container = styled.div`
	background-color: rgba(224, 209, 237, 0.62);
	border-radius: 5px;
	height: ${props => props.isOpen ? '111px' : '44px'};
	width: calc(100% - 64px);
	display: flex;
	flex-direction: column;
	padding-left: 12px;
	justify-content: center;
	margin-top: 10px;
	box-sizing: border-box;
	position: relative;
	padding-top: 24px;
`

const HeaderText = styled.p`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	color: #4D65A8;
	position: absolute;
	top: 9px;
	left: 12px;
`

const CheckContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-right: 12px;
`



const CheckBoxStyle = styled.input`
	min-width: 20px;
	max-width: 20px;
	min-height: 20px;
	max-height: 20px;
`

const CheckMarkStyle = styled.span`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	color: #4D65A8;
`

const AlternativeContainer = styled.div`
	margin: 8px 0;
	display: flex;
	align-items: center;
`

const CheckBox = ({
	headerText,
	items,
	id,
	openedCell,
	setOpenedCell,
	valueToTrack,
	notExcludent = false
}) => {

	const [checks, setChecks] = valueToTrack

	const handleClick = () => {
		if (openedCell !== id) setOpenedCell(id)
	}

	const handleChange = key => {
		if (notExcludent) {
			setChecks(checks.map((bool, i) => i === key ? !bool : bool))
			return
		}

		if (checks[key]) return setChecks(checks.map(bool => false))
		setChecks(checks.map((bool, i) => i === key ? true : false))
	}

	return (
		<Container isOpen={openedCell === id} onClick={handleClick}>
			<HeaderText>{headerText}</HeaderText>
			{
				openedCell === id ? <CheckContainer>
					{
						items.map((item, key) => {
							return (
								<AlternativeContainer key={key}>
									<CheckBoxStyle
										checked={checks[key]}
										onChange={() => handleChange(key)}
										type={'checkbox'}
									/>
									<CheckMarkStyle>
										{item}
									</CheckMarkStyle>
								</AlternativeContainer>

							)
						})
					}
				</CheckContainer> : <></>
			}
		</Container>
	)
}

export default CheckBox