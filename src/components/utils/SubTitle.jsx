import styled from 'styled-components'


const ContainerSubTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 18px 0;
    max-width: calc(100vw - 1cm);
`

const SubTitle = ({ children }) => {
    return (
        <ContainerSubTitle>
            {children}
        </ContainerSubTitle>
    )
}

export default SubTitle