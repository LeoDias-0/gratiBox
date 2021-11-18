import styled from 'styled-components'


const ContainerFooterFirstPage = styled.div`
    box-sizing: border-box;
    background-color: #4D65A8;
    position: fixed;
    z-index: -1;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
`


const FooterFirstPage = ({ children }) => {
    return (
        <ContainerFooterFirstPage>
            {children}
        </ContainerFooterFirstPage>
    )
}

export default FooterFirstPage