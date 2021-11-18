import styled from 'styled-components'


const ContainerButton = styled.button`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
    border-width: 0;
    outline: none;
    background-color: transparent;
    margin-top: 17px;
    padding: 6px 30px 6px 30px;
`

const NoShapeButton = ({ children }) => {
    return (
        <ContainerButton>
            {children}
        </ContainerButton>
    )
}

export default NoShapeButton